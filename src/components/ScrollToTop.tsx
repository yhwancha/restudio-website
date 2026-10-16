import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}
