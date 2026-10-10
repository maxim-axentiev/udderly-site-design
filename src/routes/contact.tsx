import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Contact — Udderly Ridiculous Farm Life";
const DESC = "Email, phone, seasonal hours and address for Udderly Ridiculous Farm Life, plus a quick contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const field = "mt-2 w-full border-2 border-headline bg-background px-4 py-3 text-base focus:outline-none focus:ring-4 focus:ring-ring";

function Hours({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="mt-8">
      <h3 className="font-display text-xl font-black uppercase text-headline">{title}</h3>
      <dl className="mt-2 space-y-1">
        {rows.map(([d, h]) => (
          <div key={d} className="flex flex-wrap gap-x-2"><dt className="font-semibold">{d}:</dt><dd>{h}</dd></div>
        ))}
      </dl>
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-farm-beige py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.82] text-headline">Say <span className="text-primary-accent">hello</span></h1>
              <p className="mt-6 font-display text-2xl font-black uppercase text-headline">Udderly Ridiculous Farm Life</p>
              <ul className="mt-4 space-y-3 text-lg">
                <li className="flex items-center gap-3"><Mail className="text-primary-accent" aria-hidden="true" /> <span><strong>Email:</strong> <a className="underline" href="mailto:info@udderlyridiculousfarmlife.com">info@udderlyridiculousfarmlife.com</a></span></li>
                <li className="flex items-center gap-3"><Phone className="text-primary-accent" aria-hidden="true" /> <span><strong>Phone:</strong> <a className="underline" href="tel:15482251005">1-548-225-1005</a></span></li>
              </ul>
              <Hours title="Winter Hours (November to April)" rows={[["Monday – Thursday", "By appointment only"], ["Friday – Sunday", "10:00 AM – 5:00 PM"]]} />
              <Hours title="Spring Hours (May to October)" rows={[["Monday – Tuesday", "By appointment only"], ["Wednesday – Sunday", "10:00 AM – 5:00 PM"]]} />
              <p className="mt-8 flex items-start gap-3 text-lg"><MapPin className="mt-1 shrink-0 text-primary-accent" aria-hidden="true" /> 906200 Township Rd 12, Bright, ON N0J 1B0</p>
            </div>
            <form onSubmit={submit} className="self-start border-4 border-headline bg-background p-7 shadow-[12px_12px_0_var(--headline)] md:p-10">
              <h2 className="font-display text-4xl font-black uppercase text-headline">Send us a message</h2>
              <label className="mt-6 block font-semibold">Name<input required name="name" className={field} /></label>
              <label className="mt-5 block font-semibold">Email<input required type="email" name="email" className={field} /></label>
              <label className="mt-5 block font-semibold">Message<textarea required name="message" rows={6} className={field} /></label>
              <Button type="submit" size="large" className="mt-7 w-full">Send Message</Button>
              {sent && <p className="mt-4 font-semibold text-headline" role="status">Thanks! This is a demo form, so nothing was sent yet.</p>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
