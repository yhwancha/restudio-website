import { useEffect, useId, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useI18n, type Lang } from "../i18n";

const options: { value: Lang; labelKey: "korean" | "english" }[] = [
  { value: "ko", labelKey: "korean" },
  { value: "en", labelKey: "english" },
];

export function LanguageButton() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        type="button"
        className="lang-switch__button"
        aria-label={t.language}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe size={20} strokeWidth={1.5} absoluteStrokeWidth aria-hidden="true" />
      </button>

      {open ? (
        <div className="lang-switch__menu" role="menu" id={menuId}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={lang === option.value}
              className={`lang-switch__option ${lang === option.value ? "is-active" : ""}`}
              onClick={() => {
                setLang(option.value);
                setOpen(false);
              }}
            >
              {t[option.labelKey]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
