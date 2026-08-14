import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const steps = [
  {
    number: "01",
    title: "Private Workshop",
    text: "A guided one-person experience with no prior experience needed."
  },
  {
    number: "02",
    title: "Couples Workshop",
    text: "A shared two-person session centered on making, memory, and personal style."
  },
  {
    number: "03",
    title: "Group Workshop",
    text: "A guided session for five to ten people, with pricing based on the final hat direction."
  },
];

export function CustomJourney() {
  return (
    <section className="section-pad">
      <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f6efe7] shadow-soft">
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <ImageSlot
            src="/images/home-experience.jpg"
            label="Elöre Atelier workshop experience"
            className="min-h-[340px] rounded-[1.5rem]"
          />

          <div className="grid gap-6">
            <div>
              <p className="eyebrow">Experiences</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Guided workshops that bring people into the making process.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Elöre workshops are designed for individuals, couples, and small groups who want to experience the craft firsthand. Each session is guided, welcoming, and built around the final hat direction.
              </p>
            </div>

            <div className="grid gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[1.5rem] border thin-border bg-white p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <p className="serif-display text-3xl leading-none text-brand-mocha">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.24em] text-brand-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/experiences"
              className="inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              View Experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
