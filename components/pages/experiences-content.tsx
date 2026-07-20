import Link from "next/link";

const workshops = [
  {
    title: "Private Workshop",
    people: "One person",
    text: "A guided individual session for someone who wants a focused introduction to the making process."
  },
  {
    title: "Couples Workshop",
    people: "Two people",
    text: "A shared workshop for two people, designed as a personal experience centered on craft and memory."
  },
  {
    title: "Group Workshop",
    people: "Five to ten people",
    text: "A guided group session for small gatherings, creative teams, and community experiences."
  }
];

const notes = [
  "No prior experience needed",
  "Guided from beginning to end",
  "Pricing varies based on custom hat costs, materials, and final direction",
  "Designed for one location and a hands-on studio experience"
];

export function ExperiencesContent() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Experiences</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Guided workshops that invite people into the art of making by hand.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre experiences are designed for individuals, couples, and small groups who want to step inside the craft, learn the process, and create something with personal meaning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-3">
          {workshops.map((workshop, index) => (
            <article
              key={workshop.title}
              className={`rounded-luxe border thin-border p-6 shadow-soft ${
                index === 2 ? "olive-panel text-white" : "bg-white"
              }`}
            >
              <p
                className={`text-[11px] uppercase tracking-[0.28em] ${
                  index === 2 ? "text-white/70" : "text-brand-mocha"
                }`}
              >
                {workshop.people}
              </p>
              <h2
                className={`serif-display mt-4 text-4xl leading-tight ${
                  index === 2 ? "text-white" : "text-brand-ink"
                }`}
              >
                {workshop.title}
              </h2>
              <p
                className={`mt-5 text-sm leading-7 ${
                  index === 2 ? "text-white/80" : "text-brand-ink/72"
                }`}
              >
                {workshop.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#ead8c4_0%,#c7a985_100%)] min-h-[340px]" />

            <div className="flex flex-col justify-center">
              <p className="eyebrow">Workshop Approach</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                A welcoming introduction to process, material, and personal expression.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Each workshop is guided by the studio and shaped around the selected experience. The goal is to make the process feel approachable while preserving the care, patience, and intention behind the craft.
              </p>
              <div className="mt-6 grid gap-3">
                {notes.map((note) => (
                  <p key={note} className="text-sm leading-7 text-brand-ink/72">
                    • {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Custom Hat Direction</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
              Workshop pricing can vary based on the final hat direction.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-ink/72">
              Materials, complexity, and final customization can change the cost of each experience. The inquiry process helps clarify the workshop type, number of people, preferred date, and creative direction.
            </p>
          </div>

          <div className="rounded-luxe olive-panel p-6 shadow-soft md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Start Here
            </p>
            <h3 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Send a note to begin planning your workshop.
            </h3>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:bg-[#f1e6d8]"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
