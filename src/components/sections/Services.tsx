import { Building2, Landmark, FileCheck, RefreshCw, XCircle } from 'lucide-react'

const mainServices = [
  {
    icon: Building2,
    title: 'Регистрация ОсОО / ИП / Филиала',
    description: 'Полный цикл регистрации бизнеса в Кыргызстане. Подготовка документов, регистрация во всех органах, получение ПИН, печать, открытие счёта.',
    price: 'от 100 USD',
    timeframe: '1–7 рабочих дней',
    features: [
      'Подготовка пакета учредительных документов',
      'Регистрация в Министерстве юстиции',
      'Регистрация в Налоговой службе и Социальном фонде',
      'Изготовление печати',
      'Получение ПИН',
      'Сопровождение при открытии банковского счёта',
    ],
  },
  {
    icon: Landmark,
    title: 'Получение лицензий',
    description: 'Содействие в получении лицензий для финтех-компаний. Подготовка полного пакета документов и сопровождение процесса «под ключ».',
    price: 'По запросу',
    timeframe: 'Индивидуально',
    features: [
      'Лицензии платёжных организаций',
      'Лицензии операторов электронных денег',
      'Лицензии на обмен виртуальных активов',
      'Иные финтех-лицензии',
    ],
  },
  {
    icon: FileCheck,
    title: 'Открытие банковского счёта',
    description: 'Подготовка документов для банка, нотариальное заверение карточек подписей, открытие счёта и подключение интернет-банкинга.',
    price: '100 USD',
    timeframe: '1–3 рабочих дня',
    features: [
      'Подготовка документов для банка',
      'Нотариальное заверение карточек подписей',
      'Открытие счёта',
      'Подключение интернет-банкинга',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Изменения в регистрационных данных',
    description: 'Смена юридического адреса, руководителя, данных учредителей. Регистрация изменений во всех органах.',
    price: '100 USD',
    timeframe: '1 рабочий день',
    features: [
      'Смена юридического адреса',
      'Смена руководителя',
      'Изменение данных учредителей',
      'Регистрация изменений во всех органах',
    ],
  },
  {
    icon: XCircle,
    title: 'Ликвидация ОсОО / ИП',
    description: 'Полное сопровождение ликвидации: подготовка документов, закрытие в Налоговой и Социальном фонде, архивное сопровождение.',
    price: 'от 350 USD',
    timeframe: 'от 30 рабочих дней',
    features: [
      'Подготовка полного пакета документов',
      'Сопровождение ликвидации во всех органах',
      'Закрытие в Налоговой и Социальном фонде',
      'Архивное сопровождение',
    ],
  },
]

const additionalServices = [
  { name: 'Консультации (налоги, бухгалтерия)', price: '2 000 сом / час' },
  { name: 'Бухгалтерское сопровождение', price: 'От 8 000 сом / месяц' },
  { name: 'Представительство в суде', price: 'От 10 000 сом' },
  { name: 'Претензионные письма', price: '5 000 сом' },
  { name: 'Составление договоров', price: 'От 5 000 сом' },
  { name: 'Апостиль и легализация документов', price: 'От 8 000 сом' },
  { name: 'Переводы документов', price: 'От 2 000 сом' },
  { name: 'Нотариальные услуги', price: 'От 2 000 сом' },
]

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Услуги</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Полный спектр юридических и регистрационных услуг для бизнеса в Кыргызстане
          </p>
        </div>

        {/* Price tags for registration */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-brand-soft rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-brand-dark font-heading">600 USD</div>
            <div className="text-sm text-foreground mt-1">Регистрация ОсОО</div>
            <div className="text-xs text-muted-foreground mt-0.5">2 рабочих дня</div>
          </div>
          <div className="bg-brand-soft rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-brand-dark font-heading">100 USD</div>
            <div className="text-sm text-foreground mt-1">Регистрация ИП</div>
            <div className="text-xs text-muted-foreground mt-0.5">1 рабочий день</div>
          </div>
          <div className="bg-brand-soft rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-brand-dark font-heading">800 USD</div>
            <div className="text-sm text-foreground mt-1">Филиал / Представительство</div>
            <div className="text-xs text-muted-foreground mt-0.5">7 рабочих дней</div>
          </div>
          <div className="bg-brand-soft rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-brand-dark font-heading">100 USD</div>
            <div className="text-sm text-foreground mt-1">Открытие счёта</div>
            <div className="text-xs text-muted-foreground mt-0.5">1–3 рабочих дня</div>
          </div>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="card-elevated group">
              <div className="w-12 h-12 rounded-lg bg-brand-soft flex items-center justify-center mb-5 group-hover:bg-brand/10 transition-colors">
                <service.icon className="w-6 h-6 text-brand" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-heading mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="tag-brand">{service.price}</span>
                <span className="text-xs text-muted-foreground">{service.timeframe}</span>
              </div>

              <ul className="space-y-1.5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="hsl(210, 80%, 48%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional services table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-semibold text-heading mb-6 text-center">Дополнительные услуги</h3>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Услуга</th>
                  <th className="text-right px-6 py-3 font-medium text-muted-foreground">Стоимость</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {additionalServices.map((item, i) => (
                  <tr key={i} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-3 text-foreground">{item.name}</td>
                    <td className="px-6 py-3 text-right font-medium text-brand-dark">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contacts" className="btn-primary">
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  )
}
