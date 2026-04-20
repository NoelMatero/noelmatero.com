import GridBackground from "@/components/GridBackground";
import StatusBadge from "@/components/StatusBadge";
import SocialLinks from "@/components/SocialLinks";
import Terminal from "@/components/Terminal";
import GridCard from "@/components/GridCard";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <GridBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6 py-4 relative">
            <span className="absolute left-10 top-1/2 -translate-y-1/2 font-mono text-sm font-medium">
              [Noel Matero]
            </span>

            {/* right-aligned social icons */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center">
              <SocialLinks />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 min-h-[50vh]">
              {/* Left column - Content (moved slightly inward with symmetric padding) */}
              <div className="flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 md:pr-12">
                <div className="fade-in-up fade-in-delay-1">
                  <StatusBadge />
                </div>
                
                <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] fade-in-up fade-in-delay-2">
                  <span className="whitespace-nowrap">***Noel</span>
                  <br />
                  <span className="text-muted-foreground">*****Matero</span>
                </h1>
                
                <div className="mt-8 flex items-center gap-4 fade-in-up fade-in-delay-4">
                  <a 
                    href="mailto:noel@noelmatero.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium text-sm hover:bg-foreground/80 transition-colors"
                  >
                    Get in touch
                  </a>
                  <a 
                    href="https://github.com/NoelMatero/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(var(--grid-line))] text-sm hover:border-[hsl(0,0%,30%)] transition-colors bg-background relative z-20"
                  >
                    View work
                  </a>
                </div>
              </div>                
            </div>
          </div>
        </section>

        {/* Stats Section - Full width grid aligned 
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-b border-[hsl(var(--grid-line-subtle))] grid grid-cols-2 md:grid-cols-4">
              <StatCard value="" label="Bugs fixed at 3am" />
              <StatCard value="Couple" label="APIs redesigned" />
              <StatCard value="Not enough" label="Things I wish existed — now do" />
              <StatCard value="Soon?" label="Startup" />
            </div>
          </div>
        </section>      
        */}        
       
        {/* Achievements Section */}
        <section className="border-t border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              <div className="absolute inset-0 bg-background z-0" />
              <div className="relative z-10 py-16 md:py-24 border-b border-[hsl(var(--grid-line-subtle))]">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-10">
                  // background
                </p>
                <div className="divide-y divide-[hsl(var(--grid-line-subtle))]">
                  {[
                    "An 18-year-old builder.",
                    "Joined an SF-based AI research startup at 17 while in high school. Worked directly with the founders of a YC-backed graph database startup, helping them with production issues.",
                    "Built an open-source Rust web server library — 10,000+ users.",
                    "Built a custom smartwatch from scratch at 15.",
                    "100% win rate in hackathons.",
                    "Represented Team Finland in the world's biggest robotics competition.",
                    "Finalist — Finland's National Informatics Olympiad; HIIT programming contest.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 py-5 group">
                      <span className="font-mono text-xs text-muted-foreground/40 w-6 shrink-0 pt-1 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className={`leading-relaxed transition-colors ${i === 0 ? "text-lg font-medium text-foreground" : "text-muted-foreground group-hover:text-foreground/80"}`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Large Grid */}
        <section className="border-t border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              {/* mask only the two outer background vertical lines (25% and 75%), keep center line visible */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  left: "25%",
                  transform: "translateX(-50%)",
                  width: "calc(var(--grid-line-width, 1px) + 1px)",
                }}
              >
                <div className="h-full bg-background w-full" />
              </div>
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  left: "75%",
                  transform: "translateX(-50%)",
                  width: "calc(var(--grid-line-width, 1px) + 1px)",
                }}
              >
                <div className="h-full bg-background w-full" />
              </div>

              <div className="grid md:grid-cols-2 items-stretch border-b border-[hsl(var(--grid-line-subtle))]">
                {/* left column: heading shifted 1px left */}                                                         
              </div>
            </div>
          </div>
        </section>

        {/* Footer — allow GridBackground vertical lines to show through */}
        <footer className="max-w-6xl mx-auto px-6 py-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/NoelMatero/" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/matero-noel-70b414390" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
