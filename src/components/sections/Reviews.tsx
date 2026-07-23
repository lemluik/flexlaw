import { useState } from 'react'

const reviews = [
  {
    name: 'Алексей М.',
    role: 'CEO, IT-компания (Россия → Кыргызстан)',
    text: 'Обратились для регистрации филиала в Бишкеке. Всё сделали оперативно: регистрация, счёт в банке, все документы — за неделю. Профессиональный подход, рекомендую.',
    rating: 5,
  },
  {
    name: 'Дмитрий К.',
    role: 'Основатель финтех-стартапа',
    text: 'Помогли получить лицензию оператора электронных денег. Процесс занял 4 месяца, но без их сопровождения мы бы точно растянули на год. Знают все нюансы работы с Нацбанком.',
    rating: 5,
  },
  {
    name: 'Елена С.',
    role: 'Финансовый директор, торговая компания',
    text: 'Работаем на абонентском обслуживании уже второй год. Все вопросы по договорам, налогам и кадрам решают быстро. Отдельно ценю прозрачную коммуникацию и отчётность.',
    rating: 5,
  },
  {
    name: 'Марат Т.',
    role: 'Индивидуальный предприниматель',
    text: 'Зарегистрировал ИП через «Гибкий Закон» за один день. Всё чётко: подготовили документы, сами сходили в органы, я только подписал. Стоимость адекватная.',
    rating: 5,
  },
]

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="reviews" className="section-padding bg-surface">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Отзывы клиентов</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Мнение тех, кто уже работал с нами
          </p>
        </div>

        {/* Reviews carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated text-center py-10 px-8 md:px-12 bg-white">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="hsl(22, 90%, 52%)">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78L10 1z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">
              "{reviews[activeIndex].text}"
            </blockquote>

            {/* Author */}
            <div>
              <div className="font-semibold text-heading">{reviews[activeIndex].name}</div>
              <div className="text-sm text-muted-foreground mt-1">{reviews[activeIndex].role}</div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-brand w-8'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
