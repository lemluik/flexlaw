import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const interestLabels: Record<string, string> = {
  registration: 'Регистрация компании',
  license: 'Получение лицензии',
  account: 'Открытие счёта',
  consulting: 'Консультация',
  other: 'Другое',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, company, phone, email, interest, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Имя и телефон обязательны' })
  }

  const interestLabel = interest ? (interestLabels[interest] || interest) : '—'

  try {
    await resend.emails.send({
      from: 'Форма сайта <noreply@flexlaw.net>',
      to: 'info@flexlaw.net',
      subject: `Новая заявка с сайта — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c; border-bottom: 2px solid #2e7fd4; padding-bottom: 10px;">
            Новая заявка с сайта flexlaw.net
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f0f5ff;">
              <td style="padding: 12px 16px; font-weight: bold; color: #555; width: 35%;">Имя</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #555;">Компания</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${company || '—'}</td>
            </tr>
            <tr style="background: #f0f5ff;">
              <td style="padding: 12px 16px; font-weight: bold; color: #555;">Телефон</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${email || '—'}</td>
            </tr>
            <tr style="background: #f0f5ff;">
              <td style="padding: 12px 16px; font-weight: bold; color: #555;">Интересует</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${interestLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #555; vertical-align: top;">Сообщение</td>
              <td style="padding: 12px 16px; color: #1a1a1a;">${message || '—'}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">
            Заявка отправлена с сайта flexlaw.net
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Ошибка отправки письма' })
  }
}
