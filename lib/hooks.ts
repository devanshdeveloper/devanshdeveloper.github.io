import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const ref = useEffectRef((inView) => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, threshold);

  return {
    ref,
  };
}

function useEffectRef(callback: (inView: boolean) => void, threshold = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, threshold]);

  return ref;
}
