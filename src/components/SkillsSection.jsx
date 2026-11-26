import { useState } from "react";
import { cn } from "../lib/utils";

// level: 3 = Advanced, 2 = Intermediate, 1 = Familiar
const skills = [
  // Frontend
  { name: "React", level: 3, category: "frontend" },
  { name: "TypeScript", level: 2, category: "frontend" },
  { name: "Tailwind CSS", level: 2, category: "frontend" },
  { name: "Next.js", level: 2, category: "frontend" },

  // Mobile
  { name: "React Native / Expo", level: 3, category: "mobile" },
  { name: "Zustand", level: 2, category: "mobile" },

  // Desktop
  { name: "PySide6 / Qt", level: 2, category: "desktop" },

  // Backend
  { name: "Django + DRF", level: 2, category: "backend" },
  { name: "JWT Auth", level: 2, category: "backend" },
  { name: "Prisma", level: 2, category: "backend" },
  { name: "FastAPI", level: 1, category: "backend" },
  { name: "Flask", level: 1, category: "backend" },
  { name: "PostgreSQL", level: 1, category: "backend" },
  { name: "Redis / WebSockets", level: 1, category: "backend" },

  // IoT
  { name: "Raspberry Pi", level: 2, category: "iot" },
  { name: "ESP32", level: 1, category: "iot" },

  // Security
  { name: "Linux", level: 2, category: "security" },
  { name: "nftables / Firewalls", level: 2, category: "security" },
  { name: "Anomaly Detection", level: 1, category: "security" },

  // Machine Learning
  { name: "Python", level: 2, category: "ml" },
  { name: "Scikit-learn / Pandas", level: 1, category: "ml" },

  // Tools
  { name: "Git/GitHub", level: 3, category: "tools" },
  { name: "Figma", level: 3, category: "tools" },
  { name: "Deployment (Vercel, Render, Railway)", level: 2, category: "tools" },
];

const levelNames = { 3: "Advanced", 2: "Intermediate", 1: "Familiar" };

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
              <div className="flex items-start justify-between gap-2 mb-2 sm:mb-4">
                <h3 className="font-semibold text-sm sm:text-lg leading-tight">
                  {skill.name}
                </h3>
                <span className="text-xs sm:text-sm text-muted-foreground shrink-0">
                  {levelNames[skill.level]}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "h-1.5 sm:h-2 rounded-full",
                      step <= skill.level ? "bg-primary" : "bg-secondary/50"
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
