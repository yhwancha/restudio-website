import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUp,
  CaretLeft,
  Paperclip,
  X,
} from "@phosphor-icons/react";

const initialMessage =
  "친환경 패키지 개발/디자인/양산 고민 중이신가요?\n\n궁금한 점을 남겨주시면 빠르게 안내해드리겠습니다.";
const agentImageSrc = "/assets/ai-agent-resa.png?v=2";

const getCurrentTimeLabel = () =>
  new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

export function AiChatFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const openedTimeLabel = useMemo(getCurrentTimeLabel, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    setMessages((currentMessages) => [...currentMessages, trimmedValue]);
    setInputValue("");
  };

  return (
    <div className="ai-chat-widget">
      {isOpen && (
        <section className="ai-chat-panel" aria-label="RESA AI Agent 채팅창">
          <header className="ai-chat-panel__header">
            <button
              type="button"
              className="ai-chat-panel__icon-button"
              aria-label="채팅창 접기"
              onClick={() => setIsOpen(false)}
            >
              <CaretLeft size={24} weight="bold" aria-hidden="true" />
            </button>
            <div>
              <strong>RESA</strong>
              <span>AI Agent</span>
            </div>
            <button
              type="button"
              className="ai-chat-panel__icon-button"
              aria-label="채팅창 닫기"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} weight="regular" aria-hidden="true" />
            </button>
          </header>

          <div className="ai-chat-panel__body">
            <div className="ai-chat-message-row">
              <img src={agentImageSrc} alt="RESA AI Agent" />
              <div className="ai-chat-message">
                {initialMessage.split("\n").map((line, index) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < initialMessage.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
              <time>{openedTimeLabel}</time>
            </div>

            {messages.map((message, index) => (
              <div className="ai-chat-message-row ai-chat-message-row--user" key={`${message}-${index}`}>
                <div className="ai-chat-message ai-chat-message--user">
                  {message}
                </div>
              </div>
            ))}
          </div>

          <form className="ai-chat-panel__composer" onSubmit={handleSubmit}>
            <div className="ai-chat-panel__input-row">
              <Paperclip size={22} weight="regular" aria-hidden="true" />
              <label className="sr-only" htmlFor="ai-chat-input">
                리스튜디오 AI Agent 리사와 채팅하기
              </label>
              <input
                id="ai-chat-input"
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="리스튜디오 AI Agent '리사'와 채팅하세요!"
              />
              <button type="submit" aria-label="채팅 메시지 보내기">
                <ArrowUp size={20} weight="bold" aria-hidden="true" />
              </button>
            </div>
            <p>대화를 진행하면 개인정보처리방침에 동의하신 것으로 이해됩니다</p>
          </form>
        </section>
      )}

      <button
        type="button"
        className="ai-chat-floating-button"
        aria-label="RESA AI Agent 채팅 열기"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <img src={agentImageSrc} alt="" />
      </button>
    </div>
  );
}
