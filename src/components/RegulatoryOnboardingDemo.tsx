import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";

const base = "/assets/regulatory-original/";
const steps = [
  { title: "기업정보", screen: "identity", heading: "리포트의 시작은 기업정보예요.", description: "제조자와 담당자, EU 수입자·권한대리인 정보를 확인하세요. 이 정보는 기술문서와 적합성 선언서의 책임 주체로 연결됩니다.", action: "품목 정보 확인하기" },
  { title: "품목·포장", screen: "product-primary", heading: "진단할 품목과 포장 구성을 살펴보세요.", description: "가상 품목 Lumiere 크림 60g의 예시 정보입니다. 기본정보와 1차·3차 포장재를 확인하고, ‘자세히 보기’를 누르면 각 자재의 상세 정보가 열려요.", action: "포장자재 자세히 보기" },
  { title: "포장자재", screen: "component-full-58", heading: "작은 자재 하나까지 근거를 연결해요.", description: "상단에서 용기·뚜껑·단상자·봉인 스티커·운송 상자를 바꿔 보세요. 재질과 중량, 구조, 연결된 부자재와 첨부 문서를 체험용으로 간소화해 확인할 수 있어요.", action: "연결된 부자재 확인하기" },
  { title: "부자재", screen: "submaterial-ink-jar", heading: "인쇄잉크도 포장의 일부예요.", description: "용기와 상자에 사용한 가상의 인쇄잉크 정보입니다. 적용 위치, 사용량과 공급사, 비고까지 확인하세요. 상단 버튼으로 두 부자재를 오갈 수 있어요.", action: "증빙서류 확인하기" },
  { title: "증빙서류", screen: "evidence-spec", heading: "입력한 정보를 6개의 예시 자료로 뒷받침해요.", description: "8개 분류를 눌러 사양서·도면·시험성적서·공급사 선언서 등을 확인하세요. 문서명과 연결 상태를 확인하는 체험용 목록입니다.", action: "진단 전 확인하기" },
  { title: "진단 진행", screen: "diagnosis-run", heading: "정보와 증빙을 확인했다면, 진단으로 이어져요.", description: "실제 서비스에서는 유의사항을 확인한 뒤 AI 진단을 진행합니다. 체험에서는 버튼을 누르면 가상 품목의 예시 진단 결과를 바로 보여드려요.", action: "진단 결과 확인하기" },
  { title: "진단 결과", screen: "report-summary", heading: "판정만큼, 판정의 근거도 중요해요.", description: "가상 데이터로 구성한 간단 리포트 #1입니다. 주요 진단 항목과 보완 사항을 간략히 담았어요. 아래로 내려 각 항목의 판단 근거와 다음 조치를 확인하세요.", action: "TD 기술문서 확인하기" },
  { title: "TD 기술문서", screen: "report-td", heading: "진단과 증빙이 하나의 기술문서로 이어져요.", description: "TD-LM060-01 체험용 초안입니다. 원래 기술문서의 12개 장과 증빙 부록을 유지하고, 각 항목에 가상 데이터를 간략히 담았어요. 화면에서 각 장의 내용을 확인해 보세요.", action: "DoC 적합성 선언서 확인하기" },
  { title: "DoC 선언서", screen: "report-doc", heading: "마지막으로 선언서까지 확인하세요.", description: "원래 적합성 선언서 서식에 가상 기업·품목 정보를 담았습니다. 선언 주체, 적용 범위, 기술문서 참조와 서명란을 확인하세요. 화면에서 선언서 내용을 확인해 보세요.", action: "처음부터 다시 체험하기" },
];

export function RegulatoryOnboardingDemo() {
  const dialog = useRef<HTMLDialogElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState("identity");
  const [open, setOpen] = useState(false);
  const move = (index: number) => { const next = (index + steps.length) % steps.length; setActive(next); setScreen(steps[next].screen); };
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const listener = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow || event.data?.type !== "regulatory-tour") return;
      if (event.data.action === "next") move(active + 1);
      if (event.data.action === "previous") move(Math.max(0, active - 1));
      if (event.data.action === "screen") {
        const name = event.data.screen as string;
        const index = steps.findIndex(step => step.screen === name);
        if (index >= 0) setActive(index);
      }
    };
    window.addEventListener("message", listener);
    return () => { document.body.style.overflow = previous; window.removeEventListener("message", listener); };
  }, [open, active]);
  useEffect(() => {
    const current = navigation.current?.querySelector<HTMLElement>('[aria-current="step"]');
    if (current && navigation.current) navigation.current.scrollTop = Math.max(0, current.offsetTop - navigation.current.offsetTop - 40);
  }, [active, open]);
  const start = () => { move(0); setOpen(true); dialog.current?.showModal(); };
  const close = () => { dialog.current?.close(); setOpen(false); };
  const step = steps[active];
  return <div className="regulatory-experience">
    <div className="regulatory-experience__invitation"><p>기업정보부터 진단 리포트까지,<br className="mobile-break" /> 가상 데이터로 솔루션을 경험해 보세요.</p><button type="button" onClick={start}>규제마스터 솔루션 체험하기 <ArrowRight size={20} /></button></div>
    <div className="regulatory-experience__preview"><img src={`${base}company-preview.png`} alt="규제 마스터 솔루션 기업정보 입력 화면" loading="lazy" /></div>
    <dialog ref={dialog} className="regulatory-experience__modal" onCancel={() => setOpen(false)} onClick={event => { if (event.target === dialog.current) close(); }} aria-labelledby="regulatory-tour-title">
      {open && <div className="regulatory-experience__shell">
        <header className="regulatory-experience__header"><span>규제 마스터 솔루션 체험</span><button type="button" onClick={close} aria-label="체험 닫기"><X size={23} /></button></header>
        <div className="regulatory-experience__layout"><aside className="regulatory-experience__guide">
          <span className="regulatory-experience__count">{String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
          <h2 id="regulatory-tour-title">{step.heading}</h2><p>{step.description}</p>
          <nav ref={navigation} aria-label="체험 단계">{steps.map((item, index) => <button type="button" key={item.screen} aria-current={active === index ? "step" : undefined} onClick={() => move(index)}><span>{index + 1}</span>{item.title}</button>)}</nav>
          <div className="regulatory-experience__actions">{active > 0 && <button type="button" className="regulatory-experience__back" onClick={() => move(active - 1)}><ArrowLeft size={16} /> 이전</button>}<button type="button" className="regulatory-experience__next" onClick={() => move(active + 1)}>{step.action}<ArrowRight size={18} /></button></div>
        </aside><div className="regulatory-experience__workspace"><iframe key={screen} ref={frame} src={`${base}viewer.html?guided=1&screen=${screen}`} title={`${step.title} 체험 화면`} /></div></div>
      </div>}
    </dialog>
  </div>;
}
