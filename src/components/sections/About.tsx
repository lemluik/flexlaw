import { CheckCircle } from 'lucide-react'

const advantages = [
  'Практический опыт сопровождения локального и международного бизнеса',
  'Работа «под ключ» — от подготовки документов до получения результата',
  'Соблюдение сроков и прозрачная коммуникация',
  'Индивидуальный подход к каждому клиенту',
  'Конфиденциальность и юридическая безопасность',
]

export function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/about-portrait.png"
                alt="Команда Гибкий Закон"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand/20 rounded-xl -z-10" />
          </div>

          {/* Text content */}
          <div>
            <div className="brand-line mb-6" />
            <h2 className="heading-section mb-6">О компании</h2>
            <p className="text-body-lg mb-6">
              ОсОО «Гибкий Закон» предоставляет комплексное юридическое сопровождение бизнеса:
              от регистрации компаний и открытия банковских счетов до получения финтех-лицензий,
              консалтинговых услуг и судебного представительства.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Мы работаем с локальными и международными клиентами, обеспечивая оперативное
              оформление документов, прозрачные условия сотрудничества и сопровождение
              на каждом этапе. Специалисты компании работают на рынке Кыргызстана более 7 лет.
            </p>

            <h3 className="font-heading text-xl font-semibold text-heading mb-4">Почему выбирают нас</h3>
            <div className="space-y-3">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
