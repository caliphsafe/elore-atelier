import type { ReactNode } from "react";

export function PolicyPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <article className="bg-[#F4EDE2] text-[#221F1E]">
      <header className="border-b border-black/15 bg-[#38402A] px-5 pb-16 pt-28 text-[#F4EDE2] md:px-8 md:pb-20 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.28em] opacity-75">ELÖRE ATELIER</p>
          <h1 className="serif-display max-w-4xl text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.045em]">{title}</h1>
          {updated ? <p className="mt-7 text-xs uppercase tracking-[0.18em] opacity-75">Last Updated: {updated}</p> : null}
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="space-y-10 text-[15px] leading-7 md:text-base md:leading-8 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:serif-display [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_li]:mb-1 [&_ul]:list-disc [&_ul]:pl-5">{children}</div>
      </div>
    </article>
  );
}
