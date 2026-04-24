import GridBackground from "@/components/GridBackground";
import CodeBlock from "@/components/CodeBlock";
import Screensaver from "@/components/Screensaver";

const achievements = [
  "An 18-year-old builder.",
  "Joined SF-based AI research startup at 17 while in high school; previously direct report to founders of HelixDB (YC X25) working on production graph databases.",
  "Built an open-source Rust web server library — 10,000+ users.",
  "Built a custom smartwatch from scratch at 15.",
  "100% win rate in hackathons.",
  "Represented Team Finland in the world's biggest robotics competition.",
  "Finalist — Finland's National Informatics Olympiad; HIIT programming contest.",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono">
      <Screensaver />
      <GridBackground />

      <div className="relative z-10">

        {/* Nav — 4 cols matching grid; col 4 = available */}
        <nav className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-4 py-4">
              <div className="flex items-center justify-center">
                <a href="mailto:noel@noelmatero.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-accent/60">→</span>noel@noelmatero.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://www.linkedin.com/in/matero-noel-70b414390" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-accent/60">→</span>LinkedIn
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a href="https://github.com/NoelMatero/" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-accent/60">→</span>github.com/NoelMatero
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
        <section className="max-w-6xl mx-auto pt-10 pb-0">
          <div className="mx-6">

            {/* White name box — solid bg blocks grid lines inside */}
            <div className="bg-white text-black flex items-center justify-center py-10 md:py-14 border border-[hsl(var(--grid-line))]">
              <h1 className="text-6xl md:text-8xl font-medium tracking-tight whitespace-nowrap">
                Noel Matero
              </h1>
            </div>

          </div>
        </section>

        {/* Achievements — box borders sit on outer grid lines; transparent so inner lines show through */}
        <section className="max-w-6xl mx-auto">
          <div className="mx-6 border border-[hsl(var(--grid-line))]">
            {/* Header — no bg so center grid line shows through */}
            <div className="flex flex-col items-center text-center px-6 pt-8 pb-6 border-b border-[hsl(var(--grid-line))]">
              <p className="text-xs text-accent mb-3">whoami</p>
              <p className="text-base font-medium text-foreground">{achievements[0]}</p>
            </div>
            {/* List — solid bg hides grid lines */}
            <div className="bg-background divide-y divide-[hsl(var(--grid-line))]">
              {achievements.slice(1).map((item, i) => (
                <div key={i} className="flex gap-6 px-6 py-3.5 group">
                  <span className="text-muted-foreground/20 text-xs w-5 shrink-0 pt-0.5 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto mt-6">
          <div className="mx-6 border border-[hsl(var(--grid-line))]">
            <div className="flex flex-col items-center text-center px-6 pt-6 pb-5 border-b border-[hsl(var(--grid-line))]">
              <p className="text-xs text-accent">projects</p>
            </div>
            <div className="grid grid-cols-2 bg-background">

              {/* Orangutan */}
              <div className="border-r border-[hsl(var(--grid-line))] p-6 flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-medium mb-1">Orangutan</h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">Lightweight Rust web server framework inspired by Flask. 10,000+ downloads on crates.io.</p>
                  </div>
                  <div className="flex flex-col gap-1 shrink-0 text-right">
                    <a href="https://github.com/NoelMatero/orangutan" target="_blank" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-accent/60">→</span>github
                    </a>
                  </div>
                </div>
                <CodeBlock language="rust" code={`use orangutan::*;

#[route(path = "/hello", method = "[POST, GET]")]
fn hello_handler(req: &Request) -> Response {
    let mut res = Response::new();
    res.insert("Hello!");
    res
}

fn main() {
    let mut app = Orangutan::new("127.0.0.1:8080");
    app.run();
    // http://127.0.0.1:8080/hello
}`} />
              </div>

              {/* DIY Smartwatch */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-sm font-medium">DIY Smartwatch</h2>
                    <a href="https://github.com/NoelMatero/DemoSmartWatch" target="_blank" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-accent/60">→</span>github
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Custom PCB smartwatch built to explore electronics, PCB design, and embedded systems using EasyEDA. Built from scratch at 15.</p>
                </div>
                <div className="flex-1 border border-[hsl(var(--grid-line))] overflow-hidden">
                  <img src="/pcb_back.png" alt="DIY Smartwatch PCB" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
            <div className="border-t border-[hsl(var(--grid-line))] bg-background flex justify-center px-6 py-3">
              <a href="https://github.com/NoelMatero/" target="_blank" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-accent/60">→</span>view rest on github.com/NoelMatero
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-xs text-muted-foreground/25">© {new Date().getFullYear()}</p>
        </footer>

      </div>
    </main>
  );
};

export default Index;
