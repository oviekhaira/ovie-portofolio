import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/15 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-black/40">
          Let&apos;s connect
        </p>

        <h2 className="mt-8 max-w-3xl text-4xl tracking-tight sm:text-6xl">
          Open to new opportunities and meaningful collaborations.
        </h2>

        <a
          href="mailto:oviekhairazayyan@gmail.com"
          className="mt-10 inline-flex items-center gap-2 border-b border-black pb-2 text-lg"
        >
          oviekhairazayyan@gmail.com
          <ArrowUpRight size={18} />
        </a>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-black/15 pt-6 text-sm text-black/40 sm:flex-row">
          <p>© 2026 Ovie Khaira</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Khairazzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/oviekhairazayyan/" 
              target="_blank" 
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}