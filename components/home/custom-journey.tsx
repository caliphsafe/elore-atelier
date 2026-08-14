import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Hat Making Experience",
    text: "A hands-on introduction to shaping, finishing, and creating your own hat."
  },
  {
    title: "Two-Day Workshop",
    text: "An immersive training where each participant leaves with one felt hat and one straw hat."
  },
  {
    title: "Private Atelier",
    text: "Book a private experience for individuals, groups, or special events."
  }
];

export function CustomJourney() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-luxe border thin-border shadow-soft">
            <Image
              src="/images/home/experiences/experience.jpg"
              alt="ELÖRE Experiences"
              fill
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"/>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Experiences
              </p>

              <h2 className="serif-display mt-4 max-w-lg text-4xl leading-tight text-white md:text-5xl">
                Learn, create, and experience the craft firsthand.
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-10">
            <div>
              <p className="eyebrow">Experiences</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Step inside the atelier.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-ink/72">
                More than a purchase, ELÖRE offers immersive experiences that
                introduce guests to the art of hat making through guided
                workshops, private sessions, and hands-on creative experiences.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {experiences.map((experience) => (
                <div
                  key={experience.title}
                  className="rounded-[1.4rem] border thin-border p-5"
                >
                  <h3 className="serif-display text-2xl text-brand-ink">
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                    {experience.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                View Experiences
              </Link>

              <a
                href="#"
                className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                Airbnb Experiences
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
