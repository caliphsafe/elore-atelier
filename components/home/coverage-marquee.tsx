import Image from "next/image";

const coverageLogos=[
 {src:"/images/home/coverage/boston.png",alt:"Boston media coverage"},
 {src:"/images/home/coverage/downtown.png",alt:"Downtown media coverage"},
 {src:"/images/home/coverage/globe.png",alt:"Globe media coverage"},
 {src:"/images/home/coverage/huston.png",alt:"Huston media coverage"},
 {src:"/images/home/coverage/tdgarden.png",alt:"TD Garden media coverage"},
 {src:"/images/home/coverage/wcvb.png",alt:"WCVB media coverage"}
];
const marqueeLogos=[...coverageLogos,...coverageLogos];
const stories=[
 {source:"Boston Neighborhood Network",title:"ELÖRE ATELIER on Boston Neighborhood Network",excerpt:"Watch ELÖRE ATELIER featured by Boston Neighborhood Network and step inside the story of the atelier and its craft.",href:"https://reflect-cablecast-bnn.cablecast.tv/internetchannel/show/116645?site=2",action:"Watch Feature"},
 {source:"WCVB CityLine",title:"CityLine: Meet the makers",excerpt:"CityLine meets local makers, entrepreneurs, and innovators, with Jessica Brown trying the art of hat making at ELÖRE ATELIER.",href:"https://www.wcvb.com/article/cityline-meet-the-makers/73780793",action:"Read More"},
 {source:"CBS Boston",title:"How Boston's downtown neighborhood is being revived with new places to live and work",excerpt:"A look at the people and businesses bringing new energy to downtown Boston, including Salomé Kopasz and ELÖRE ATELIER.",href:"https://www.youtube.com/watch?v=L7sllysPgWk",action:"Watch Feature"},
 {source:"Voyage Houston",title:"Life & Work with Salomé Bissa Kopasz of Retail Fashion",excerpt:"Salomé Bissa Kopasz shares her story, her work, and the path behind the creative practice that became ELÖRE ATELIER.",href:"https://voyagehouston.com/interview/life-work-with-salome-bissa-kopasz-of-retail-fashion",action:"Read More"},
 {source:"City of Boston",title:"ELÖRE ATELIER celebrates its grand opening at the Hyatt Regency Downtown",excerpt:"The City of Boston's economic development team celebrates ELÖRE ATELIER and its grand opening in the heart of Downtown Boston.",href:"https://www.facebook.com/EconDevBoston/posts/pfbid0hjQeK9D1Ln7obzLDgEZL6JWbLVNyEkY9mrYvUSJDGEqjfToMaGV52SfqZmxBYBN3l",action:"View Feature"},
 {source:"The Boston Globe",title:"In downtown Boston, a new hat shop brims with possibilities",excerpt:"Inside the Hyatt Regency Boston, Salomé Bissa Kopasz has found a permanent home for ELÖRE ATELIER and her handcrafted hats.",href:"https://www.bostonglobe.com/2025/12/04/business/salome-bissa-kopasz-elore-atelier-hyatt/",action:"Read More"},
 {source:"Downtown Boston Alliance",title:"ELÖRE ATELIER in Downtown Boston",excerpt:"Discover ELÖRE ATELIER as part of the community of independent businesses bringing craft and creativity to Downtown Boston.",href:"https://www.bostonglobe.com/2025/12/04/business/salome-bissa-kopasz-elore-atelier-hyatt/",action:"Learn More"},
 {source:"Black Owned Bos.",title:"ELÖRE ATELIER — About This Business",excerpt:"A Black-owned hat-making studio in Downtown Boston preserving and reimagining the timeless art of hat-making through craft, community, and experience.",href:"https://directory.blackownedbos.com/business/El%C3%B6re%2BAtelier",action:"View Profile"}
];

export function CoverageMarquee(){
 return <section className="px-5 pb-16 pt-2 md:px-8 md:pb-20 lg:px-12">
  <style>{`
   @keyframes coverageMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
   .coverage-marquee{display:flex;width:max-content;gap:3rem;align-items:center;animation:coverageMarquee 34s linear infinite}
   .coverage-logo{position:relative;height:42px;width:180px;flex:0 0 auto;opacity:.76;filter:grayscale(1)}
   .coverage-reading{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid rgba(56,64,42,.16)}
   .coverage-story{display:flex;min-width:0;flex-direction:column;padding:1.5rem;color:#38402A;border-top:1px solid rgba(56,64,42,.16)}
   .coverage-story:nth-child(-n+3){border-top:0}.coverage-story:not(:nth-child(3n+1)){border-left:1px solid rgba(56,64,42,.16)}
   .coverage-story__source{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(56,64,42,.56)}
   .coverage-story h3{margin:.7rem 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(1.4rem,1.8vw,1.9rem);line-height:1.04;font-weight:500}
   .coverage-story p{margin:.75rem 0 0;font-size:.8rem;line-height:1.6;color:rgba(56,64,42,.67)}
   .coverage-story__link{margin-top:auto;padding-top:1.05rem;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase}
   .coverage-story__link span{display:inline-block;border-bottom:1px solid rgba(56,64,42,.45);padding-bottom:.18rem}
   @media(max-width:768px){.coverage-marquee{gap:2rem;animation-duration:28s}.coverage-logo{height:34px;width:140px}.coverage-reading{grid-template-columns:1fr}.coverage-story,.coverage-story:nth-child(-n+3){border-top:1px solid rgba(56,64,42,.16)}.coverage-story:first-child{border-top:0}.coverage-story:not(:nth-child(3n+1)){border-left:0}.coverage-story{padding:1.25rem}}
  `}</style>
  <div className="editorial-container"><div className="overflow-hidden rounded-luxe border thin-border bg-white/82 shadow-soft backdrop-blur">
   <div className="py-6"><h2 className="serif-display px-6 text-3xl leading-tight text-brand-ink md:px-8 md:text-4xl">Covered By</h2><div className="mt-5 overflow-hidden border-y thin-border bg-[#f7f1ea]/70 py-4"><div className="coverage-marquee" aria-label="ELÖRE ATELIER media coverage logos">{marqueeLogos.map((logo,index)=><div className="coverage-logo" key={`${logo.src}-${index}`}><Image src={logo.src} alt={index<coverageLogos.length?logo.alt:""} fill sizes="180px" className="object-contain"/></div>)}</div></div></div>
   <div className="coverage-reading" aria-label="ELÖRE ATELIER press features">{stories.map(story=><a className="coverage-story" href={story.href} target="_blank" rel="noreferrer" key={`${story.source}-${story.href}`}><span className="coverage-story__source">{story.source}</span><h3>{story.title}</h3><p>{story.excerpt}</p><span className="coverage-story__link"><span>{story.action} ↗</span></span></a>)}</div>
  </div></div>
 </section>
}
