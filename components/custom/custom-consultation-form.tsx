"use client";
import {FormEvent,useState} from "react";
const inputClass="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none transition placeholder:text-brand-olive/45 focus:border-brand-maroon";
const labelClass="experience-booking__label";
export function CustomConsultationForm(){
 const[status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
 const[error,setError]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus("sending");setError("");const form=e.currentTarget;const d=new FormData(form);
  const payload={type:"custom",website:d.get("website"),name:d.get("name"),email:d.get("email"),phone:d.get("phone"),preferredDate:d.get("date"),hatStyle:d.get("style"),headSize:d.get("size"),budget:d.get("budget"),notes:d.get("notes")};
  try{const r=await fetch("/api/forms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const result=await r.json();if(!r.ok)throw new Error(result.error||"Unable to send.");setStatus("sent");form.reset()}catch(err){setError(err instanceof Error?err.message:"Unable to send.");setStatus("error")}
 }
 return <section id="custom-consultation" className="experience-booking"><div className="editorial-container experience-booking__inner">
 <aside className="experience-booking__intro"><h2 className="serif-display">Begin your custom consultation.</h2><p>Tell us a little about the piece you have in mind. The atelier will review your request and follow up to begin shaping your custom hat.</p><div className="experience-booking__selection"><p className="serif-display">One-of-One</p><span>Made around your story, fit, and personal direction.</span></div></aside>
 <form onSubmit={submit} className="experience-booking__form"><input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true"/>
 <div className="experience-booking__row"><label><span className={labelClass}>Full Name</span><input required name="name" placeholder="Your name" className={inputClass}/></label><label><span className={labelClass}>Email Address</span><input required type="email" name="email" placeholder="you@example.com" className={inputClass}/></label></div>
 <div className="experience-booking__row"><label><span className={labelClass}>Phone Number</span><input required type="tel" name="phone" placeholder="(000) 000-0000" className={inputClass}/></label><label><span className={labelClass}>Preferred Consultation Date</span><input type="date" name="date" className={inputClass}/></label></div>
 <div className="experience-booking__row"><label><span className={labelClass}>Hat Style / Direction</span><input name="style" placeholder="Fedora, cowboy, wide brim..." className={inputClass}/></label><label><span className={labelClass}>Head Measurement</span><input name="size" placeholder="Centimeters, if known" className={inputClass}/></label></div>
 <label><span className={labelClass}>Budget Range</span><select name="budget" className={inputClass}><option value="">Select a range</option><option>$400–$600</option><option>$600–$800</option><option>$800–$1,000</option><option>$1,000+</option><option>Not sure yet</option></select></label>
 <label className="experience-booking__notes"><span className={labelClass}>Tell Us About Your Hat</span><textarea required name="notes" placeholder="Share colors, materials, inspiration, occasion, details, or anything else you would like the atelier to know." rows={5} className={inputClass}/></label>
 <div className="experience-booking__submit"><p>Custom consultation requests are reviewed by the atelier before confirmation.</p><button disabled={status==="sending"} type="submit" className="btn-olive">{status==="sending"?"Sending...":"Submit Consultation"}</button></div>
 {status==="sent"?<p className="experience-booking__sent">Thank you. Your custom consultation has been sent to the atelier.</p>:null}{status==="error"?<p className="experience-booking__sent">{error}</p>:null}
 </form></div></section>
}