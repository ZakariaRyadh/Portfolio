import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MotorWatch",
    description:
      "A mobile app for live motor monitoring via ESP32 sensors - real-time tension/temperature tracking, fault detection, alerts and history.",
    image: "/projects/motor-app.jpg",
    isPhone: true,
    tags: ["React Native", "Expo", "Django", "DRF", "ESP32"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Kaizen",
    description:
      "A daily productivity app combining tasks, gym programs, calendar, notes and learning tracking in one clean dark UI.",
    image: "/projects/kaizen.jpg",
    isPhone: true,
    tags: ["React Native", "Expo", "Django", "DRF", "Zustand"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "PFESI",
    description:
      "A web platform for managing final-year projects - topic proposals, student assignments, supervisor tracking, defense scheduling and results, all in one place.",
    image: "/projects/pfe-management.png",
    tags: ["Next.js", "FastAPI", "Web App"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "An online store with product catalog, cart, checkout flow and order management.",
    image: "/projects/e-commerce.png",
    tags: ["Next.js", "Web App"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my web and mobile development projects, each
          carefully crafted with attention to detail, performance and user
          experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-64 overflow-hidden bg-secondary/30 flex items-center justify-center">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className={`transition-transform duration-500 group-hover:scale-110 ${
                    projects.isPhone
                      ? "h-full w-auto object-contain"
                      : "w-full h-full object-cover object-top"
                  }`}
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={projects.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/ZakariaRyadh" className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="_blank">
                check my github <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};
