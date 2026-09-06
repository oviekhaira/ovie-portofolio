const skills = {
  "System & Analysis": [
    "System Analysis",
    "Business Process Analysis",
    "Requirements Analysis",
    "UML",
    "Technical Documentation",
  ],
  "Data & AI": [
    "Python",
    "Data Analysis",
    "Machine Learning",
    "NLP",
    "Data Visualization",
  ],
  "Tools & Technology": [
    "Pandas",
    "Scikit-learn",
    "Figma",
    "Git",
    "Next.js",
  ],
  "Professional": [
    "Stakeholder Communication",
    "Problem Solving",
    "Cross-functional Collaboration",
    "Public Speaking",
  ],
};

export default function Skills() {
  return (
    <section className="border-t border-black/15 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-16 text-sm uppercase tracking-[0.2em] text-black/40">
          Capabilities
        </p>

        <div className="grid gap-12 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-5 text-xl">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/15 px-4 py-2 text-sm text-black/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}