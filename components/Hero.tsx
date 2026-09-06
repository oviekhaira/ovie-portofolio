import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
          
          <div>
            <div className="mb-8 text-sm uppercase tracking-[0.2em] text-black/50">
              Information Technology · Universitas Gadjah Mada
            </div>

            <h1 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Hi, I'm Ovie.
            </h1>

            <p>
              I like understanding the problem before building the solution.
            </p>

            <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 sm:flex-row sm:items-end">
              <p className="max-w-md text-base leading-7 text-black/60">
                Information Technology graduate with experience in system
                analysis, business process analysis, data analytics, and
                software development.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-2 text-sm font-medium"
              >
                Explore my work
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[320px]">
            <Image
              src="/profile.jpeg"
              alt="Ovie Khaira"
              width={320}
              height={420}
              priority
              className="h-[420px] w-full rounded-[2rem] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}