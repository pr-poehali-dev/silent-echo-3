import { useReveal } from "@/hooks/use-reveal"

const visualCategories = [
  {
    title: "Цена — не главный фактор выбора",
    description:
      "Решение о покупке принимается не только на основе цены, а в том числе из визуального соответствия, стиля и индивидуальных предпочтений покупателя.",
    direction: "top",
  },
  {
    title: "Высокий органический спрос",
    description:
      "Покупатель готов тратить больше времени на выбор, что увеличивает время просмотра и объём органического трафика внутри категории.",
    direction: "right",
  },
]

const platform = [
  { title: "Поставщики с широким ассортиментом товаров", direction: "left" },
  { title: "Фулфилмент с сильной IT-автоматизацией", direction: "top" },
  { title: "Инфраструктура по работе с возвратами", direction: "right" },
  { title: "IT-платформа для селлера", direction: "bottom" },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Вы торгуете товарами,<br />
            в которые вложены <span className="text-foreground/40">сотни миллионов</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Лучшие категории для дропшиппинга</p>
        </div>

        <p
          className={`mb-4 max-w-2xl text-sm leading-relaxed text-foreground/80 md:text-base transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          Наш опыт говорит о том, что лучшие категории по объёму продаж с высокой доходностью в модели дропшиппинга —
          это категории, где{" "}
          <strong className="text-foreground">решение о покупке принимается на основе визуального выбора.</strong>
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {visualCategories.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border border-foreground/15 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 150}ms` }}
            >
              <h3 className="mb-2 font-sans text-base font-medium text-foreground md:text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <h3 className="mb-4 font-sans text-xl font-light text-foreground md:text-2xl">Что мы предлагаем?</h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {platform.map((item, i) => (
              <div
                key={i}
                className={`group rounded-xl border border-foreground/15 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/30 hover:bg-foreground/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${650 + i * 100}ms` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/40">0{i + 1}</span>
                </div>
                <p className="font-sans text-sm font-medium leading-snug text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
