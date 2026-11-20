import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Mobile
  { name: "React Native", level: 85, category: "mobile" },
  { name: "Expo", level: 85, category: "mobile" },
  { name: "Zustand", level: 75, category: "mobile" },

  // Desktop
  { name: "PyQt", level: 70, category: "desktop" },
  { name: "PySide6", level: 70, category: "desktop" },

  // Backend
  { name: "Django", level: 80, category: "backend" },
  { name: "Django REST Framework", level: 80, category: "backend" },
  { name: "FastAPI", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "SQLite", level: 75, category: "backend" },
  { name: "Flask", level: 65, category: "backend" },
  { name: "Prisma", level: 70, category: "backend" },
  { name: "Redis / WebSockets", level: 65, category: "backend" },
  { name: "JWT Auth", level: 80, category: "backend" },

  // IoT
  { name: "Raspberry Pi", level: 75, category: "iot" },
  { name: "ESP32", level: 65, category: "iot" },

  // Security
  { name: "Linux", level: 80, category: "security" },
  { name: "nftables / Firewalls", level: 70, category: "security" },
  { name: "Anomaly Detection", level: 65, category: "security" },

  // Machine Learning
  { name: "Python", level: 80, category: "ml" },
  { name: "Scikit-learn", level: 65, category: "ml" },
  { name: "Pandas/NumPy", level: 70, category: "ml" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Deployment (Vercel, Render, Railway)", level: 75, category: "tools" },
];

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
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary/50 h-1.5 sm:h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
