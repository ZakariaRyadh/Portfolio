import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Radar, Shield } from "lucide-react";
import {
  SiDjango,
  SiEspressif,
  SiExpo,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGithub,
  SiJsonwebtokens,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQt,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { cn } from "../lib/utils";
import { projects } from "../data/projects";

// project: slug of the main project that used the skill (null = every project)
const skills = [
  // Frontend
  { name: "React", icon: SiReact, project: "pfesi", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, project: "e-commerce", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, project: "e-commerce", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, project: "pfesi", category: "frontend" },

  // Mobile
  { name: "React Native / Expo", icon: SiExpo, project: "kaizen", category: "mobile" },
  { name: "Zustand", icon: Layers, project: "kaizen", category: "mobile" },

  // Desktop
  { name: "PySide6 / Qt", icon: SiQt, project: "kaizen-desktop", category: "desktop" },

  // Backend
  { name: "Django + DRF", icon: SiDjango, project: "motorwatch", category: "backend" },
  { name: "JWT Auth", icon: SiJsonwebtokens, project: "kaizen", category: "backend" },
  { name: "Prisma", icon: SiPrisma, project: "e-commerce", category: "backend" },
  { name: "FastAPI", icon: SiFastapi, project: "pfesi", category: "backend" },
  { name: "Flask", icon: SiFlask, project: "smart-firewall", category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, project: "e-commerce", category: "backend" },
  { name: "Redis / WebSockets", icon: SiRedis, project: "motorwatch", category: "backend" },

  // IoT
  { name: "Raspberry Pi", icon: SiRaspberrypi, project: "motorwatch", category: "iot" },
  { name: "ESP32", icon: SiEspressif, project: "motorwatch", category: "iot" },

  // Security
  { name: "Linux", icon: SiLinux, project: "smart-firewall", category: "security" },
  { name: "nftables / Firewalls", icon: Shield, project: "smart-firewall", category: "security" },
  { name: "Anomaly Detection", icon: Radar, project: "smart-firewall", category: "security" },

  // Machine Learning
  { name: "Python", icon: SiPython, project: "kaizen-desktop", category: "ml" },
  { name: "Scikit-learn / Pandas", icon: SiScikitlearn, project: "motorwatch", category: "ml" },

  // Tools
  { name: "Git/GitHub", icon: SiGithub, project: null, category: "tools" },
  { name: "Figma", icon: SiFigma, project: "pfesi", category: "tools" },
  { name: "Deployment (Vercel, Render, Railway)", icon: SiVercel, project: "kaizen", category: "tools" },
];

const titleOf = Object.fromEntries(projects.map((p) => [p.slug, p.title]));

const categories = ["all", "frontend", "mobile", "desktop", "backend", "ml", "iot", "security", "tools"];
const labels = { ml: "ML", iot: "IoT" };

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {labels[category] ?? category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-3 sm:p-6 rounded-lg shadow card-hover text-left"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <skill.icon className="h-4 w-4 sm:h-6 sm:w-6 shrink-0 text-primary" />
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  {skill.name}
                </h3>
              </div>
              {skill.project ? (
                <Link
                  to={`/projects/${skill.project}`}
                  className="group inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {titleOf[skill.project]}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <p className="text-xs sm:text-sm text-muted-foreground">Every project</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
