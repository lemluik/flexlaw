export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(213,60%,18%,0.88)] via-[hsl(213,50%,22%,0.85)] to-[hsl(213,60%,18%,0.92)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-4">
        <div className="brand-line mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-heading tracking-tight text-balance">
          Юридические и
          <br />
          <span className="text-[hsl(199,85%,55%)]">регистрационные услуги</span>
          <br />
          для бизнеса в Кыргызстане
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Комплексное юридическое сопровождение: от регистрации компаний и открытия банковских счетов
          до получения финтех-лицензий, консалтинга и судебного представительства
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacts" className="btn-primary">
            Получить консультацию
          </a>
          <a href="#services" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
            Наши услуги
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(199,85%,55%)] font-heading">7+</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">лет опыта</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(199,85%,55%)] font-heading">200+</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">зарегистрированных компаний</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(199,85%,55%)] font-heading">50+</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">полученных лицензий</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(199,85%,55%)] font-heading">95%</div>
            <div className="text-xs md:text-sm text-white/50 mt-1">клиентов по рекомендации</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
