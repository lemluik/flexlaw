const cases = [
  {
    number: '01',
    category: 'Регистрация бизнеса',
    title: 'Регистрация IT-компании из России в Кыргызстане',
    description: 'Клиент — IT-компания из РФ, решившая открыть филиал в Бишкеке. Полное сопровождение: подготовка документов, регистрация филиала, открытие банковского счёта в местном банке.',
    result: 'Регистрация за 5 дней, счёт открыт на 3-й день',
  },
  {
    number: '02',
    category: 'Финтех-лицензия',
    title: 'Лицензия оператора электронных денег',
    description: 'Сопровождение международной финтех-компании в получении лицензии на операции с электронными деньгами в Кыргызстане. Подготовка пакета документов, взаимодействие с Нацбанком.',
    result: 'Лицензия получена за 4 месяца',
  },
  {
    number: '03',
    category: 'Корпоративное право',
    title: 'Реорганизация холдинга с иностранными инвесторами',
    description: 'Структурирование группы из 3 компаний с участием иностранных инвесторов. Разработка учредительных документов, соглашений между учредителями, оптимизация налоговой нагрузки.',
    result: 'Структура выстроена, риски минимизированы',
  },
  {
    number: '04',
    category: 'Ликвидация',
    title: 'Закрытие неактивного ОсОО',
    description: 'Полное сопровождение ликвидации компании, не ведущей деятельность. Подготовка решений, закрытие в Налоговой и Социальном фонде, снятие с учёта.',
    result: 'Ликвидация завершена за 35 рабочих дней',
  },
]

export function Cases() {
  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Кейсы</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Реальные задачи, которые мы решаем для бизнеса в Кыргызстане
          </p>
        </div>

        {/* Cases list */}
        <div className="space-y-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.number}
              className="card-elevated flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Number */}
              <div className="number-badge flex-shrink-0">
                {caseItem.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-xs font-medium uppercase tracking-wider text-brand mb-2">
                  {caseItem.category}
                </div>
                <h3 className="font-heading text-xl font-semibold text-heading mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseItem.description}
                </p>
              </div>

              {/* Result badge */}
              <div className="flex-shrink-0 md:text-right">
                <div className="inline-block bg-brand-soft rounded-lg px-4 py-2">
                  <div className="text-xs text-muted-foreground mb-0.5">Результат</div>
                  <div className="text-sm font-semibold text-brand-dark">
                    {caseItem.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
