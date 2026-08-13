"use client";

import Image from "next/image";
import { useState } from "react";

export function ExperienceVideo() {
  const [ready, setReady] = useState(false);

  return (
    <div className="mx-auto grid max-w-5xl place-items-center rounded-[1.75rem] bg-white p-5 shadow-soft md:p-8">
      <div className="relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[2rem] border thin-border bg-[#f7f1ea] shadow-soft md:max-w-[390px]">
        <Image
          src="/images/experiences/hero.jpg"
          alt="ELÖRE workshop video preview"
          fill
          sizes="(max-width: 768px) 82vw, 390px"
          className={`object-cover transition duration-500 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setReady(true)}
          onError={() => setReady(false)}
        >
          <source src="/videos/experiences/atelier-workshop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
