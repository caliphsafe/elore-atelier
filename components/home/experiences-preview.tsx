import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "Private Workshop",
    text: "A guided one-on-one atelier experience for guests who want to create a custom hat with personal direction."
  },
  {
    title: "Couples Workshop",
    text: "A shared creative session for two people, shaped around material, color, silhouette, and the making process."
  },
  {
    title: "Group Workshop",
    text: "A guided studio experience for groups of 5–10 people. No previous experience is needed."
  }
];

export function ExperiencesPreview() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="relative min-h-[500px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[620px]">
            <Image
              src="/images/home/experiences/experience.jpg"
              alt="ELÖRE Atelier Experiences"
              fill
              priority={false}
              sizes="(max-width:1024px) 100vw, 58vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="serif-display max-w-lg text-4xl leading-tight text-white md:text-6xl">
                Learn the craft inside the studio.
              </h2>
            </div>
          </div>

          <div className="flex flex-col rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-9">
            <div>
              <h2 className="serif-display text-4xl leading-tight text-brand-olive md:text-5xl">
                Guided workshops for individuals, couples, and groups.
              </h2>

              <p className="mt-6 text-base leading-8 text-brand-olive/75 md:text-lg">
                Elöre Atelier invites guests into the process through hands-on
                workshops where every hat is shaped with patience, precision,
                and care. Pricing varies based on custom hat costs and material
                direction.
              </p>
            </div>

            <div className="mt-9 grid gap-5">
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="border-b thin-border pb-5 last:border-none last:pb-0"
                >
                  <h3 className="serif-display text-3xl leading-tight text-brand-olive">
                    {offering.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-brand-olive/75 md:text-base">
                    {offering.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex justify-center rounded-full bg-brand-olive px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-maroon"
              >
                Explore Experiences
              </Link>

              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full border border-brand-olive px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-olive transition hover:border-brand-maroon hover:text-brand-maroon"
              >
                Inquire to Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
