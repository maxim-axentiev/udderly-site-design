import { useRef } from "react";

/** Lightweight touch-swipe handlers shared by the experience carousels. */
export function useSwipe(onPrev: () => void, onNext: () => void) {
  const startX = useRef<number | null>(null);

  return {
    onTouchStart: (event: React.TouchEvent) => {
      startX.current = event.touches[0]?.clientX ?? null;
    },
    onTouchEnd: (event: React.TouchEvent) => {
      const start = startX.current;
      const end = event.changedTouches[0]?.clientX;
      startX.current = null;
      if (start == null || end == null) return;
      const delta = end - start;
      if (Math.abs(delta) < 45) return;
      if (delta < 0) onNext();
      else onPrev();
    },
  };
}
