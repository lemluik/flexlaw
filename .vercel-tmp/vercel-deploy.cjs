#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const isWindows = os.platform() === 'win32';
const ALLOWED_COMMANDS = new Set(['vercel', 'npm', 'pnpm', 'yarn']);
function log(msg) { console.error(msg); }
function commandExists(cmd) {
  if (!ALLOWED_COMMANDS.has(cmd)) throw new Error(`Command not in whitelist: ${cmd}`);
  try {
    if (isWindows) { const r = spawnSync('where', [cmd], { stdio: 'ignore' }); return r.status === 0; }
    else { const r = spawnSync('sh', ['-c', `command -v "$1"`, '--', cmd], { stdio: 'ignore' }); return r.status === 0; }
  } catch { return false; }
}
function getCommandOutput(cmd, args) {
  try {
    const r = spawnSync(cmd, args, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'], shell: isWindows });
    return r.status === 0 ? (r.stdout || '').trim() : null;
  } catch { return null; }
}
function checkVercelInstalled() {
  if (!commandExists('vercel')) { log('Error: Vercel CLI not installed'); process.exit(1); }
  log(`Vercel CLI version: ${getCommandOutput('vercel', ['--version']) || 'unknown'}`);
}
function checkLoginStatus() {
  try {
    const r = spawnSync('vercel', ['whoami'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], shell: isWindows });
    const output = (r.stdout || '').trim();
    if (r.status === 0 && output && !output.includes('Error') && !output.includes('not logged in')) {
      log(`Logged in as: ${output}`); return true;
    }
  } catch {}
  return false;
}
function checkProject(projectPath) {
  const absPath = path.resolve(projectPath);
  if (!fs.existsSync(absPath) || !fs.statSync(absPath).isDirectory()) { log(`Error: Directory not found: ${absPath}`); process.exit(1); }
  log(`Project path: ${absPath}`);
  return absPath;
}
function detectPackageManager(projectPath) {
  if (fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(projectPath, 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(projectPath, 'package-lock.json'))) return 'npm';
  if (commandExists('npm')) return 'npm';
  return null;
}
function runBuild(projectPath) {
  const packageJsonPath = path.join(projectPath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) return;
  let pkg;
  try { pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')); } catch { return; }
  if (!pkg.scripts || !pkg.scripts.build) return;
  const pkgManager = detectPackageManager(projectPath);
  if (!pkgManager) { log('Error: No package manager found'); process.exit(1); }
  log('Running build...');
  const buildArgs = pkgManager === 'npm' ? ['run', 'build'] : ['build'];
  const result = spawnSync(pkgManager, buildArgs, { cwd: projectPath, stdio: 'inherit', shell: isWindows });
  if (result.status !== 0) { log('Build failed!'); process.exit(1); }
  log('Build completed successfully!');
}
function doDeploy(projectPath) {
  log('Starting deployment...');
  const result = spawnSync('vercel', ['--prod', '--yes'], {
    cwd: projectPath,
    encoding: 'utf8',
    stdio: ['inherit', 'pipe', 'pipe'],
    timeout: 300000,
    shell: isWindows
  });
  const output = (result.stdout || '') + (result.stderr || '');
  log(output);
  if (result.status !== 0) { log('Deployment failed!'); process.exit(1); }
  const aliasedMatch = output.match(/Aliased:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
  const productionMatch = output.match(/Production:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
  const url = aliasedMatch ? aliasedMatch[1] : (productionMatch ? productionMatch[1] : null);
  log('Deployment successful!');
  console.log(JSON.stringify({ status: 'success', url }));
}
function main() {
  log('========================================');
  log('Vercel Deployment');
  log('========================================');
  checkVercelInstalled();
  if (!checkLoginStatus()) { log('Error: Not logged in. Run login script first.'); process.exit(1); }
  const projectPath = checkProject('.');
  runBuild(projectPath);
  doDeploy(projectPath);
}
main();
