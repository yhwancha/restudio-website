import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { target: 0, suffix: value, decimals: 0 };
  }

  const numeric = match[1];
  return {
    target: Number(numeric),
    suffix: match[2] ?? "",
    decimals: numeric.includes(".") ? numeric.split(".")[1].length : 0,
  };
}

function AnimatedValue({ value }: { value: string }) {
  const { target, suffix, decimals } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasPlayed) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(target);
      setHasPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        setHasPlayed(true);

        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(target * eased);
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(target);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasPlayed, target]);

  useEffect(() => {
    setDisplay(0);
    setHasPlayed(false);
  }, [value]);

  return (
    <p className="data__value" ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </p>
  );
}

export function Data() {
  const { t } = useI18n();

  return (
    <section className="data" id="data" aria-labelledby="data-heading">
      <div className="container data__inner">
        <header className="data__header">
          <h2 id="data-heading">{t.dataHeading}</h2>
          <p>{t.dataSub}</p>
        </header>

        <ul className="data__grid">
          {t.dataStats.map((stat) => (
            <li key={stat.label} className="data__item">
              <AnimatedValue value={stat.value} />
              <p className="data__label">{stat.label}</p>
              <p className="data__desc">{stat.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
