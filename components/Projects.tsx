import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "AI-Based User Feedback Analysis for iPusnas",
    category: "Undergraduate Thesis · AI · NLP · UX Research",
    description:
      "Analyzed 16,733 user reviews using IndoBERT and BERTopic to identify sentiment, recurring issues, and opportunities for user experience improvement.",
    year: "2026",
    image: "/projects/Gambar 4.15. Distribusi Rating Ulasan iPusnas.png",
    link: "https://github.com/Khairazzz/SentimentAnalysis-Skripsi",
  },
  {
    number: "02",
    title: "Flowra — Smart Irrigation System",
    category: "Frontend · UI/UX · IoT",
    description:
      "Designed and developed a web interface for monitoring soil conditions and controlling irrigation actuators in real time.",
    year: "2025",
    image: "/projects/flowra.png",
    link: "https://github.com/lhanif/Capstone-D07",
  },
  {
    number: "03",
    title: "LoopFit",
    category: "Backend · Database · C#",
    description:
      "Developed backend functionalities for a clothing donation platform supporting circular economy initiatives and sustainable consumption.",
    year: "2024",
    image: "/projects/loopfit.png",
    link: "https://github.com/lanafitriadewani/LoopFit",
  },
  {
    number: "04",
    title: "Kanban Web API",
    category: "Full-Stack Development",
    description:
      "Developed card management functionality and API integration for a Kanban-based task management application.",
    year: "2024",
    image: "/projects/kanban.png",
    link: "https://github.com/iZcy/KanbanPemWebInterface",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-black/15 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-black/40">
              Selected Projects
            </p>

            <h2 className="text-4xl tracking-tight sm:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <span className="hidden text-sm text-black/40 sm:block">
            04 projects
          </span>
        </div>

        <div className="divide-y divide-black/15 border-y border-black/15">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-8 py-10 sm:grid-cols-[280px_80px_1fr_auto] sm:items-start"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              </div>

              <span className="text-sm text-black/35">
                {project.number}
              </span>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-black/40">
                  {project.category}
                </p>

                <h3 className="text-2xl tracking-tight transition-transform group-hover:translate-x-1 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-black/40">
                <span>{project.year}</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}