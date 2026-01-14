import GridBackground from "@/components/GridBackground";
import StatusBadge from "@/components/StatusBadge";
import SocialLinks from "@/components/SocialLinks";
import Terminal from "@/components/Terminal";
import GridCard from "@/components/GridCard";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import TechBadge from "@/components/TechBadge";

const techStack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", 
  "PostgreSQL", "Redis", "AWS", "Docker", "Git"
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <GridBackground />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-mono text-sm font-medium">[Your Name]</span>
            <SocialLinks />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 min-h-[70vh]">
              {/* Left column - Content */}
              <div className="flex flex-col justify-center py-16 md:py-24 md:pr-12 md:border-r border-[hsl(var(--grid-line-subtle))]">
                <div className="fade-in-up fade-in-delay-1">
                  <StatusBadge />
                </div>
                
                <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] fade-in-up fade-in-delay-2">
                  Building products
                  <br />
                  <span className="text-muted-foreground">that matter.</span>
                </h1>
                
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed fade-in-up fade-in-delay-3">
                  18-year-old founding engineer. I ship fast, learn faster, and obsess over craft.
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(var(--grid-line))] text-sm hover:border-[hsl(0,0%,30%)] transition-colors"
                  >
                    View work
                  </a>
                </div>
              </div>

              {/* Right column - Terminal */}
              <div className="flex items-center justify-center py-16 md:py-24 md:pl-12 fade-in-up fade-in-delay-5">
                <Terminal />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Full width grid aligned */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <StatCard value="3+" label="Years Coding" />
              <StatCard value="10+" label="Projects Shipped" />
              <StatCard value="∞" label="Cups of Coffee" />
              <StatCard value="1" label="Startup" />
            </div>
          </div>
        </section>

        {/* Currently Section - Centered */}
        <section id="work" className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="py-16 md:py-24">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center">
                Currently
              </h2>
              
              <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--grid-line-subtle))]">
                <div className="bg-background">
                  <GridCard 
                    label="Startup"
                    title="Founding Engineer @ [Company]"
                    description="Building core product infrastructure. Shipping features daily, owning entire systems end-to-end."
                  />
                </div>
                <div className="bg-background">
                  <GridCard 
                    label="Education"
                    title="Computer Science"
                    description="Balancing theory with practice. Algorithms meet production code every day."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project - Full Width */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-16 md:py-24">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center">
                Featured
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
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-16 md:py-24">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center">
                Projects
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
                    title="Real-time Dashboard"
                    description="Live analytics dashboard processing thousands of events per second. Built with WebSockets and optimized for performance."
                    tags={["Next.js", "WebSocket", "D3"]}
                    href="#"
                  />
                </div>
                <div className="bg-background">
                  <ProjectCard 
                    title="Mobile App"
                    description="Cross-platform mobile application with 10k+ downloads. Focus on performance and user experience."
                    tags={["React Native", "TypeScript"]}
                    href="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Text Heavy */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-px bg-[hsl(var(--grid-line-subtle))] py-16 md:py-0">
              {/* Left - Label */}
              <div className="bg-background md:py-24 md:pr-8 md:border-r border-[hsl(var(--grid-line-subtle))]">
                <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest sticky top-8">
                  Philosophy
                </h2>
              </div>
              
              {/* Right - Content */}
              <div className="bg-background md:col-span-2 md:py-24 md:pl-12">
                <div className="space-y-8 max-w-xl">
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
        </section>

        {/* Tech Stack - Centered */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-16 md:py-24">
              <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center">
                Stack
              </h2>
              
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Large Grid */}
        <section className="border-b border-[hsl(var(--grid-line-subtle))]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--grid-line-subtle))]">
              <div className="bg-background py-16 md:py-32 md:pr-12 md:border-r border-[hsl(var(--grid-line-subtle))]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                  Let's build
                  <br />
                  <span className="text-muted-foreground">something together.</span>
                </h2>
              </div>
              <div className="bg-background py-16 md:py-32 md:pl-12 flex flex-col justify-center">
                <p className="text-muted-foreground mb-8 max-w-sm">
                  Always open to interesting projects, collaborations, or just a chat about tech.
                </p>
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
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Built with obsession
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
                GitHub
              </a>
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground/70 transition-colors">
                Twitter
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
