import GridBackground from "@/components/GridBackground";
import StatusBadge from "@/components/StatusBadge";
import SocialLinks from "@/components/SocialLinks";
import Terminal from "@/components/Terminal";
import GridCard from "@/components/GridCard";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";

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
            <div className="grid md:grid-cols-2 min-h-[70vh]">
              {/* Left column - Content (moved slightly inward with symmetric padding) */}
              <div className="flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 md:pr-12">
                <div className="fade-in-up fade-in-delay-1">
                  <StatusBadge />
                </div>
                
                <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] fade-in-up fade-in-delay-2">
                  <span className="whitespace-nowrap">Go Hard</span>
                  <br />
                  <span className="text-muted-foreground">Or Go Home.</span>
                </h1>
                
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed fade-in-up fade-in-delay-3">
                  | 18 | engineer & student | Obsessed |
                </p>

                <div className="mt-8 flex items-center gap-4 fade-in-up fade-in-delay-4">
                  <a 
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium text-sm hover:bg-foreground/80 transition-colors"
                  >
                    Get in touch
                  </a>
                  <a 
                    href="#work"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(var(--grid-line))] text-sm hover:border-[hsl(0,0%,30%)] transition-colors bg-background relative z-20"
                  >
                    View work
                  </a>
                </div>
              </div>

              {/* Right column - Terminal (same inward padding) */}
              <div className="flex items-center justify-center py-16 md:py-24 px-6 md:px-12 md:pl-12 fade-in-up fade-in-delay-5">
                <Terminal />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Full width grid aligned */}
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-b border-[hsl(var(--grid-line-subtle))] grid grid-cols-2 md:grid-cols-4">
              <StatCard value="3+" label="Years Coding" />
              <StatCard value="10+" label="Projects Shipped" />
              <StatCard value="∞" label="Cups of Coffee" />
              <StatCard value="Soon?" label="Startup" />
            </div>
          </div>
        </section>

        {/* Currently Section - Centered */}
        <section id="work">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-12 md:py-16">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">
                Currently
              </h2>
              
              <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--grid-line-subtle))] items-stretch">
                <div className="bg-background h-full">
                  <GridCard 
                    label="Working"
                    title="Software Engineer @ [Mundane Co.]"
                    description="Working with graph databases. Working with rust. Working on cool stuff."
                  />
                </div>
                <div className="bg-background h-full">
                  <GridCard 
                    label="Education"
                    title="High School"
                    description="Otaniemi high school. Finland, Espoo."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project - Full Width */}
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-12 md:py-16">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">
                WORKING ON
              </h2>
              
              <ProjectCard 
                featured
                title="[Project Name] — The thing I'm most proud of"
                description="A comprehensive description of your most impressive project. What problem does it solve? What technologies did you use? What was the impact? This is your chance to show off your best work and demonstrate your technical abilities."
                tags={["React", "TypeScript", "Node.js"]}
                href="#"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid - Asymmetric */}
        <section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-12 md:py-16">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">
                LATELY
              </h2>
              
              {/* Asymmetric Grid */}
              <div className="grid md:grid-cols-3 gap-px bg-[hsl(var(--grid-line-subtle))]">
                {/* Large card spanning 2 columns */}
                <div className="bg-background md:col-span-2 md:row-span-2">
                  <ProjectCard 
                    title="Developer Tool"
                    description="Built a CLI tool that automates repetitive development tasks. Used by the team daily, saving hours of manual work. Features include automated testing, deployment scripts, and code generation."
                    tags={["Python", "CLI", "DevOps"]}
                    href="#"
                  />
                </div>
                
                {/* Small cards */}
                <div className="bg-background">
                  <ProjectCard 
                    title="API Gateway"
                    description="High-performance gateway handling millions of requests."
                    tags={["Go", "Redis"]}
                    href="#"
                  />
                </div>
                <div className="bg-background">
                  <ProjectCard 
                    title="Design System"
                    description="Component library used across multiple products."
                    tags={["React", "Figma"]}
                    href="#"
                  />
                </div>
              </div>

              {/* Second Row - Different Pattern */}
              <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--grid-line-subtle))] mt-px">
                <div className="bg-background">
                  <ProjectCard
                    title="Finalist — Datatähti"
                    description="Finalist in Datatähti, Finland’s national informatics competition and qualifier for the Baltic Olympiad in Informatics (BOI). MAOL ry."
                    tags={["Competition", "Algorithms"]}
                    href="#"
                  />
                </div>

                <div className="bg-background">
                  <ProjectCard
                    title="HIIT Open 2024 — Programming Contest"
                    description="HIIT Open 2024 — 15th place. Helsinki Institute for Information Technology (HIIT)."
                    tags={["Contest", "Algorithms"]}
                    href="#"
                  />
                </div>
              </div>

              {/* Extra Projects - newly added */}
              <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--grid-line-subtle))] mt-px">
                <div className="bg-background">
                  <ProjectCard
                    title="Orangutan"
                    description="A lightweight Rust web server framework inspired by Flask. Minimal API, great ergonomics — 5000+ downloads on crates.io."
                    tags={["Rust", "Web", "Crate"]}
                    href="#"
                  />
                </div>

                <div className="bg-background">
                  <ProjectCard
                    title="Developer Tool"
                    description="Built a CLI tool that automates repetitive development tasks. Used by the team daily, saving hours of manual work. Features include automated testing, deployment scripts, and code generation."
                    tags={["Python", "CLI", "DevOps"]}
                    href="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Text Heavy */}
        <section className="border-t border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            {/* mask background grid behind this section so vertical lines don't intrude */}
            <div className="relative">
              <div className="absolute inset-0 bg-background z-0" />
              <div className="relative z-10 grid md:grid-cols-3 py-12 md:py-16 border-b border-[hsl(var(--grid-line-subtle))]">
                {/* Left - Label */}
                <div className="md:pr-8">
                  <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest sticky top-8">
                    Philosophy
                  </h2>
                </div>
                
                {/* Right - Content */}
                <div className="md:col-span-2 md:pl-12">
                  <div className="space-y-6 max-w-xl">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                      I believe in building things that solve real problems for real people.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Code is a means to an end. The goal isn't to write clever code—it's to create 
                      something valuable. I focus on shipping fast, iterating based on feedback, 
                      and never over-engineering.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Being young in tech means having the energy to move fast and the humility to 
                      learn constantly. I treat every project as an opportunity to level up.
                    </p>
                  </div>
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
                <div className="h-full border-r border-[hsl(var(--grid-line-subtle))]">
                  <div
                    className="h-full flex flex-col justify-center px-6 md:px-12 py-12 md:py-16"
                    style={{ transform: "translateX(-1px)" }}
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                      Let's build
                      <br />
                      <span className="text-muted-foreground">something together.</span>
                    </h2>
                  </div>
                </div>

                {/* right column: split into two boxes (left = paragraph, right = contact actions) */}
                <div className="h-full">
                  <div className="h-full grid md:grid-cols-2 gap-4">
                    {/* right-left box: paragraph, aligned to left of the grid */}
                    <div className="bg-background h-full flex items-center px-6 md:px-12 py-12 md:py-16">
                      <p className="text-muted-foreground mb-0 max-w-sm">
                        Always open to interesting projects, collaborations, or just a chat about tech.
                      </p>
                    </div>

                    {/* right-right box: contact actions, aligned to right of the grid */}
                    <div className="bg-background h-full flex items-center justify-end px-6 md:px-12 py-12 md:py-16">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="mailto:hello@example.com"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-foreground/80 transition-colors"
                        >
                          hello@example.com
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[hsl(var(--grid-line))] text-sm hover:border-[hsl(0,0%,30%)] transition-colors"
                        >
                          DM on Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer — allow GridBackground vertical lines to show through */}
        <footer className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Built with obsession
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/NoelMatero/" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
                GitHub
              </a>
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
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
