import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToCategories() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("categories");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!!entry && entry.boundingClientRect.top < 0 && !entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#categories"
      className="fixed bottom-5 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-headline bg-background px-4 py-2 font-display text-sm font-black uppercase text-headline shadow-[4px_4px_0_var(--primary-accent)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring md:bottom-8 md:right-8 md:text-base"
    >
      <ArrowUp size={18} aria-hidden="true" /> Back to categories
    </a>
  );
}
