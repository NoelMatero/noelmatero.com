import GridBackground from "@/components/GridBackground";

const BioLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground underline decoration-[hsl(var(--grid-line))] underline-offset-[3px] hover:text-accent hover:decoration-accent transition-colors"
  >
    {children}
  </a>
);

const Index = () => {
  return (
    // Exactly one viewport tall, clipped — the page never scrolls. dvh so
    // mobile browser chrome doesn't push the box off-centre.
    <main className="h-[100dvh] overflow-hidden flex items-center bg-background text-foreground font-mono">
      <GridBackground />

      <div className="relative z-10 w-full">
        {/* Box borders sit on the outer grid lines; solid bg hides the inner
            lines behind the text */}
        <section className="max-w-6xl mx-auto">
          <div className="mx-6 border border-[hsl(var(--grid-line))]">
            <div className="bg-background px-6 py-8">
              <p className="font-bare max-w-2xl mx-auto text-[17px] leading-[1.65] text-muted-foreground">
                I started tech (electronics, programming and physics) at 14 and
                decided to build a robot that could solve the rubics cube with
                python and LEGOs. I built{" "}
                <BioLink href="https://github.com/NoelMatero/DemoSmartWatch">
                  my own smartwatch
                </BioLink>{" "}
                at 15 (the PCB had a couple of issues, so it didn't work). I
                built{" "}
                <BioLink href="https://github.com/NoelMatero/orangutan">
                  my own async Rust web server library
                </BioLink>{" "}
                with{" "}
                <BioLink href="https://github.com/tokio-rs/mio">MIO</BioLink>{" "}
                (the lowest level of communication with the OS) at 16. At 17 I
                joined{" "}
                <BioLink href="https://mundane.company/">
                  a startup in SF
                </BioLink>{" "}
                as a software engineer after getting to the finals of the
                Finnish national olympiad in informatics and after getting 25th
                in the world's largest robotics competition (I programmed the
                robot). Shortly after turning 18, I won my first hackathon as a
                solo, got to{" "}
                <BioLink href="https://nullfellows.com">null fellows</BioLink>,
                won another hackathon, graduated from high school and now I'm
                looking for something ambitious, interesting and new. I love
                systems, rust and hard challenges, not because of the difficulty
                itself but because by nature they're usually fascinating.{" "}
              </p>

              {/* Square corners and grid-line border, serif to match the prose */}
              <div className="mt-7 flex justify-center">
                <a
                  href="mailto:noel@noelmatero.com"
                  className="font-bare border border-[hsl(var(--grid-line))] px-6 py-2.5 text-[15px] text-muted-foreground hover:text-foreground hover:border-[hsl(var(--accent))] transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
