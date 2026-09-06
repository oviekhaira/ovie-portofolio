export default function About() {
  return (
    <section id="about" className="border-t border-black/15 px-6 py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-black/40">
            About
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="max-w-3xl text-2xl leading-relaxed tracking-tight sm:text-3xl">
            I am an Information Technology graduate from Universitas Gadjah
            Mada with an interest in building technology solutions that connect
            business needs, user experience, and data.
          </p>

          <p className="mt-8 max-w-2xl leading-7 text-black/60">
            My experience spans system analysis, business process analysis,
            data analytics, machine learning, NLP, and software development.
            Through academic projects and professional experience, I have
            developed an approach that combines analytical thinking with
            practical implementation.
          </p>
        </div>
      </div>
    </section>
  );
}