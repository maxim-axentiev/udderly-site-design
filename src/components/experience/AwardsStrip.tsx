import tripadvisor2023 from "@/assets/tripadvisor-2023.png.asset.json";
import tripadvisor2024 from "@/assets/tripadvisor-2024.png.asset.json";
import tripadvisor2025 from "@/assets/tripadvisor-2025.png.asset.json";
import tripadvisor2026 from "@/assets/tripadvisor-2026.png.asset.json";

const awards = [
  { year: "2023", badge: tripadvisor2023.url },
  { year: "2024", badge: tripadvisor2024.url },
  { year: "2025", badge: tripadvisor2025.url },
  { year: "2026", badge: tripadvisor2026.url },
];

export function AwardsStrip({ tagline }: { tagline: string }) {
  return (
    <section aria-label="TripAdvisor awards" className="border-y-2 border-headline bg-farm-beige py-6">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-5 px-5 md:flex-row md:justify-between md:px-8">
        <div className="text-center md:max-w-[24rem] md:text-left">
          <p className="font-display text-lg font-black uppercase leading-tight text-headline">
            TripAdvisor Travellers&apos; Choice
          </p>
          <p className="mt-1 text-sm font-semibold">{tagline}</p>
        </div>

        <ul className="grid w-full max-w-72 grid-cols-2 place-items-center gap-5 md:flex md:w-auto md:max-w-none md:gap-7">
          {awards.map((award, index) => (
            <li
              key={award.year}
              tabIndex={0}
              className={`cursor-pointer rounded-full outline-none transition-transform duration-500 focus-visible:ring-4 focus-visible:ring-ring motion-safe:hover:scale-110 motion-safe:hover:rotate-6 motion-safe:active:scale-95 motion-safe:active:-rotate-6 ${index % 2 === 0 ? "-rotate-3" : "rotate-3"}`}
            >
              <img src={award.badge} alt={`TripAdvisor Travellers' Choice Award ${award.year}`} width={1080} height={1080} loading="lazy" className="size-28 rounded-full border-2 border-headline object-cover shadow-[3px_3px_0_var(--headline)] md:size-24" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
