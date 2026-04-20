import GridBackground from "@/components/GridBackground";

const achievements = [
  "An 18-year-old builder.",
  "Joined an SF-based AI research startup at 17 while in high school. Worked directly with the founders of a YC-backed graph database startup, helping them with production issues.",
  "Built an open-source Rust web server library — 10,000+ users.",
  "Built a custom smartwatch from scratch at 15.",
  "100% win rate in hackathons.",
  "Represented Team Finland in the world's biggest robotics competition.",
  "Finalist — Finland's National Informatics Olympiad; HIIT programming contest.",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono">
      <GridBackground />

      <div className="relative z-10">

        {/* Nav — 4 cols matching grid; col 4 = available */}
        <nav className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-4 py-4">
              <div className="flex items-center justify-center">
                <a href="mailto:noel@noelmatero.com" className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors">
                  noel@noelmatero.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://github.com/NoelMatero/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  github
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://www.linkedin.com/in/matero-noel-70b414390" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  linkedin
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse shrink-0" />
                <span className="text-xs text-muted-foreground">available</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 py-14 md:py-16 items-center">

            {/* Box 1: name centered */}
            <div className="flex items-center justify-center fade-in-up fade-in-delay-1">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight text-center">
                Noel<br />Matero
              </h1>
            </div>

            {/* Box 2: empty */}
            <div />

            {/* Boxes 3-4: links */}
            <div className="col-span-2 flex flex-col justify-center pl-6 gap-3 fade-in-up fade-in-delay-2">
              <a
                href="mailto:noel@noelmatero.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <span className="text-accent/60">→</span>
                noel@noelmatero.com
              </a>
              <a
                href="https://github.com/NoelMatero/"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <span className="text-accent/60">→</span>
                github.com/NoelMatero
              </a>
            </div>

          </div>
        </section>

        {/* Achievements — box borders sit on outer grid lines; transparent so inner lines show through */}
        <section className="max-w-6xl mx-auto">
          <div className="mx-6 border border-[hsl(var(--grid-line-subtle))]">
            <div className="px-6 py-10">
              <p className="text-xs text-accent mb-8">whoami</p>
              <div className="divide-y divide-[hsl(var(--grid-line-subtle))]">
                {achievements.map((item, i) => (
                  <div key={i} className="flex gap-6 py-3.5 group">
                    <span className="text-muted-foreground/20 text-xs w-5 shrink-0 pt-0.5 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      i === 0
                        ? "text-foreground font-medium"
                        : "text-muted-foreground group-hover:text-foreground/70"
                    }`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-5 mt-6">
          <p className="text-xs text-muted-foreground/25">© {new Date().getFullYear()}</p>
        </footer>

      </div>
    </main>
  );
};

export default Index;
