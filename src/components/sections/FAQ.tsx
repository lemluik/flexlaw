import { useState } from 'react'

const faqItems = [
  {
    question: 'Сколько стоит регистрация компании в Кыргызстане?',
    answer: 'Стоимость регистрации зависит от формы организации: ИП — от 100 USD (1 день), ОсОО — от 600 USD (2 рабочих дня), филиал/представительство — от 800 USD (7 рабочих дней). В стоимость включена подготовка всех документов, регистрация в органах, изготовление печати и получение ПИН.',
  },
  {
    question: 'Может ли иностранец зарегистрировать компанию в Кыргызстане?',
    answer: 'Да, иностранные граждане и компании могут регистрировать бизнес в КР наравне с резидентами. Для регистрации ОсОО достаточно паспорта. Мы сопровождаем весь процесс «под ключ».',
  },
  {
    question: 'Какие документы нужны для регистрации ОсОО?',
    answer: 'Для регистрации ОсОО нужны: паспорта учредителей, решение об учреждении, устав компании, заявление установленной формы, сведения о юридическом адресе. Мы подготавливаем весь пакет самостоятельно — от вас только копии паспортов и вводная информация.',
  },
  {
    question: 'Как долго открывается банковский счёт в Кыргызстане?',
    answer: 'При наличии полного пакета документов открытие счёта занимает 1–3 рабочих дня. Мы сопровождаем процесс: подготавливаем документы, организуем нотариальное заверение карточек подписей, помогаем выбрать банк под задачи бизнеса.',
  },
  {
    question: 'Как получить лицензию на обмен виртуальных активов?',
    answer: 'Процесс занимает от 3 до 6 месяцев. Требуется подготовить бизнес-план, документы о соответствии, пройти проверку регулятора. Мы сопровождаем полный цикл: от подготовки документов до получения лицензии. Стоимость — по запросу, зависит от сложности проекта.',
  },
  {
    question: 'Нужно ли личное присутствие для регистрации бизнеса?',
    answer: 'Для регистрации компании и открытия банковского счета личное присутствие не обязательно — мы можем действовать по доверенности.',
  },
  {
    question: 'Какая налоговая система в Кыргызстане для бизнеса?',
    answer: 'Для юридических лиц доступны несколько режимов: общая и единая системы налогообложения. Выбор зависит от вида деятельности и оборота. Мы консультируем по выбору оптимального режима.',
  },
  {
    question: 'Как быстро вы реагируете на запросы?',
    answer: 'На первичные обращения отвечаем в течение нескольких часов в рабочее время. По срочным вопросам — в приоритетном порядке. После заключения договора каждому клиенту назначается курирующий специалист.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Частые вопросы</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о ведении бизнеса в Кыргызстане
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4 text-left">
                  {item.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="hsl(210, 80%, 48%)"
                  strokeWidth="1.5"
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
