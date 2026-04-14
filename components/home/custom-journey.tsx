import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "Begin with a conversation around silhouette, fit, references, and intended feel.",
  },
  {
    number: "02",
    title: "Material Direction",
    text: "Shape the piece through color, finish, trim, texture, and bespoke details.",
  },
  {
    number: "03",
    title: "Final Craft",
    text: "The hat is refined, finished, and prepared as a wearable signature piece.",
  },
];

export function CustomJourney() {
  return (
    <section className="section-pad">
      <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f6efe7] shadow-soft">
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="eyebrow">Custom Hat Experience</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
              A guided bespoke process from idea to finished form.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
              The custom order experience should feel intentional, intimate, and
              easy to understand, giving each client confidence in the process
              before their commission begins.
            </p>

            <Link
              href="/custom"
              className="mt-8 inline-flex rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              Begin the Journey
            </Link>
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
        </div>
      </div>
    </section>
  );
}
