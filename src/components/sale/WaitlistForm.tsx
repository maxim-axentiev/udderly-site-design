import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const inputClass = "border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring";
const labelClass = "font-display text-sm font-black uppercase tracking-wide text-headline";
const options = ["Highland Cattle", "Miniature Goats", "Alpacas"];

export function WaitlistForm() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [error, setError] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!picked.length) return setError(true);
        setSent(true);
      }}
      className="mt-10 border-2 border-headline bg-background p-6 shadow-[12px_12px_0_var(--headline)] md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2"><span className={labelClass}>Name *</span><input required name="name" maxLength={100} autoComplete="name" className={inputClass} /></label>
        <label className="flex flex-col gap-2"><span className={labelClass}>Email *</span><input required type="email" name="email" maxLength={255} autoComplete="email" className={inputClass} /></label>
        <fieldset className="md:col-span-2">
          <legend className={labelClass}>Animals you want notifications for *</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {options.map((o) => {
              const on = picked.includes(o);
              return (
                <button
                  key={o}
                  type="button"
                  aria-pressed={on}
                  onClick={() => { setError(false); setPicked(on ? picked.filter((p) => p !== o) : [...picked, o]); }}
                  className={`border-2 border-headline px-5 py-3 font-display text-base font-black uppercase transition-transform active:scale-95 ${on ? "bg-primary-accent text-primary-foreground shadow-[4px_4px_0_var(--headline)]" : "bg-farm-beige text-headline hover:-translate-y-0.5"}`}
                >
                  {on ? "✓ " : ""}{o}
                </button>
              );
            })}
          </div>
          {error && <p className="mt-2 text-sm font-semibold text-destructive">Pick at least one animal.</p>}
        </fieldset>
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="large">Join Waitlist <ArrowRight aria-hidden="true" /></Button>
        <p aria-live="polite" className="font-accent text-lg italic text-primary-accent">{sent ? "You're on the list! (Demo form — nothing was sent yet.)" : ""}</p>
      </div>
    </form>
  );
}

export function WaitlistSection({ title, copy }: { title: string; copy: string }) {
  return (
    <section id="waitlist" className="scroll-mt-20 bg-farm-blue py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">{copy}</p>
        <WaitlistForm />
      </div>
    </section>
  );
}
