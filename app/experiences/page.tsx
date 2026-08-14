import Image from "next/image";
import Link from "next/link";
import { WorkshopBookingForm } from "@/components/experiences/workshop-booking-form";

const included = [
  "Guided instruction inside the atelier",
  "Hands-on making and finishing process",
  "Material, color, and silhouette guidance",
  "Private, couples, and group formats available",
  "No previous experience needed",
  "Pricing varies based on custom hat costs"
];

export default function ExperiencesPage() {
  return (
    <main className="experience-page">
      <section className="experience-opening">
        <div className="editorial-container experience-opening__inner">
          <div className="experience-opening__content">
            <div className="experience-opening__title">
              <h1 className="serif-display">Learn the craft of hat making inside the atelier.</h1>
            </div>
            <div className="experience-opening__copy">
              <p>
                Elöre Experiences invite guests into the timeless art of hat-making through private, couples, and group workshops. Guided by hand, each experience offers an intimate introduction to the craft, where tradition, creativity, and storytelling come together.
              </p>
              <Link href="#workshop-booking" className="btn-olive">Book an Experience</Link>
            </div>
          </div>

          <div className="experience-opening__image">
            <Image
              src="/images/experiences/hero.jpg"
              alt="ELÖRE hats prepared for an atelier experience"
              fill
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="experience-story">
        <div className="editorial-container experience-story__inner">
          <div className="experience-story__statement">
            <h2 className="serif-display">Discover the beauty of hat-making.</h2>
          </div>

          <div className="experience-story__included">
            <h3 className="serif-display">What Is Included</h3>
            <div className="experience-included-list">
              {included.map((item, index) => (
                <div className="experience-included-item" key={item}>
                  <span className="serif-display">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience-materials" aria-label="ELÖRE hat-making materials">
        <div className="experience-materials__frame">
          <Image
            src="/images/experiences/materials.jpg"
            alt="ELÖRE hat-making materials"
            fill
            sizes="100vw"
            className="experience-materials__image"
          />
        </div>
      </section>

      <WorkshopBookingForm />
    </main>
  );
}
