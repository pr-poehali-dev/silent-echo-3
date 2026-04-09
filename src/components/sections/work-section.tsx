import { useReveal } from "@/hooks/use-reveal"

const problems = [
  "Закупка товара",
  "Поиск и анализ товара",
  "Переговоры с поставщиками",
  "Юридические и бухгалтерские знания",
  "Работа с контентом",
  "Продвижение карточек",
  "Организация процессов отгрузки товаров",
  "Грамотный расчёт юнит-экономики",
]

const advantages = [
  { number: "01", title: "Снижение товарных рисков", description: "Торгуешь без вложений в закупку — риск потерь сводится к нулю" },
  { number: "02", title: "Защита от ценовых войн и демпинга конкурентов", description: "Уникальные условия с поставщиками защищают твои позиции" },
  { number: "03", title: "Возможность торговать без рекламных расходов", description: "Органический трафик благодаря визуальным категориям" },
  { number: "04", title: "Высокая оборачиваемость капитала", description: "Деньги не замораживаются в товарных остатках" },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-3xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            С какими проблемами <br />
            <span className="text-red-400">сталкиваются селлеры?</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ Требуется большой набор компетенций</p>
        </div>

        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {problems.map((p, i) => (
            <span
              key={i}
              className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1.5 font-mono text-xs text-foreground/80 backdrop-blur-sm"
            >
              {p}
            </span>
          ))}
        </div>

        <p
          className={`mb-8 font-sans text-sm text-red-400 md:text-base transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Также проблема — низкая и неэффективная оборачиваемость капитала.
        </p>

        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <h3 className="font-sans text-xl font-light text-foreground md:text-2xl lg:text-3xl">
            Как эти проблемы закрывает дроп <br />и почему это лучшая модель?
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`rounded-xl border border-foreground/15 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/30 hover:bg-foreground/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${550 + i * 100}ms` }}
            >
              <span className="mb-2 block font-mono text-xs text-foreground/40">{adv.number}</span>
              <h4 className="mb-1 font-sans text-sm font-medium text-foreground md:text-base">{adv.title}</h4>
              <p className="font-mono text-xs leading-relaxed text-foreground/60">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
