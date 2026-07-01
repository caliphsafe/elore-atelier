import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Hat-Making Experience",
    label: "Introductory Experience",
    text: "A guided hands-on session where guests are introduced to the craft of shaping, finishing, and personalizing their own hat.",
    image: "/images/experiences/hat-making.jpg",
    alt: "ELÖRE hat-making experience"
  },
  {
    title: "Two-Day Hat-Making Workshop",
    label: "Immersive Training",
    text: "A deeper training experience where participants learn the process over two days and leave with two completed hats: one felt and one straw.",
    image: "/images/experiences/two-day-workshop.jpg",
    alt: "ELÖRE two-day hat-making workshop"
  },
  {
    title: "Private Atelier Experience",
    label: "Private + Group Booking",
    text: "A tailored private experience for individuals, groups, creative teams, special events, and intimate gatherings of up to 15 people.",
    image: "/images/experiences/private-atelier.jpg",
    alt: "ELÖRE private atelier experience"
  }
];

const details = [
  {
    title: "Group Size",
    text: "Workshops can accommodate up to 15 participants depending on the format and booking needs."
  },
  {
    title: "What Guests Make",
    text: "Two-day workshop participants leave with two hats: one felt hat and one straw hat."
  },
  {
    title: "Booking Options",
    text: "Guests can inquire directly through the site or book through Airbnb Experiences once the listing is active."
  }
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-8 lg:min-h-[78vh] lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="order-2 flex flex-col justify-between rounded-luxe border thin-border bg-white/72 p-6 shadow-soft backdrop-blur md:p-8 lg:order-1 lg:p-10">
              <div>
                <p className="eyebrow">Experiences</p>

                <h1 className="serif-display mt-5 max-w-3xl text-5xl leading-[0.92] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[5.6rem]">
                  Step inside the atelier and experience the craft firsthand.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                  ELÖRE offers hands-on hat-making experiences, private workshops,
                  and immersive training designed for guests seeking a deeper
                  connection to the craft.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                  >
                    Inquire to Book
                  </Link>

                  <a
                    href="#"
                    className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                  >
                    Airbnb Experiences
                  </a>
                </div>
              </div>

              <div className="mt-10 grid gap-4 border-t thin-border pt-6 sm:grid-cols-3 lg:mt-12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    Hands-On
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                    Guests learn by shaping, finishing, and creating.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    Up to 15
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                    Workshop formats can support intimate group sessions.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    2 Hats
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                    Two-day guests leave with one felt and one straw hat.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 relative min-h-[520px] overflow-hidden rounded-luxe border thin-border shadow-soft sm:min-h-[640px] lg:order-2 lg:min-h-full">
              <Image
                src="/images/experiences/hero.jpg"
                alt="ELÖRE Atelier hat-making experience"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="max-w-md rounded-[1.5rem] border border-white/20 bg-white/12 p-5 text-white shadow-soft backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                    Hat-Making Experience
                  </p>
                  <p className="serif-display mt-3 text-2xl leading-tight md:text-3xl">
                    A craft-centered experience designed to be memorable, tactile,
                    and personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Offerings</p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
              Choose the experience that fits the moment.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              From a single hands-on session to a two-day workshop, each offering
              is designed to bring guests closer to the making process while
              preserving the elevated feel of the ELÖRE world.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <div className="relative min-h-[420px] overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-mocha">
                    {experience.label}
                  </p>

                  <h3 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                    {experience.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-luxe border thin-border shadow-soft">
              <Image
                src="/images/experiences/materials.jpg"
                alt="ELÖRE hat-making materials"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            </div>

            <div className="flex flex-col justify-center rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft md:p-8 lg:p-10">
              <p className="eyebrow">The Workshop Format</p>

              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Designed for learning, making, and leaving with something real.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
                The two-day workshop is built as an immersive training experience.
                Guests are introduced to the materials, tools, shaping process,
                finishing details, and creative decisions involved in making a
                hat from start to finish.
              </p>

              <div className="mt-8 grid gap-4">
                {details.map((detail) => (
                  <div key={detail.title} className="border-t thin-border pt-5">
                    <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                      {detail.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-ink/72 md:text-base">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-8 md:px-8 md:pb-28 lg:px-12">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Booking</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Book directly or through Airbnb Experiences.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Visitors can inquire through the ELÖRE website for private
                  bookings, workshops, and custom group formats. Once the Airbnb
                  Experiences listing is active, guests will also be able to book
                  through Airbnb.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-fit justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Inquire to Book
                </Link>

                <a
                  href="#"
                  className="inline-flex w-fit justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Airbnb Experiences
                </a>

                <Link
                  href="/studio"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  Learn about the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
