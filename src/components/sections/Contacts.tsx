import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function Contacts() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error('Ошибка отправки')

      setIsSubmitted(true)
      setFormState({ name: '', company: '', phone: '', email: '', interest: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setError('Не удалось отправить заявку. Попробуйте позвонить или написать в Telegram.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contacts" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(213,50%,18%)]">
        <img
          src="/images/services-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section !text-white mb-4">Связаться с нами</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Оставьте заявку — проведём бесплатную консультацию по вашему вопросу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-1">Телефон / WhatsApp</div>
                <a href="tel:+996999123456" className="text-white font-medium hover:text-brand transition-colors">
                  +996 (999) 123-456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-1">Email</div>
                <a href="mailto:info@flexlaw.net" className="text-white font-medium hover:text-brand transition-colors">
                  info@flexlaw.net
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-1">Адрес</div>
                <span className="text-white font-medium">
                  г. Бишкек, Кыргызстан
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Send className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-1">Telegram</div>
                <a href="https://t.me/gibkiyzakon" className="text-white font-medium hover:text-brand transition-colors">
                  @gibkiyzakon
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-1">Режим работы</div>
                <div className="text-white text-sm space-y-0.5">
                  <div>Пн–Пт: 9:00 – 18:00</div>
                  <div>Сб: 10:00 – 14:00 (по записи)</div>
                  <div>Вс: выходной</div>
                </div>
              </div>
            </div>

            {/* Quick buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="https://t.me/gibkiyzakon" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/10 text-brand text-sm font-medium hover:bg-brand/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Написать в Telegram
              </a>
              <a href="https://wa.me/996999123456" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/10 text-brand text-sm font-medium hover:bg-brand/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Написать в WhatsApp
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ваше имя *"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm"
              />
              <input
                type="text"
                placeholder="Компания"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Телефон *"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                required
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm"
              />
            </div>
            <div>
              <select
                value={formState.interest}
                onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm appearance-none cursor-pointer"
                style={{ backgroundImage: 'none' }}
              >
                <option value="" className="text-foreground">Что вас интересует?</option>
                <option value="registration" className="text-foreground">Регистрация компании</option>
                <option value="license" className="text-foreground">Получение лицензии</option>
                <option value="account" className="text-foreground">Открытие счёта</option>
                <option value="consulting" className="text-foreground">Консультация</option>
                <option value="other" className="text-foreground">Другое</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Опишите вашу ситуацию"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all text-sm resize-none"
              />
            </div>
            <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
              {isLoading ? 'Отправляем...' : isSubmitted ? '✓ Заявка отправлена' : 'Отправить заявку'}
            </button>
            {error && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}
            <p className="text-xs text-white/30 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
