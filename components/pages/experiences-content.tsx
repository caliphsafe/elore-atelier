import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const workshops = [
  {
    title: "Private Workshop",
    people: "One person",
    text: "A guided individual session with no prior experience needed.",
    image: "/images/experiences-private.jpg"
  },
  {
    title: "Couples Workshop",
    people: "Two people",
    text: "A shared two-person session centered on craft, memory, and personal style.",
    image: "/images/experiences-couples.jpg"
  },
  {
    title: "Group Workshop",
    people: "Five to ten people",
    text: "A guided workshop for small groups, with pricing based on the final hat direction.",
    image: "/images/experiences-group.jpg"
  }
];

const notes = [
  "No prior experience needed",
  "Guided from beginning to end",
  "Pricing varies based on custom hat costs, materials, and final direction"
];

export function ExperiencesContent() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="eyebrow">Experiences</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Guided workshops that invite people into the art of making by hand.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Elöre experiences are designed for individuals, couples, and small groups who want to step inside the craft, learn the process, and create something with personal meaning.
            </p>
          </div>

          <ImageSlot
            src="/images/experiences-hero.jpg"
            label="Elöre Atelier workshop experience"
            className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-3">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <ImageSlot
                src={workshop.image}
                label={workshop.title}
                className="aspect-[4/5]"
              />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  {workshop.people}
                </p>
                <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink">
                  {workshop.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-brand-ink/72">
                  {workshop.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <ImageSlot
              src="/images/experiences-materials.jpg"
              label="Elöre Atelier workshop materials"
              className="min-h-[340px] rounded-[1.5rem]"
            />

            <div className="flex flex-col justify-center">
              <p className="eyebrow">Workshop Experiences</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Private, couples, and group workshops guided by the studio.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                Each workshop is guided from beginning to end and shaped around the selected experience.
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
            <p className="eyebrow">Custom Hat Costs</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
              Pricing varies based on custom hat costs, materials, and final direction.
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-ink/72">
              The inquiry process begins with the workshop type, number of people, preferred date, and final hat direction.
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
