import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

const isLink = (url) => url && url !== "#";

const Section = ({ title, children }) => (
  <section className="mb-14">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      <span className="text-primary">{title}</span>
    </h2>
    {children}
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const [zoom, setZoom] = useState(null);

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />

      <main className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> All projects
          </a>

          {/* header */}
          <header className="mb-14">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-card rounded-lg p-4">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-medium">{project.status}</dd>
              </div>
              <div className="bg-card rounded-lg p-4">
                <dt className="text-muted-foreground">My role</dt>
                <dd className="font-medium">{project.role}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              {isLink(project.githubUrl) && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cosmic-button inline-flex items-center gap-2"
                >
                  <Github size={18} /> Source code
                </a>
              )}
              {isLink(project.demoUrl) && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} /> Live demo
                </a>
              )}
            </div>
          </header>

          <Section title="Why I built it">
            <p className="text-muted-foreground leading-relaxed">
              {project.purpose}
            </p>
          </Section>

          <Section title="The key idea">
            <p className="text-muted-foreground leading-relaxed">
              {project.keyIdea}
            </p>
            {project.flow && (
              <p className="mt-4 p-4 rounded-lg bg-card text-sm font-mono text-foreground/90">
                {project.flow}
              </p>
            )}
          </Section>

          <Section title="Built with">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.stack.map((g) => (
                <div key={g.group} className="bg-card rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{g.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Screenshots">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="bg-card rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setZoom(shot)}
                    className="block w-full bg-secondary/30 cursor-zoom-in"
                    aria-label={`Enlarge: ${shot.caption}`}
                  >
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      loading="lazy"
                      className={
                        shot.phone
                          ? "h-96 w-auto mx-auto object-contain"
                          : "w-full h-64 object-cover object-top"
                      }
                    />
                  </button>
                  <figcaption className="p-3 text-sm text-muted-foreground">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            {project.screenshotNote && (
              <p className="text-xs text-muted-foreground mt-3">
                {project.screenshotNote}
              </p>
            )}
          </Section>

          <Section title="What I learned">
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> All projects
            </a>
            <Link
              to={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Next: {next.title} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {zoom && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-label={zoom.caption}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-white"
            aria-label="Close"
            onClick={() => setZoom(null)}
          >
            <X size={28} />
          </button>
          <img
            src={zoom.src}
            alt={zoom.caption}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
