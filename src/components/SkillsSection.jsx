import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { projects } from "../data/projects";

// project: slug of the main project that used the skill (null = every project)
const skills = [
  // Frontend
  { name: "React", project: "pfesi", category: "frontend" },
  { name: "TypeScript", project: "e-commerce", category: "frontend" },
  { name: "Tailwind CSS", project: "e-commerce", category: "frontend" },
  { name: "Next.js", project: "pfesi", category: "frontend" },

  // Mobile
  { name: "React Native / Expo", project: "kaizen", category: "mobile" },
  { name: "Zustand", project: "kaizen", category: "mobile" },

  // Desktop
  { name: "PySide6 / Qt", project: "kaizen-desktop", category: "desktop" },

  // Backend
  { name: "Django + DRF", project: "motorwatch", category: "backend" },
  { name: "JWT Auth", project: "kaizen", category: "backend" },
  { name: "Prisma", project: "e-commerce", category: "backend" },
  { name: "FastAPI", project: "pfesi", category: "backend" },
  { name: "Flask", project: "smart-firewall", category: "backend" },
  { name: "PostgreSQL", project: "e-commerce", category: "backend" },
  { name: "Redis / WebSockets", project: "motorwatch", category: "backend" },

  // IoT
  { name: "Raspberry Pi", project: "motorwatch", category: "iot" },
  { name: "ESP32", project: "motorwatch", category: "iot" },

  // Security
  { name: "Linux", project: "smart-firewall", category: "security" },
  { name: "nftables / Firewalls", project: "smart-firewall", category: "security" },
  { name: "Anomaly Detection", project: "smart-firewall", category: "security" },

  // Machine Learning
  { name: "Python", project: "kaizen-desktop", category: "ml" },
  { name: "Scikit-learn / Pandas", project: "motorwatch", category: "ml" },

  // Tools
  { name: "Git/GitHub", project: null, category: "tools" },
  { name: "Figma", project: "pfesi", category: "tools" },
  { name: "Deployment (Vercel, Render, Railway)", project: "kaizen", category: "tools" },
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
              <h3 className="font-semibold text-sm sm:text-lg leading-tight mb-2 sm:mb-3">
                {skill.name}
              </h3>
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
