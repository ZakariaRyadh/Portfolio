import { Link } from "react-router-dom";
import { projects } from "../data/projects";

// Each skill lists the project slugs that prove it (from src/data/projects.js)
const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", used: ["pfesi", "e-commerce", "smart-firewall"] },
      { name: "Next.js", used: ["pfesi", "e-commerce"] },
      { name: "TypeScript", used: ["kaizen", "motorwatch", "e-commerce", "smart-firewall"] },
      { name: "Tailwind CSS", used: ["pfesi", "e-commerce", "smart-firewall"] },
      { name: "Zustand", used: ["kaizen", "pfesi", "e-commerce"] },
      { name: "Figma", used: ["pfesi"] },
    ],
  },
  {
    title: "Mobile & Desktop",
    skills: [
      { name: "React Native / Expo", used: ["motorwatch", "kaizen"] },
      { name: "PySide6 / Qt", used: ["kaizen-desktop"] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django + DRF", used: ["motorwatch", "kaizen"] },
      { name: "FastAPI", used: ["pfesi"] },
      { name: "Flask", used: ["smart-firewall"] },
      { name: "PostgreSQL", used: ["motorwatch", "kaizen", "e-commerce"] },
      { name: "Prisma", used: ["e-commerce"] },
      { name: "Redis / WebSockets", used: ["motorwatch"] },
      { name: "JWT Auth", used: ["motorwatch", "kaizen", "pfesi"] },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Linux", used: ["smart-firewall", "kaizen-desktop"] },
      { name: "nftables / Firewalls", used: ["smart-firewall"] },
      { name: "Anomaly Detection", used: ["smart-firewall"] },
    ],
  },
  {
    title: "ML & IoT",
    skills: [
      { name: "Python", used: ["smart-firewall", "motorwatch", "kaizen-desktop"] },
      { name: "Scikit-learn / Pandas", used: ["smart-firewall", "motorwatch"] },
      { name: "Raspberry Pi", used: ["motorwatch", "smart-firewall"] },
      { name: "ESP32", used: ["motorwatch"] },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", used: [] },
      { name: "Deployment (Vercel, Render, Railway)", used: ["kaizen", "motorwatch"] },
    ],
  },
];

const titleOf = Object.fromEntries(projects.map((p) => [p.slug, p.title]));

export const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        My <span className="text-primary">Skills</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Each one with the projects where I used it.
      </p>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="bg-card p-5 sm:p-6 rounded-lg shadow card-hover text-left">
            <h3 className="font-mono text-sm text-primary mb-4">{group.title}</h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/70 text-sm font-medium">
                    {skill.name}
                  </span>
                  {skill.used.length > 0 && (
                    <p className="mt-1 pl-3 text-xs text-muted-foreground">
                      {skill.used.map((slug, i) => (
                        <span key={slug}>
                          {i > 0 && " · "}
                          <Link to={`/projects/${slug}`} className="hover:text-primary transition-colors">
                            {titleOf[slug]}
                          </Link>
                        </span>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
