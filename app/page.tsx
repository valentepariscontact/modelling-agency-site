"use client";

import { useState } from "react";
import HeroVideo from "@/components/HeroVideo";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { models } from "@/lib/models";

type ScoutData = {
  First_Name: string;
  Last_Name: string;
  email: string;
  Age: string;
  Country: string;
  Height_CM: string;
  Gender: string;
  Bust_CM: string;
  Waist_CM: string;
  Hips_CM: string;
  Shoes: string;
  Eyes: string;
  Hair: string;
  Interest: string;
  instagram: string;
};

const empty: ScoutData = {
  First_Name: "", Last_Name: "", email: "", Age: "", Country: "",
  Height_CM: "", Gender: "", Bust_CM: "", Waist_CM: "",
  Hips_CM: "", Shoes: "", Eyes: "", Hair: "", Interest: "", instagram: "", instagram: "",
};

const photoLabels = ["Portrait", "Headshot", "Full_Figure", "Side_Profile"] as const;
type PhotoLabel = (typeof photoLabels)[number];

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState<ScoutData>(empty);
  const [photos, setPhotos] = useState<Record<PhotoLabel, File | null>>({
    Portrait: null, Headshot: null, Full_Figure: null, Side_Profile: null,
  });
  const [consent, setConsent] = useState(false);

  function field(key: keyof ScoutData, value: string) {
    setData((p) => ({ ...p, [key]: value }));
  }

  function closeForm() {
    setIsFormOpen(false);
    setStep(1);
    setData(empty);
    setPhotos({ Portrait: null, Headshot: null, Full_Figure: null, Side_Profile: null });
    setConsent(false);
  }

  const stepComplete = (() => {
    if (step === 1) return ["First_Name","Last_Name","email","Age","Country","Height_CM","Gender"].every((k) => data[k as keyof ScoutData].trim() !== "");
    if (step === 2) return ["Bust_CM","Waist_CM","Hips_CM","Shoes"].every((k) => data[k as keyof ScoutData].trim() !== "");
    if (step === 3) return photoLabels.every((l) => photos[l] !== null);
    if (step === 4) return data.Interest !== "";
    return false;
  })();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new FormData();
      (Object.keys(data) as (keyof ScoutData)[]).forEach((k) => body.append(k, data[k]));
      body.append("Consent_Data", "yes");
      photoLabels.forEach((label) => {
        if (photos[label]) body.append("photos", photos[label]!, `${label}_${photos[label]!.name}`);
      });

      const res = await fetch("/api/scout", { method: "POST", body });
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => { closeForm(); setIsSubmitted(false); }, 6000);
      } else {
        const json = await res.json().catch(() => ({}));
        alert(json.error || "Submission failed. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inp = "w-full bg-transparent border-b border-[#001F3F]/20 py-3 text-[11px] tracking-[0.2em] uppercase text-[#001F3F] placeholder-[#001F3F]/40 outline-none focus:border-[#001F3F] transition-colors";
  const stepLabels = ["Identity", "Measurements (CM)", "Polaroids", "Management", "Agreement"];

  return (
    <main className="-mx-4 flex w-screen flex-col md:-mx-8 lg:-mx-10">
      <HeroVideo
        title="Valenté"
        subtitle="Model Agency"
        videoUrl="https://player.vimeo.com/external/434045526.sd.mp4?s=e99f8dbf0278f6184cfef97d65cb658649b57f84&profile_id=164&oauth2_token_id=57447761"
      />

      <section id="get-scouted" className="bg-white py-20 px-4 md:px-8 lg:px-10 border-b border-[#001F3F]/5">
        <div className="mx-auto max-w-4xl">

          {!isFormOpen && !isSubmitted && (
            <div className="text-center py-10">
              <ScrollFadeIn>
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#001F3F]/50 mb-4">Join Valenté</p>
                <h2 className="font-brand text-[#001F3F] text-4xl md:text-6xl mb-10 tracking-tight">Get Scouted</h2>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="border border-[#001F3F] text-[#001F3F] px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#001F3F] hover:text-white transition-all duration-500"
                >
                  Start Application
                </button>
              </ScrollFadeIn>
            </div>
          )}

          {isSubmitted && (
            <div className="animate-in fade-in zoom-in duration-1000 text-center py-24">
              <h2 className="font-brand text-[#001F3F] text-3xl md:text-5xl mb-6 tracking-tight italic">
                Thank you for your application.
              </h2>
              <p className="text-[0.7rem] uppercase tracking-[0.5em] text-[#001F3F]/60">
                Valenté will get in touch with you soon.
              </p>
            </div>
          )}

          {isFormOpen && !isSubmitted && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-[#F9F9F9] p-8 md:p-16 border border-[#001F3F]/5">

              <div className="flex justify-between items-center mb-12 border-b border-[#001F3F]/10 pb-6">
                <div>
                  <span className="text-[10px] tracking-widest text-[#001F3F]/40 uppercase">Phase {step} of 5</span>
                  <h2 className="text-[#001F3F] text-xl tracking-[0.2em] uppercase font-light mt-1">
                    {stepLabels[step - 1]}
                  </h2>
                </div>
                <button onClick={closeForm} className="text-[10px] tracking-widest text-[#001F3F]/40 uppercase hover:text-[#001F3F] transition-colors">
                  Close ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="min-h-[400px] flex flex-col justify-between">

                {/* Step 1 — Identity */}
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                    <input value={data.First_Name} onChange={(e) => field("First_Name", e.target.value)} type="text" placeholder="FIRST NAME" required className={inp} />
                    <input value={data.Last_Name} onChange={(e) => field("Last_Name", e.target.value)} type="text" placeholder="LAST NAME" required className={inp} />
                    <input value={data.email} onChange={(e) => field("email", e.target.value)} type="email" placeholder="EMAIL" required className={`${inp} md:col-span-2`} />
                    <input value={data.Age} onChange={(e) => field("Age", e.target.value)} type="number" placeholder="AGE" required className={inp} />
                    <input value={data.Country} onChange={(e) => field("Country", e.target.value)} type="text" placeholder="COUNTRY" required className={inp} />
                    <input value={data.Height_CM} onChange={(e) => field("Height_CM", e.target.value)} type="text" placeholder="HEIGHT (CM)" required className={inp} />
                    <select value={data.Gender} onChange={(e) => field("Gender", e.target.value)} required className={`${inp} appearance-none`}>
                      <option value="" disabled>SEX</option>
                      <option value="Female">FEMALE</option>
                      <option value="Male">MALE</option>
                      <option value="Non-Binary">NON-BINARY</option>
                    </select>
                  </div>
                )}

                {/* Step 2 — Measurements */}
                {step === 2 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
                    <input value={data.Bust_CM} onChange={(e) => field("Bust_CM", e.target.value)} type="text" placeholder="BUST (CM)" className={inp} />
                    <input value={data.Waist_CM} onChange={(e) => field("Waist_CM", e.target.value)} type="text" placeholder="WAIST (CM)" className={inp} />
                    <input value={data.Hips_CM} onChange={(e) => field("Hips_CM", e.target.value)} type="text" placeholder="HIPS (CM)" className={inp} />
                    <input value={data.Shoes} onChange={(e) => field("Shoes", e.target.value)} type="text" placeholder="SHOE SIZE" className={inp} />
                    <input value={data.Eyes} onChange={(e) => field("Eyes", e.target.value)} type="text" placeholder="EYES" className={inp} />
                    <input value={data.Hair} onChange={(e) => field("Hair", e.target.value)} type="text" placeholder="HAIR" className={inp} />
                  </div>
                )}

                {/* Step 3 — Polaroids */}
                {step === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                    {photoLabels.map((label) => (
                      <div key={label} className="relative bg-white p-10 border border-[#001F3F]/10 text-center flex flex-col items-center justify-center min-h-[160px]">
                        <p className="text-[10px] tracking-[0.2em] text-[#001F3F]/60 uppercase mb-3">
                          {label.replace("_", " ")}
                        </p>
                        {photos[label] ? (
                          <div className="flex flex-col items-center gap-2">
                            <img src={URL.createObjectURL(photos[label]!)} className="h-16 w-16 object-cover" alt={label} />
                            <p className="text-[9px] tracking-widest text-[#001F3F]/50 uppercase truncate max-w-[120px]">{photos[label]!.name}</p>
                            <button type="button" onClick={() => setPhotos((p) => ({ ...p, [label]: null }))} className="text-[9px] tracking-widest text-[#001F3F]/30 uppercase hover:text-[#001F3F] transition-colors">
                              Remove
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <span className="text-[10px] tracking-widest text-[#001F3F]/40 uppercase border border-[#001F3F]/20 px-4 py-2 hover:border-[#001F3F] transition-colors">
                              Choose File
                            </span>
                            <input
                              type="file" accept="image/*" className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0] ?? null;
                                setPhotos((p) => ({ ...p, [label]: file }));
                              }}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 4 — Management */}
                {step === 4 && (
                  <div className="space-y-12 animate-in fade-in duration-500">
                    <div className="space-y-4">
                      <p className="text-[10px] tracking-widest text-[#001F3F]/60 uppercase">Management Interest</p>
                      <div className="flex gap-8">
                        {["Model", "Talent"].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer text-[10px] tracking-widest text-[#001F3F]">
                            <input type="radio" name="Interest" value={type} checked={data.Interest === type} onChange={() => field("Interest", type)} required />
                            {type.toUpperCase()}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5 — Agreement */}
                {step === 5 && (
                  <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl">
                    <div className="flex gap-6 items-start">
                      <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1.5 w-5 h-5 accent-[#001F3F]" />
                      <p className="text-base md:text-lg text-[#001F3F] font-light">
                        I authorize Valenté Paris to process my data for scouting.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4 mt-12 pt-8 border-t border-[#001F3F]/10">
                  {step > 1 && !isSubmitting && (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="flex-1 bg-[#E5E5E5] text-[#001F3F] py-5 text-[10px] tracking-[0.3em] uppercase transition-colors">
                      Back
                    </button>
                  )}
                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      className={`flex-1 py-5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${
                        stepComplete ? "bg-[#001F3F] text-white" : "bg-[#E5E5E5] text-[#001F3F]"
                      }`}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !consent}
                      className="flex-1 bg-[#001F3F] text-white py-5 text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 disabled:opacity-40 transition-opacity"
                    >
                      {isSubmitting ? "Processing..." : "Submit to Valenté"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
