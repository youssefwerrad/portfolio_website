import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const DealerRateMockup = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="currentColor" className="text-secondary" rx="8" />
    <rect width="400" height="28" fill="currentColor" className="text-muted" rx="8" />
    <rect x="0" y="20" width="400" height="8" fill="currentColor" className="text-muted" />
    <circle cx="16" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="30" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="44" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <rect x="60" y="8" width="240" height="12" rx="6" fill="currentColor" className="text-background" opacity="0.6" />
    <rect x="16" y="38" width="368" height="22" rx="6" fill="currentColor" className="text-background" opacity="0.7" />
    <rect x="24" y="44" width="80" height="8" rx="3" fill="currentColor" className="text-muted-foreground" opacity="0.35" />
    <rect x="348" y="42" width="28" height="12" rx="4" fill="currentColor" className="text-primary" opacity="0.8" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={16 + i * 126} y="70" width="116" height="80" rx="6" fill="currentColor" className="text-background" opacity="0.7" />
        <rect x={16 + i * 126} y="70" width="116" height="40" rx="6" fill="currentColor" className="text-muted" opacity="0.5" />
        <rect x={16 + i * 126 + 36} y="82" width="44" height="18" rx="4" fill="currentColor" className="text-muted-foreground" opacity="0.25" />
        {[0,1,2,3,4].map((s) => (
          <rect key={s} x={16 + i * 126 + 8 + s * 10} y="118" width="8" height="8" rx="1"
            fill="currentColor" className={s < 4 ? "text-primary" : "text-muted-foreground"}
            opacity={s < 4 ? 0.8 : 0.2} />
        ))}
        <rect x={16 + i * 126 + 8} y="130" width={60 + i * 8} height="6" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.3" />
        <rect x={16 + i * 126 + 8} y="140" width={40 - i * 4} height="5" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.2" />
      </g>
    ))}
    <rect x="16" y="162" width="76" height="18" rx="9" fill="currentColor" className="text-primary" opacity="0.15" />
    <rect x="24" y="167" width="60" height="6" rx="2" fill="currentColor" className="text-primary" opacity="0.5" />
    {[0,1,2,3].map((d) => (
      <circle key={d} cx={176 + d * 14} cy="206" r={d === 0 ? 4 : 3}
        fill="currentColor" className="text-primary" opacity={d === 0 ? 0.7 : 0.2} />
    ))}
  </svg>
);

const PlantShopMockup = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="currentColor" className="text-secondary" rx="8" />
    <rect width="400" height="28" fill="currentColor" className="text-muted" rx="8" />
    <rect x="0" y="20" width="400" height="8" fill="currentColor" className="text-muted" />
    <circle cx="16" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="30" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="44" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <rect x="60" y="8" width="240" height="12" rx="6" fill="currentColor" className="text-background" opacity="0.6" />
    <rect x="16" y="36" width="100" height="10" rx="3" fill="currentColor" className="text-primary" opacity="0.6" />
    <rect x="300" y="34" width="36" height="14" rx="7" fill="currentColor" className="text-primary" opacity="0.8" />
    <circle cx="374" cy="38" r="8" fill="currentColor" className="text-primary" opacity="0.7" />
    <rect x="370" y="35" width="8" height="6" rx="1" fill="currentColor" className="text-primary-foreground" opacity="0.9" />
    {[0,1,2,3].map((i) => (
      <g key={i}>
        <rect x={16 + i * 94} y="58" width="84" height="100" rx="8" fill="currentColor" className="text-background" opacity="0.7" />
        <rect x={16 + i * 94 + 28} y="66" width="28" height="50" rx="6" fill="currentColor" className="text-muted" opacity="0.5" />
        <ellipse cx={16 + i * 94 + 42} cy="76" rx="18" ry="14" fill="currentColor" className="text-muted-foreground" opacity="0.3" />
        <ellipse cx={16 + i * 94 + 28} cy="82" rx="12" ry="10" fill="currentColor" className="text-muted-foreground" opacity="0.2" />
        <rect x={16 + i * 94 + 8} y="122" width={50} height="6" rx="2" fill="currentColor" className="text-foreground" opacity="0.5" />
        <rect x={16 + i * 94 + 8} y="132" width={36} height="5" rx="2" fill="currentColor" className="text-primary" opacity="0.6" />
        <rect x={16 + i * 94 + 8} y="142" width="68" height="12" rx="6" fill="currentColor" className="text-primary" opacity="0.7" />
      </g>
    ))}
    {[0,1,2,3].map((i) => (
      <rect key={i} x={16 + i * 86} y="168" width={76} height="14" rx="7"
        fill="currentColor" className={i === 0 ? "text-primary" : "text-muted"}
        opacity={i === 0 ? 0.8 : 0.4} />
    ))}
    <rect x="0" y="192" width="400" height="28" fill="currentColor" className="text-muted" opacity="0.6" />
    <rect x="16" y="199" width="80" height="8" rx="3" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <rect x="300" y="197" width="84" height="14" rx="7" fill="currentColor" className="text-primary" opacity="0.8" />
  </svg>
);

