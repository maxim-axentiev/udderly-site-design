import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logoAsset from "@/assets/farm-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const explore = [
  { label: "All Experiences", to: "/experiences" },
  { label: "Tower of Goats Discovery Trail", to: "/tower-of-goats-discovery-trail" },
  { label: "Farm Glamping", to: "/experiences/farm-glamping" },
  { label: "Farm Market Store", to: "/farm-market-store" },
  { label: "Goat Milk Ice Cream", to: "/ice-cream" },
  { label: "Gift Cards", to: "/gift-card" },
] as const;
const more = [
  { label: "Animals for Sale", to: "/animals-for-sale" },
  { label: "Adopt an Animal", to: "/adopt-an-animal" },
  { label: "Corporate Training", to: "/corporate-training" },
  { label: "Our Story", to: "/our-story" },
  { label: "Meet the Team", to: "/team" },
  { label: "URBORT Blog", to: "/urbort-blog" },
] as const;
const connected = [
  { label: "Newsletter", to: "/newsletter" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/faq" },
] as const;
const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookies Policy", to: "/cookies-policy" },
] as const;
const linkClass = "rounded-sm text-sm leading-relaxed text-footer-foreground/85 transition-colors hover:text-farm-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-farm-blue";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Udderly Ridiculous Farm Life home" className="block max-w-72 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-farm-blue">
              <img src={logoAsset.url} alt="Udderly Ridiculous Farm Life" width={1580} height={620} loading="lazy" className="h-auto w-full" />
            </Link>
            <p className="mt-6 max-w-72 font-display text-3xl font-bold uppercase leading-tight">Come Do Something Udderly Ridiculous</p>
            <Button asChild className="mt-5"><Link to="/experiences">Book an Experience <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          {[
            { title: "Explore", links: explore },
            { title: "More Udderly Ridiculous", links: more },
            { title: "Stay Connected", links: connected },
          ].map((column) => (
            <div key={column.title}>
              <h2 className="font-display text-xl font-bold uppercase text-farm-blue">{column.title}</h2>
              <nav aria-label={`${column.title} footer navigation`} className="mt-4">
                <ul className="space-y-3">{column.links.map((item) => <li key={item.to}><Link to={item.to} className={linkClass}>{item.label}</Link></li>)}</ul>
              </nav>
              {column.title === "Stay Connected" && <div className="mt-6 space-y-2 text-sm leading-relaxed"><p>Bright, Ontario, Canada</p><a href="mailto:info@udderlyridiculousfarmlife.com" className={`${linkClass} block break-words`}>info@udderlyridiculousfarmlife.com</a></div>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-footer-foreground/20 pt-5 lg:flex-row lg:items-center">
          <p className="text-xs text-footer-foreground/75">© {new Date().getFullYear()} Udderly Ridiculous Farm. All rights reserved.</p>
          <nav aria-label="Legal policies"><ul className="flex flex-wrap gap-x-6 gap-y-3">{legal.map((item) => <li key={item.to}><Link to={item.to} className={linkClass}>{item.label}</Link></li>)}</ul></nav>
        </div>
      </div>
    </footer>
  );
}