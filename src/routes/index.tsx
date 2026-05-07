import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: BlogArticle,
});

function BlogArticle() {
  return (
    <div className="bg-background min-h-dvh text-foreground antialiased selection:bg-highlight selection:text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <header className="border-b border-border/60 py-6 px-6 md:px-10 flex justify-between items-center text-xs md:text-sm font-medium tracking-wide text-muted-foreground">
        <div className="uppercase tracking-[0.2em] text-[10px] md:text-xs">Instituto de Neurociência Comportamental</div>
        <div className="hidden sm:block uppercase tracking-widest text-[10px] md:text-xs">Insights Clínicos — Vol. 07</div>
      </header>

      <main className="max-w-[68ch] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
        <article>
          {/* Article Header */}
          <header className="mb-14 flex flex-col gap-6">
            <div className="text-clinical text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Neurociência · Saúde Mental
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight font-medium text-foreground"
              style={{ fontFamily: "var(--font-serif)", lineHeight: 1.05 }}
            >
              Isto está a manter você preso na depressão{" "}
              <span className="bg-yellow-300/80 text-foreground px-1.5 py-0.5 box-decoration-clone rounded-sm">
                (e você faz todos os dias)
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Você acha que a depressão simplesmente "acontece" com você? Errado. Ela está sendo alimentada — silenciosamente — pelos seus próprios hábitos.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground border-t border-border/60 pt-6">
              <div className="bg-secondary size-10 rounded-full flex items-center justify-center shrink-0 text-clinical font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                DN
              </div>
              <div>
                <div className="font-medium text-foreground">Equipe Editorial</div>
                <div className="text-xs">Depressão Nunca Mais · 8 min de leitura</div>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="space-y-7 text-base sm:text-lg leading-[1.75] text-muted-foreground text-pretty">
            <h2 className="text-2xl md:text-3xl tracking-tight mt-12 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              A verdade que ninguém te conta
            </h2>
            <p>
              Depressão não é só emocional. É <strong className="text-foreground font-medium">química cerebral + comportamento repetido</strong>. E existem ações diárias que destroem os neurotransmissores responsáveis pelo seu bem-estar — principalmente a <em>serotonina</em> e a <em>dopamina</em>.
            </p>

            <h2 className="text-2xl md:text-3xl tracking-tight mt-14 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              Se você faz isto, está a piorar a sua depressão agora
            </h2>

            <ol className="space-y-7 list-none p-0 mt-6">
              {[
                {
                  title: "Ficar isolado o dia inteiro",
                  body: "O cérebro humano é social. O isolamento reduz a produção de dopamina e aumenta o cortisol (hormona do stress). Resultado: mais vazio, mais ansiedade, mais depressão.",
                },
                {
                  title: "Dormir mal ou em excesso",
                  body: "Dormir pouco ou demais desregula completamente a serotonina. O humor fica instável, a mente pesada, e você acorda pior do que dormiu.",
                },
                {
                  title: "Consumir conteúdo negativo constantemente",
                  body: "Notícias, vídeos tristes, comparações nas redes sociais ativam áreas do cérebro ligadas ao medo e à inadequação. Você literalmente treina a sua mente para se sentir mal.",
                },
                {
                  title: "Não se expor ao sol",
                  body: "Pouca luz solar = baixa produção de serotonina. Sem serotonina suficiente, o seu cérebro entra em modo de sobrevivência emocional.",
                },
                {
                  title: "Ficar parado, sem atividade física",
                  body: "Exercício físico liberta endorfinas — antidepressivos naturais. Sem movimento, o corpo acumula tensão e a mente afunda.",
                },
                {
                  title: "Pensamento repetitivo negativo (ruminação)",
                  body: "Pensar demais nos mesmos problemas fortalece conexões neurais negativas. O seu cérebro aprende a ser depressivo. Sim — aprende.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="text-clinical font-semibold tabular-nums mt-1 text-sm tracking-widest shrink-0" style={{ fontFamily: "var(--font-sans)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-foreground font-medium mb-1.5 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="my-12 sm:my-14 bg-highlight p-6 sm:p-8 md:p-10 border-l-[3px] border-clinical">
              <p
                className="text-lg sm:text-xl md:text-2xl text-foreground leading-snug italic text-balance m-0"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "Não é falta de força. Não é azar. É um ciclo. E você está preso nele."
              </p>
            </aside>

            <p>
              Mas a boa notícia é: se hábitos errados pioram a depressão, <strong className="text-foreground font-medium">hábitos certos podem reverter isso</strong>. E é exatamente isto que quase ninguém te ensina.
            </p>

            <h2 className="text-2xl md:text-3xl tracking-tight mt-16 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              A parte que muda tudo
            </h2>

            <p>
              Se comportamentos podem desregular o seu cérebro, então comportamentos também podem reorganizá-lo. Isto não é opinião — é ciência.
            </p>

            <h2 className="text-xl md:text-2xl tracking-tight mt-12 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              Os hábitos certos ativam os mesmos mecanismos de tratamentos clínicos
            </h2>

            <p>Estudos em neurociência mostram que certas rotinas conseguem:</p>

            <ul className="space-y-4 list-none p-0 my-6">
              {[
                {
                  k: "Aumentar a produção natural de serotonina.",
                  v: "Neurotransmissor ligado ao bem-estar, calma e estabilidade emocional.",
                },
                {
                  k: "Melhorar a sensibilidade dos receptores de dopamina.",
                  v: "Neurotransmissor ligado ao prazer, motivação e recompensa.",
                },
                { k: "Reduzir o cortisol (hormona do stress).", v: "" },
                {
                  k: "Estimular a neuroplasticidade.",
                  v: "Capacidade do cérebro de se reorganizar.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-clinical mt-2 shrink-0">✓</span>
                  <div>
                    <span className="text-foreground font-medium">{item.k}</span>
                    {item.v && <span className="text-muted-foreground"> {item.v}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <p>
              Em outras palavras: o seu cérebro pode sair do estado depressivo — se receber os estímulos certos.
            </p>

            <aside className="my-12 sm:my-14 bg-secondary p-6 sm:p-8 md:p-10">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-clinical font-semibold mb-3">Importante</p>
              <div className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed m-0 space-y-4" style={{ fontFamily: "var(--font-serif)" }}>
                <p className="m-0">
                  Existem comprimidos que ajudam a regular os neurotransmissores como serotonina e dopamina. Mas há algo que muita gente ignora: os hábitos certos podem fazer algo semelhante — estimulando o próprio corpo a produzir e equilibrar esses químicos de forma natural.
                </p>
                <p className="m-0">
                  A indústria farmacêutica não vai fabricar algo que te livre para sempre. Eles querem-te preso nisso — para continuarem a ganhar com a venda dos seus comprimidos.
                </p>
                <p className="m-0">
                  Por isso, a dose de serotonina e dopamina que esses comprimidos libertam é propositadamente baixa — o suficiente para te aliviar por uns tempos, mas nunca para te curar. Resultado? Voltas sempre ao mesmo problema. E à mesma farmácia.
                </p>
              </div>
            </aside>

            <h2 className="text-2xl md:text-3xl tracking-tight mt-14 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              Por que muitas pessoas voltam ao mesmo estado
            </h2>

            <p>
              Porque tratam o efeito, mas não mudam o sistema que gera o problema.
            </p>

            <p>
              Costumo recomendar aos meus pacientes que estão a lutar contra a depressão um livro simples, acessível e direto ao ponto. Não é caro, mas entrega ferramentas práticas que ajudam a mudar padrões mentais e comportamentais no dia a dia. É o tipo de leitura que não fica só na teoria — orienta o cérebro a sair do ciclo e começar, passo a passo, a construir um estado mais equilibrado e estável.
            </p>

            <h2 className="text-2xl md:text-3xl tracking-tight mt-14 mb-4 text-foreground font-medium" style={{ fontFamily: "var(--font-serif)" }}>
              Imagine isto
            </h2>

            <ul className="space-y-3 list-none p-0">
              <li className="flex gap-3 items-start"><span className="text-clinical mt-2">—</span><span>Acordar e sentir leveza mental.</span></li>
              <li className="flex gap-3 items-start"><span className="text-clinical mt-2">—</span><span>Ter energia sem esforço.</span></li>
              <li className="flex gap-3 items-start"><span className="text-clinical mt-2">—</span><span>Parar de lutar contra a própria mente.</span></li>
            </ul>

            <p className="mt-6">Isto não é sorte. É biologia aplicada corretamente.</p>
          </div>

          {/* CTA */}
          <div className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-border">
            <div className="bg-secondary p-6 sm:p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-between">
              <div className="flex-1 flex flex-col gap-4 w-full">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-clinical">
                  Recurso Clínico
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                  Depressão Nunca Mais
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                  Um manual estruturado de hábitos específicos, baseado em neurociência, para criar um ambiente químico favorável no cérebro, interromper ciclos de pensamento negativo e reensinar o seu sistema nervoso a funcionar de forma equilibrada.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Investimento</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                      R$ 69,99
                    </span>
                  </div>
                  <a
                    href="https://pay.hotmart.com/A105688536G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-clinical hover:bg-clinical-hover transition-colors text-primary-foreground px-6 sm:px-8 py-4 text-xs sm:text-sm font-medium tracking-wide inline-flex items-center justify-center gap-2 uppercase self-stretch sm:self-start text-center"
                  >
                    Adquirir o livro agora
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                <div className="bg-background p-4 shadow-xl shadow-foreground/10 w-44 aspect-[3/4] flex items-center justify-center border border-border rotate-2 transition-transform hover:rotate-0 duration-300">
                  <div className="text-center px-3 w-full h-full border border-border/60 flex flex-col justify-between py-6">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">O Método</div>
                    <div className="text-xl font-medium leading-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
                      Depressão<br />Nunca<br />Mais
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Edição 2026</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-12 text-center text-base md:text-lg text-muted-foreground italic text-balance" style={{ fontFamily: "var(--font-serif)" }}>
              Se você continuar com os mesmos hábitos, vai continuar com o mesmo cérebro.
              <br />
              Mas se mudar o que faz diariamente, você muda quem se torna.
            </p>
          </div>
        </article>
      </main>

      <footer className="border-t border-border/60 py-10 px-6 text-center text-xs text-muted-foreground tracking-wide">
        © 2026 Depressão Nunca Mais · Este conteúdo é educativo e não substitui acompanhamento médico ou psicológico.
      </footer>
    </div>
  );
}
