const experiences = [
  {
    period: "Jan 2025 — Mar 2025",
    role: "System Analyst Intern",
    company: "PT Telkomsel",
    description:
      "Analyzed business processes and system requirements, created functional and non-functional documentation, and developed UML diagrams to support communication between stakeholders and development teams.",
  },
  {
    period: "Feb 2025 — Jul 2025",
    role: "Practicum Assistant",
    company:
      "Department of Electrical Engineering and Information Technology, UGM",
    description:
      "Guided students through fundamental programming concepts, practical exercises, debugging, and problem solving while supporting lecturers in practicum activities.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-black/15 px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-16 text-sm uppercase tracking-[0.2em] text-black/40">
          Experience
        </p>

        <div className="divide-y divide-black/15 border-y border-black/15">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="grid gap-6 py-10 lg:grid-cols-[180px_1fr]"
            >
              <p className="text-sm text-black/40">
                {experience.period}
              </p>

              <div>
                <h3 className="text-2xl tracking-tight">
                  {experience.role}
                </h3>

                <p className="mt-1 text-black/50">
                  {experience.company}
                </p>

                <p className="mt-6 max-w-2xl leading-7 text-black/60">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}