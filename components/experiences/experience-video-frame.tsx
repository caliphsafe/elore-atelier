"use client";

import Image from "next/image";
import { useState } from "react";

export function ExperienceVideoFrame() {
  const [ready, setReady] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border thin-border bg-white p-4 shadow-soft md:p-6 lg:p-8">
      <div className="grid place-items-center">
        <div className="relative aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-[1.75rem] border thin-border bg-[#f7f1ea] shadow-soft md:max-w-[390px]">
          <Image
            src="/images/experiences/hero.jpg"
            alt="ELÖRE workshop video preview"
            fill
            sizes="(max-width: 768px) 80vw, 390px"
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
            preload="metadata"
            onCanPlay={() => setReady(true)}
            onLoadedData={() => setReady(true)}
            onError={() => setReady(false)}
          >
            <source src="/videos/experiences/atelier-workshop.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
