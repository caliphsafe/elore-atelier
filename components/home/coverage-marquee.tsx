import Image from "next/image";

const coverageLogos = [
  { src: "/images/home/coverage/boston.png", alt: "Boston media coverage" },
  { src: "/images/home/coverage/downtown.png", alt: "Downtown media coverage" },
  { src: "/images/home/coverage/globe.png", alt: "Globe media coverage" },
  { src: "/images/home/coverage/huston.png", alt: "Huston media coverage" },
  { src: "/images/home/coverage/tdgarden.png", alt: "TD Garden media coverage" },
  { src: "/images/home/coverage/wcvb.png", alt: "WCVB media coverage" }
];

const marqueeLogos = [...coverageLogos, ...coverageLogos];

export function CoverageMarquee() {
  return (
    <section className="px-5 pb-16 pt-2 md:px-8 md:pb-20 lg:px-12">
      <style>{`
        @keyframes coverageMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .coverage-marquee { display:flex; width:max-content; gap:3rem; align-items:center; animation:coverageMarquee 34s linear infinite; }
        .coverage-logo { position:relative; height:42px; width:180px; flex:0 0 auto; opacity:.76; filter:grayscale(1); }
        @media (max-width:768px) {
          .coverage-marquee { gap:2rem; animation-duration:28s; }
          .coverage-logo { height:34px; width:140px; }
        }
      `}</style>
      <div className="editorial-container">
        <div className="overflow-hidden rounded-luxe border thin-border bg-white/82 py-6 shadow-soft backdrop-blur">
          <h2 className="serif-display px-6 text-3xl leading-tight text-brand-ink md:px-8 md:text-4xl">Covered By</h2>
          <div className="mt-5 overflow-hidden border-y thin-border bg-[#f7f1ea]/70 py-4">
            <div className="coverage-marquee" aria-label="ELÖRE ATELIER media coverage logos">
              {marqueeLogos.map((logo, index) => (
                <div className="coverage-logo" key={`${logo.src}-${index}`}>
                  <Image src={logo.src} alt={index < coverageLogos.length ? logo.alt : ""} fill sizes="180px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
