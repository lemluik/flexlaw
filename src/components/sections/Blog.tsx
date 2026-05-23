const articles = [
  {
    date: '15 мая 2026',
    category: 'Регистрация бизнеса',
    title: 'Как зарегистрировать компанию в Кыргызстане: пошаговое руководство',
    excerpt: 'Разбираем полный процесс регистрации ОсОО и ИП в КР: какие документы нужны, сколько стоит, какие сроки, и на что обратить внимание иностранным учредителям.',
  },
  {
    date: '28 апреля 2026',
    category: 'Финтех',
    title: 'Лицензия на обмен виртуальных активов в Кыргызстане: требования и процесс',
    excerpt: 'Обзор требований Нацбанка КР для получения лицензии криптообменника. Какие документы нужны, сколько времени занимает процесс, и какие риски учитывать.',
  },
  {
    date: '10 апреля 2026',
    category: 'Налоги',
    title: 'Налоговая система Кыргызстана для бизнеса: что нужно знать в 2026 году',
    excerpt: 'Основные налоги для юридических лиц в КР: налог на прибыль, НДС, патент, упрощённая система. Сравнение режимов и рекомендации по выбору.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Полезные материалы</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Актуальные статьи и разборы для ведения бизнеса в Кыргызстане
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="card-elevated group cursor-pointer">
              {/* Category & date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-brand">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-heading mb-3 group-hover:text-brand transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Читать далее
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
