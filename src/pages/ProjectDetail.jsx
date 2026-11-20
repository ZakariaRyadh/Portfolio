import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Maximize2,
  X,
} from "lucide-react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

const isLink = (url) => url && url !== "#";

/* Window frame around desktop screenshots */
const BrowserFrame = ({ children }) => (
  <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-secondary/60">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
    </div>
    {children}
  </div>
);

/* One numbered row of the case study: label on the left, content on the right */
const Section = ({ id, number, title, children }) => (
  <section
    id={id}
    className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12 py-14 border-t border-border scroll-mt-24"
  >
    <div>
      <p className="font-mono text-sm text-primary mb-1">{number}</p>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="min-w-0">{children}</div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  // lightbox: which screenshot is open, tied to the current project
  const [zoom, setZoom] = useState(null);

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const shots = project?.screenshots ?? [];
  const open = zoom && zoom.slug === slug ? zoom.i : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight")
        setZoom({ slug, i: (open + 1) % shots.length });
      if (e.key === "ArrowLeft")
        setZoom({ slug, i: (open - 1 + shots.length) % shots.length });
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, slug, shots.length]);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const showShot = (shot) => setZoom({ slug, i: shots.indexOf(shot) });
  const desktopShots = shots.filter((s) => !s.phone);
  const phoneShots = shots.filter((s) => s.phone);
  const flowSteps = project.flow ? project.flow.split("→").map((s) => s.trim()) : [];
  // the cover shows the first desktop shot, or up to 3 phone shots
  const coverShots = project.isPhone ? phoneShots.slice(0, 3) : desktopShots.slice(0, 1);
  const galleryDesktop = desktopShots.filter((s) => !coverShots.includes(s));
  const galleryPhone = phoneShots.filter((s) => !coverShots.includes(s));
  const hasGallery = galleryDesktop.length + galleryPhone.length > 0;
  const num = (n) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden text-left">
      <NavBar />

      {/* ---------- hero ---------- */}
      <header className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
        />
        <div className="container relative max-w-6xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> All projects
          </a>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {project.category}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight break-words">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {isLink(project.githubUrl) && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Github size={18} /> View source
              </a>
            )}
            {isLink(project.demoUrl) && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-primary hover:text-primary"
              >
                <ExternalLink size={18} /> Live demo
              </a>
            )}
          </div>

          {/* meta strip */}
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 rounded-xl border border-border bg-card/70 backdrop-blur divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug">{project.role}</dd>
            </div>
            <div className="p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Status</dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug">{project.status}</dd>
            </div>
            <div className="p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug">
                {project.tags.join(" · ")}
              </dd>
            </div>
          </dl>

          {/* cover */}
          <div className="mt-12">
            {project.isPhone ? (
              <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card px-4 py-6 sm:p-8 md:p-12 flex justify-center gap-3 sm:gap-6 md:gap-10">
                {(phoneShots.length ? phoneShots : [{ src: project.image, caption: project.title }])
                  .slice(0, 3)
                  .map((shot) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => phoneShots.length && showShot(shot)}
                      className="flex-1 max-w-[234px] rounded-[1.4rem] sm:rounded-[2rem] border-4 sm:border-[6px] border-foreground/90 bg-black overflow-hidden shadow-2xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="block w-full aspect-[9/19.5] object-cover object-top"
                      />
                    </button>
                  ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => desktopShots.length && showShot(desktopShots[0])}
                className="block w-full text-left"
              >
                <BrowserFrame>
                  <img
                    src={desktopShots[0]?.src ?? project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] md:aspect-auto md:max-h-[620px] object-cover object-top"
                  />
                </BrowserFrame>
              </button>
            )}
            {project.screenshotNote && (
              <p className="mt-3 text-xs text-muted-foreground">{project.screenshotNote}</p>
            )}
          </div>
        </div>
      </header>

      {/* ---------- key numbers ---------- */}
      {project.highlights?.length > 0 && (
        <div className="px-4">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-4 sm:block rounded-xl border border-border bg-card p-4 sm:p-6"
                >
                  <p className="shrink-0 min-w-[3.5rem] text-2xl sm:text-4xl font-bold tracking-tight text-primary">
                    {h.value}
                  </p>
                  <p className="sm:mt-1 text-sm leading-snug text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------- case study ---------- */}
      <main className="px-4 pt-10 pb-8">
        <div className="container max-w-6xl">
          <Section id="purpose" number="01" title="Why I built it">
            <p className="text-lg leading-relaxed text-foreground/90">{project.purpose}</p>
          </Section>

          <Section id="idea" number="02" title="The key idea">
            <p className="leading-relaxed text-muted-foreground">{project.keyIdea}</p>
            {flowSteps.length > 1 && (
              <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-fr">
                {flowSteps.map((step, i) => (
                  <li
                    key={step}
                    className="relative rounded-lg border border-border bg-card p-4"
                  >
                    <span className="font-mono text-xs text-primary">Step {i + 1}</span>
                    <p className="mt-1 text-sm font-medium leading-snug">{step}</p>
                    {i < flowSteps.length - 1 && (
                      <ChevronRight
                        size={18}
                        aria-hidden
                        className="hidden lg:block absolute -right-[15px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-background text-muted-foreground"
                      />
                    )}
                  </li>
                ))}
              </ol>
            )}
          </Section>

          <Section id="stack" number="03" title="Built with">
            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {project.stack.map((g) => (
                <div key={g.group} className="grid gap-3 sm:grid-cols-[160px_1fr] p-5">
                  <h3 className="text-sm font-semibold">{g.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {hasGallery && (
          <Section id="screens" number="04" title="More screens">
            <div className="space-y-8">
              {galleryDesktop.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {galleryDesktop.map((shot, i) => (
                    <figure
                      key={shot.src}
                      className={galleryDesktop.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}
                    >
                      <button
                        type="button"
                        onClick={() => showShot(shot)}
                        className="group relative block w-full text-left"
                        aria-label={`Enlarge: ${shot.caption}`}
                      >
                        <BrowserFrame>
                          <img
                            src={shot.src}
                            alt={shot.caption}
                            loading="lazy"
                            className="w-full aspect-[16/10] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                          />
                        </BrowserFrame>
                        <span className="absolute right-3 top-12 rounded-md bg-black/60 p-1.5 text-white opacity-0 transition group-hover:opacity-100">
                          <Maximize2 size={16} />
                        </span>
                      </button>
                      <figcaption className="mt-3 text-sm text-muted-foreground">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {galleryPhone.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8">
                  {galleryPhone.map((shot) => (
                    <figure key={shot.src} className="sm:w-[190px]">
                      <button
                        type="button"
                        onClick={() => showShot(shot)}
                        className="block w-full rounded-[1.4rem] sm:rounded-[1.75rem] border-4 sm:border-[5px] border-foreground/90 bg-black overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
                        aria-label={`Enlarge: ${shot.caption}`}
                      >
                        <img
                          src={shot.src}
                          alt={shot.caption}
                          loading="lazy"
                          className="block w-full aspect-[9/19.5] object-cover object-top"
                        />
                      </button>
                      <figcaption className="mt-3 text-sm text-muted-foreground">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

            </div>
          </Section>
          )}

          <Section id="learned" number={num(hasGallery ? 5 : 4)} title="What I learned">
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.learned.map((item, i) => (
                <li key={item} className="rounded-xl border border-border bg-card p-5">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{item}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* ---------- next project ---------- */}
          <Link
            to={`/projects/${next.slug}`}
            className="group mt-6 grid overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/60 md:grid-cols-[1fr_320px]"
          >
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Next project
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {next.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {next.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read case study
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="hidden md:flex h-full items-center justify-center bg-secondary/50 overflow-hidden">
              <img
                src={next.image}
                alt=""
                className={
                  next.isPhone
                    ? "h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    : "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                }
              />
            </div>
          </Link>
        </div>
      </main>

      <Footer />

      {/* ---------- lightbox ---------- */}
      {open !== null && shots[open] && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].caption}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Close"
            onClick={() => setZoom(null)}
          >
            <X size={26} />
          </button>
          {shots.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-2 md:left-6 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom({ slug, i: (open - 1 + shots.length) % shots.length });
                }}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                className="absolute right-2 md:right-6 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom({ slug, i: (open + 1) % shots.length });
                }}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
          <img
            src={shots[open].src}
            alt={shots[open].caption}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-full rounded-lg object-contain"
          />
          <p className="mt-4 text-sm text-white/80">
            {shots[open].caption}
            {shots.length > 1 && (
              <span className="ml-3 text-white/50">
                {open + 1} / {shots.length}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
