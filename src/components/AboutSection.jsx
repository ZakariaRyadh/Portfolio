import { Briefcase, Code, ShieldCheck } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          ABOUT <span className="text-primary">ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Freelance Web, Mobile & Desktop Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a computer science student focused on cyber security, and I
              work as a freelance developer. I build responsive and
              performant web, mobile and desktop apps, with IoT integrations
              when the project needs them.
            </p>

            <p className="text-muted-foreground">
              I care about clean code and security from the start, and I
              share my progress publicly on X as I build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              {/* Download CV button disabled for now
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
              */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web, Mobile & Desktop</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites, cross-platform mobile apps
                    and desktop applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Information Security</h4>
                  <p className="text-muted-foreground">
                    Building secure applications that protect data, with safe
                    authentication and input validation.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Professional Projects</h4>
                  <p className="text-muted-foreground">
                    Building real-world projects with clean code and scalable
                    architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