const BookNookMockup = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="currentColor" className="text-secondary" rx="8" />
    <rect width="400" height="28" fill="currentColor" className="text-muted" rx="8" />
    <rect x="0" y="20" width="400" height="8" fill="currentColor" className="text-muted" />
    <circle cx="16" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="30" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <circle cx="44" cy="14" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
    <rect x="60" y="8" width="240" height="12" rx="6" fill="currentColor" className="text-background" opacity="0.6" />
    <rect x="60" y="36" width="280" height="26" rx="8" fill="currentColor" className="text-background" opacity="0.8" />
    <rect x="72" y="43" width="140" height="10" rx="4" fill="currentColor" className="text-muted-foreground" opacity="0.3" />
    <rect x="316" y="40" width="16" height="16" rx="4" fill="currentColor" className="text-primary" opacity="0.7" />
    {[0,1,2,3].map((i) => (
      <g key={i}>
        <rect x="16" y={72 + i * 34} width="368" height="28" rx="6" fill="currentColor" className="text-background" opacity="0.7" />
        <rect x="24" y={76 + i * 34} width="16" height="20" rx="2" fill="currentColor" className="text-primary" opacity={0.5 + i * 0.1} />
        <rect x="48" y={79 + i * 34} width={120 - i * 10} height="7" rx="2" fill="currentColor" className="text-foreground" opacity="0.5" />
        <rect x="48" y={90 + i * 34} width={80 - i * 5} height="5" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.3" />
        <rect x={340 - i * 4} y={78 + i * 34} width="36" height="12" rx="6" fill="currentColor" className="text-muted" opacity="0.5" />
      </g>
    ))}
    {[0,1,2,3,4].map((p) => (
      <rect key={p} x={152 + p * 22} y="206" width="14" height="8" rx="4"
        fill="currentColor" className="text-primary" opacity={p === 0 ? 0.7 : 0.2} />
    ))}
  </svg>
);

const mockups = {
  "DealerRate": DealerRateMockup,
  "Paradise Nursery — Plant Shop": PlantShopMockup,
  "Book Nook Finder": BookNookMockup,
};

const projects = [
  {
    title: "DealerRate",
    description: "A full-stack car dealership review platform where buyers can discover, research, and review dealerships. Features automatic sentiment analysis, real-time search, async reviews, helpful voting, and a dual-role user system (consumers & dealers).",
    tags: ["Django", "Python", "JavaScript", "SQLite"],
    github: "https://github.com/youssefwerrad/Dealer_Rate",
    link: "https://dealer-rate.onrender.com/",
  },
  {
    title: "Paradise Nursery — Plant Shop",
    description: "A responsive e-commerce app for online plant shopping built with React and Redux Toolkit. Features real-time cart management, product categorization, quantity controls, and an admin panel for inventory management.",
    tags: ["React", "Redux Toolkit", "Vite", "JavaScript", "CSS3"],
    github: "https://github.com/youssefwerrad/e-plantShopping",
    link: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Nook Finder",
    description: "A React + Express full-stack app for searching millions of books via the Open Library API.",
    tags: ["React", "JavaScript", "Express.js", "Open Library API", "Vite"],
    github: "https://github.com/youssefwerrad/book-nook-finder.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            Selected work.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Mockup = mockups[project.title];
            return (
              <ScrollReveal key={project.title} delay={0.08 * i}>
                <div className="group relative rounded-xl border border-border bg-card overflow-hidden transition-[box-shadow] duration-300 hover:shadow-lg hover:shadow-foreground/5 h-full flex flex-col">
                  {Mockup && (
                    <div className="relative overflow-hidden bg-secondary border-b border-border h-44 shrink-0">
                      <div className="absolute inset-0 p-3">
                        <Mockup />
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-highlight-muted text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="Live demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
