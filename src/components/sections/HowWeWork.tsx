import { Phone, FileText, Briefcase, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Знакомство и обсуждение',
    description: 'Звонок или встреча, где мы обсуждаем ваши задачи и разбираем запрос. Определяем объём работы и сроки.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Коммерческое предложение',
    description: 'Предоставляем детальное КП с перечнем услуг, стоимостью и сроками именно для вашего кейса.',
  },
  {
    icon: Briefcase,
    number: '03',
    title: 'Реализация задач',
    description: 'Выполняем все заявленные работы максимально оперативно и качественно. Регулярно информируем о прогрессе.',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Результат и сопровождение',
    description: 'Передаём все документы и результат. При необходимости — дальнейшее сопровождение вашего бизнеса.',
  },
]

export function HowWeWork() {
  return (
    <section id="process" className="section-padding bg-surface">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Как мы работаем</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Прозрачный процесс от первого контакта до результата
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Icon circle */}
              <div className="w-24 h-24 rounded-full bg-white border-2 border-brand/20 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm">
                <step.icon className="w-8 h-8 text-brand" />
              </div>

              {/* Number */}
              <div className="text-4xl font-bold text-brand/10 font-heading mb-2">
                {step.number}
              </div>

              <h3 className="font-heading text-lg font-semibold text-heading mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
