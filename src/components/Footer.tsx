export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[hsl(213,50%,12%)] py-10 px-4">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-lg font-bold text-white">
            Гибкий Закон
          </div>
          <div className="text-sm text-white/40 text-center">
            ОсОО «Гибкий Закон» — юридические и регистрационные услуги в Кыргызстане
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-brand transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <div className="text-xs text-white/30">
            &copy; {currentYear} ОсОО «Гибкий Закон». Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}
