import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const isLink = (url) => url && url !== "#";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my web, mobile and desktop projects. Open any project
          to see why I built it, the key idea, the stack and screenshots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="h-64 overflow-hidden bg-secondary/30 flex items-center justify-center"
                aria-label={`View details: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`transition-transform duration-500 group-hover:scale-110 ${
                    project.isPhone
                      ? "h-full w-auto object-contain"
                      : "w-full h-full object-cover object-top"
                  }`}
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3 ">
                    {isLink(project.demoUrl) && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} demo`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {isLink(project.githubUrl) && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/ZakariaRyadh" className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="_blank" rel="noreferrer">
                check my github <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};
