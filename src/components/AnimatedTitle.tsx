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

const AUTO_TITLE_SELECTOR = "main h1, main h2";

function isAutoRevealTitle(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (element.matches(".sr-only") || element.closest("aside, [role='dialog']")) return false;
  if (element.tagName === "H1") return true;

  const section = element.closest("section");
  const article = element.closest("article");

  if (article && (!section || !article.contains(section))) return false;
  if (element.closest("[class*='plan-head'], [class*='browser__panel']")) return false;

  return Boolean(section);
}

function wrapTitleText(title: HTMLElement) {
  title.classList.add("title-reveal");

  let characterIndex = title.querySelectorAll(".title-reveal__char").length;
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (
        !parent ||
        parent.closest(".title-reveal__char, .sr-only, svg, [aria-hidden='true']") ||
        !node.textContent?.trim()
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();

    textNode.data.split(/(\s+)/).forEach((word) => {
      if (!word) return;

      if (/^\s+$/.test(word)) {
        const space = document.createElement("span");
        space.className = "title-reveal__space";
        space.textContent = word;
        fragment.append(space);
        return;
      }

      const wordElement = document.createElement("span");
      wordElement.className = "title-reveal__word";

      Array.from(word).forEach((character) => {
        const characterElement = document.createElement("span");
        characterElement.className = "title-reveal__char";
        characterElement.style.setProperty("--char-index", String(characterIndex));
        characterElement.textContent = character;
        wordElement.append(characterElement);
        characterIndex += 1;
      });

      fragment.append(wordElement);
    });

    textNode.replaceWith(fragment);
  });
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

    const prepareTitle = (title: Element) => {
      if (!isAutoRevealTitle(title) && !title.classList.contains("title-reveal")) return;

      if (isAutoRevealTitle(title)) {
        wrapTitleText(title);
      }

      if (!title.classList.contains("is-visible")) {
        observer.observe(title);
      }
    };

    const prepareRevealTitles = (root: ParentNode = document) => {
      if (root instanceof Element && root.matches(`${AUTO_TITLE_SELECTOR}, .title-reveal`)) {
        prepareTitle(root);
      }

      root
        .querySelectorAll(`${AUTO_TITLE_SELECTOR}, .title-reveal`)
        .forEach(prepareTitle);
    };

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Text) {
            const title = node.parentElement?.closest(`${AUTO_TITLE_SELECTOR}, .title-reveal`);
            if (title) prepareTitle(title);
            return;
          }

          if (node instanceof Element) prepareRevealTitles(node);
        });
      });
    });

    prepareRevealTitles();
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

export function TitleRevealController() {
  useTitleReveal();
  return null;
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
