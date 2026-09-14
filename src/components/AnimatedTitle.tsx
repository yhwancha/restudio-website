import { type CSSProperties, type ReactNode, useEffect } from "react";

type AnimatedTitleBreak = {
  type: "break";
};

type AnimatedTitleText = {
  text: string;
  wrapperClassName?: string;
  charClassName?: string;
  prefix?: ReactNode;
};

export type AnimatedTitlePart = string | AnimatedTitleBreak | AnimatedTitleText;

interface AnimatedTitleProps {
  parts: AnimatedTitlePart[] | string;
}

export function useTitleReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.24,
      },
    );

    const observeRevealTitles = (root: ParentNode = document) => {
      root.querySelectorAll(".title-reveal:not(.is-visible)").forEach((title) => {
        observer.observe(title);
      });
    };

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (node.matches(".title-reveal:not(.is-visible)")) {
            observer.observe(node);
          }

          observeRevealTitles(node);
        });
      });
    });

    observeRevealTitles();
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

export function AnimatedTitle({ parts }: AnimatedTitleProps) {
  let characterIndex = 0;
  const normalizedParts = Array.isArray(parts) ? parts : [parts];

  const renderText = (text: string, charClassName = "") =>
    text.split(/(\s+)/).map((word, wordIndex) => {
      if (/^\s+$/.test(word)) {
        return (
          <span className="title-reveal__space" key={`space-${wordIndex}`}>
            {word}
          </span>
        );
      }

      return (
        <span className="title-reveal__word" key={`word-${wordIndex}`}>
          {Array.from(word).map((character) => {
            const currentIndex = characterIndex;
            characterIndex += 1;

            return (
              <span
                className={`title-reveal__char ${charClassName}`.trim()}
                key={`${character}-${currentIndex}`}
                style={{ "--char-index": currentIndex } as CSSProperties}
              >
                {character}
              </span>
            );
          })}
        </span>
      );
    });

  return normalizedParts.map((part, partIndex) => {
    if (typeof part === "string") {
      return <span key={`text-${partIndex}`}>{renderText(part)}</span>;
    }

    if ("type" in part && part.type === "break") {
      return <br key={`break-${partIndex}`} />;
    }

    if ("text" in part) {
      return (
        <span className={part.wrapperClassName} key={`part-${partIndex}`}>
          {part.prefix}
          <span className={part.charClassName ? "relative z-10" : undefined}>
            {renderText(part.text, part.charClassName)}
          </span>
        </span>
      );
    }

    return null;
  });
}
