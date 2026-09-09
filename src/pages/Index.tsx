import GridBackground from "@/components/GridBackground";

// Minimal regex-based highlighter for the one Rust snippet on the page —
// not worth a real dependency for a single code block.
const RUST_KEYWORDS = /\b(fn|if|else|while|match|break|return|mut|self)\b/g;

function highlightRust(src: string) {
  return src
    .split("\n")
    .map((line) => {
      const escaped = line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (/^\s*\/\//.test(line)) {
        return `<span class="text-muted-foreground">${escaped}</span>`;
      }
      return escaped.replace(RUST_KEYWORDS, '<span class="text-accent">$1</span>');
    })
    .join("\n");
}

const ORANGUTAN_SNIPPET = `/// Writes data from the output buffer to the socket.
/// Returns Ok(true) if data was sent successfully
/// Ok(false) if there's no data to send, or an Err.
fn send(&mut self) -> Result<bool, std::io::Error> {
    if self.o_buf.is_empty() {
        return Ok(false);
    }

    while !self.o_buf.is_empty() {
        match self.sock.write(&self.o_buf.as_slice()) {
            Ok(sz)  => {
                if sz == self.o_buf.len() {
                    // we did it!
                    self.events.remove(EventSet::writable());
                    break;
                } else {
                    // keep going
                    self.o_buf = self.o_buf.split_off(sz);
                }
            },
            Err(_)  => {
                return Ok(true);
            }
        }
    }

    Ok(true)
}`;

const ProjectBox = ({
  media,
  children,
}: {
  media: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="col-start-2 col-span-2 border border-[hsl(var(--grid-line))] bg-background">
    {media}
    <p className="font-bare max-w-2xl mx-auto text-[15px] leading-[1.6] text-muted-foreground border-t border-[hsl(var(--grid-line))] px-6 py-5">
      {children}
    </p>
  </div>
);

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
    className="text-foreground underline decoration-[hsl(var(--grid-line))] underline-offset-[3px] hover:decoration-foreground transition-colors"
  >
    {children}
  </a>
);

const Index = () => {
  return (
    // dvh so mobile browser chrome doesn't push the first box off-centre on load.
    <main className="min-h-[100dvh] bg-background text-foreground font-mono py-16">
      <GridBackground />

      <div className="relative z-10 w-full flex flex-col gap-12">
        {/* Box borders sit on the outer grid lines; solid bg hides the inner
            lines behind the text */}
        <section className="max-w-6xl mx-auto w-full">
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
              <div className="mt-7 flex justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/matero-noel-70b414390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bare border border-[hsl(var(--grid-line))] px-6 py-2.5 text-[15px] text-muted-foreground hover:text-foreground hover:border-[hsl(var(--foreground))] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:noel@noelmatero.com"
                  className="font-bare border border-[hsl(var(--grid-line))] px-6 py-2.5 text-[15px] text-muted-foreground hover:text-foreground hover:border-[hsl(var(--foreground))] transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/NoelMatero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bare border border-[hsl(var(--grid-line))] px-6 py-2.5 text-[15px] text-muted-foreground hover:text-foreground hover:border-[hsl(var(--foreground))] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full px-6">
          <div className="grid grid-cols-4 gap-y-10">
            <ProjectBox
              media={
                <img
                  src="/rubiks-cube.png"
                  alt="A 3x3 Rubik's cube, hand-marked with colored markers so a camera can read its faces"
                  className="block max-w-[75%] mx-auto py-6"
                />
              }
            >
              The cube itself, from the robot build at 14. The black and blue
              squares drawn with a marker were drawn so that the robot's
              camera could detect them better.
            </ProjectBox>

            <ProjectBox
              media={
                <img
                  src="/smartwatch-pcb.png"
                  alt="Routing layout of the smartwatch PCB, front side"
                  className="block w-full"
                />
              }
            >
              The PCB layout for{" "}
              <BioLink href="https://github.com/NoelMatero/DemoSmartWatch">
                my smartwatch
              </BioLink>{" "}
              I built at 15. Red is the copper layer, blue is the copper
              layer of the other side of the board.
            </ProjectBox>

            <ProjectBox
              media={
                <pre className="overflow-x-auto px-6 py-6 text-[13px] leading-relaxed">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: highlightRust(ORANGUTAN_SNIPPET),
                    }}
                  />
                </pre>
              }
            >
              One of the connection handlers from{" "}
              <BioLink href="https://github.com/NoelMatero/orangutan">
                Orangutan
              </BioLink>{" "}
              for sending data from the Client to the Orangutan instance.
            </ProjectBox>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
