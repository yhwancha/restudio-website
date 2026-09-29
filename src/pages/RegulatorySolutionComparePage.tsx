import {
  ArrowBendUpLeft,
  ChartLineUp,
  CheckCircle,
  Clock,
  Cube,
  FileText,
  GearSix,
  Globe,
  Leaf,
  Lightbulb,
  LinkSimple,
  ListChecks,
  MinusCircle,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";
import { Link, Navigate, useParams } from "react-router-dom";
import type { Icon } from "@phosphor-icons/react";

type CompareType = "consulting" | "supplier" | "certification";

type CompareRow = {
  label: string;
  Icon: Icon;
  restudio: string;
  competitor: string;
};

type ComparePageContent = {
  tabLabel: string;
  competitorLabel: string;
  intro: string;
  rows: CompareRow[];
  keyDifference: string;
  questionTitle: string;
  questions: string[];
};

const sharedRestudioRows = {
  expertise: "글로벌 친환경 규제 중심 전문 대응\nPPWR · MoCRA · CPNP 등 실무 경험 기반",
  scope:
    "진단 → 개선 항목 정의 → 시험/평가 정리 → TD · DoC 작성/발급 → 제출 대응 → 후속 관리까지 원스톱",
  understanding:
    "제품 · 패키지 · 소재 · BOM · 시험성적서까지 연결 이해\n개발 단계부터 규제 대응 연동",
  material: "포장 구성, 소재, 재활용성, 라벨링, 재생원료 등 핵심 항목 점검",
  document: "TD · DoC 등 핵심 제출 서류를 실제 제출 가능한 형태로 작성 · 발급 지원",
  test: "시험 필요 항목 정의 / 증빙 패키지 구성 / 제출 흐름 연결",
  automation: "규제 특화 AI Agent가 정보 등록, 초안 작성, 반복 후속 업무를 자동화",
  expert: "AI 1차 진단 + 전문가 2차 정밀 검토\n이중 검증 체계",
  market: "업종별, 브랜드별, 수출 국가별 요건에 맞춘 맞춤 설계",
  leadtime: "원스톱 흐름과 자동화로 대응 기간 단축\n평균 대비 리드타임 1/2 수준",
  cost: "하나의 프로젝트로 통합 관리\n중복 커뮤니케이션 · 재작업 비용 절감",
  followup: "규제 변경 모니터링, 문서 수정, 추가 대응까지 지속 관리",
  scale: "한 번 축적한 데이터와 서류를 기반으로 EU에서 미국 · 타 국가까지 확장 가능",
} as const;

const compareRowsBase = [
  { key: "expertise", label: "규제 전문성", Icon: ListChecks },
  { key: "scope", label: "서비스 제공 범위", Icon: Leaf },
  { key: "understanding", label: "제품 · 패키지 이해도", Icon: Cube },
  { key: "material", label: "필수 소재 · 구성 요건 분석", Icon: Leaf },
  { key: "document", label: "문서 작성 · 발급", Icon: FileText },
  { key: "test", label: "시험 · 증빙 연결", Icon: Lightbulb },
  { key: "automation", label: "AI 자동화 활용", Icon: GearSix },
  { key: "expert", label: "전문가 검증 구조", Icon: Users },
  { key: "market", label: "업종 · 국가별 맞춤성", Icon: Globe },
  { key: "leadtime", label: "준비 기간", Icon: Clock },
  { key: "cost", label: "비용 효율", Icon: LinkSimple },
  { key: "followup", label: "후속 관리", Icon: ArrowBendUpLeft },
  { key: "scale", label: "지속 · 확장성", Icon: ChartLineUp },
] as const;

const comparePages: Record<CompareType, ComparePageContent> = {
  consulting: {
    tabLabel: "일반 컨설팅사",
    competitorLabel: "일반 컨설팅사",
    intro:
      "리스튜디오는 친환경 규제 대응을 위한 데이터 기반의 규제 마스터 솔루션으로, 복잡한 규제를 더 빠르고, 더 정확하고, 더 실질적으로 해결합니다.",
    keyDifference:
      "일반 컨설팅이 ‘무엇을 해야 하는지’ 알려주는 데 머문다면, 리스튜디오는 ‘어떻게 준비하고 실제로 제출할지’까지 연결합니다.",
    questionTitle: "요즘 일반 컨설팅사의 영업이 많아도,\n꼭 확인해야 할 질문",
    questions: [
      "실제 제출 가능한 서류까지 만들어주나요?",
      "제품·패키지 구조와 소재까지 완벽히 이해하나요?",
      "프로젝트 종료 후 규제가 바뀌면 누가 관리해주나요?",
      "한 번 만든 데이터를 다음 국가 대응에도 쓸 수 있나요?",
    ],
    rows: compareRowsBase
      .filter(({ key }) => key !== "test")
      .map(({ key, label, Icon }) => ({
        label,
        Icon,
        restudio: sharedRestudioRows[key],
        competitor:
          {
            expertise: "경영 · 사업 · ESG 전반 컨설팅 중심\n규제 실무 깊이는 제한적",
            scope: "현황 진단 · 가이드 제시 중심\n후속 실행은 별도 연계가 필요한 경우 많음",
            understanding: "문서 검토 중심\n실제 제품 · 패키지 구조 이해는 제한적",
            material: "법규 조항 설명 중심\n세부 체크리스트는 제한적일 수 있음",
            document: "문서 가이드 또는 초안 수준에 머물며\n실제 발급은 추가 대응 필요",
            test: "",
            automation: "범용 자료 조사 또는 수작업 중심\n자동화 범위 제한적",
            expert: "컨설턴트 개인 역량 중심\n검증 프로세스가 표준화되지 않은 경우 있음",
            market: "범용 프레임 중심\n맞춤형 수준은 프로젝트별 상이",
            leadtime: "여러 기관 · 실무자 조율이 필요해 일정이 길어질 수 있음",
            cost: "컨설팅 이후 시험 · 문서 · 제출 단계에서 추가 비용 발생 가능",
            followup: "프로젝트 종료 후 별도 계약 또는 개별 문의 대응 중심",
            scale: "건별 대응 중심\n데이터 자산화와 다국가 확장은 제한적",
          }[key] ?? "",
      })),
  },
  supplier: {
    tabLabel: "패키징 공급사",
    competitorLabel: "패키징 공급사",
    intro:
      "패키징 공급사는 소재와 생산 관점의 강점이 있지만, 실제 수출을 위해 필요한 것은 규제 해석부터 제출 서류, 후속 관리까지 연결되는 대응 시스템입니다. 리스튜디오는 친환경 규제 대응을 더 빠르고, 더 정확하고, 더 실행 가능하게 만듭니다.",
    keyDifference:
      "패키징 공급사가 ‘무엇을 만들 수 있는지’에 강점이 있다면, 리스튜디오는 ‘무엇을 준비하고 실제로 어떻게 제출할지’까지 연결합니다.",
    questionTitle: "패키징 공급사와 상담 중이라면,\n꼭 확인해야 할 질문",
    questions: [
      "실제 제출 가능한 서류까지 만들어주나요?",
      "제품·패키지 구조와 소재까지 규제 기준으로 이해하고 있나요?",
      "납품 이후 규제가 바뀌면 누가 관리해주나요?",
      "한 번 만든 데이터를 다음 국가 대응에도 활용할 수 있나요?",
    ],
    rows: compareRowsBase.map(({ key, label, Icon }) => ({
      label,
      Icon,
      restudio: sharedRestudioRows[key],
      competitor:
        {
          expertise: "패키지 생산 · 소재 중심\n규제 깊이는 제한적일 수 있음",
          scope: "소재 제안 · 패키지 생산 중심\n규제 대응은 일부 안내 수준인 경우 많음",
          understanding: "자사 공급 패키지 범위 이해 중심\n제품 전체 관점은 제한적일 수 있음",
          material: "자사 소재 속성 중심 설명\n규제 기준별 분석은 제한적일 수 있음",
          document: "기초 자료 제공은 가능하나\n완성형 규제 문서 발급은 제한적일 수 있음",
          test: "소재 시험자료 일부 제공 중심\n전체 증빙 체계 연결은 약할 수 있음",
          automation: "자동화 시스템 없이 수작업 대응이 많은 편",
          expert: "생산 · 영업 담당자 대응 중심\n검증 프로세스가 표준화되지 않을 수 있음",
          market: "공급 가능한 포장재 기준 중심\n국가별 규제 맞춤성은 제한적일 수 있음",
          leadtime: "산업 문서 · 시험 · 제출은 별도 조율이 필요해 일정이 길어질 수 있음",
          cost: "생산 외 별도 규제 대응 업체 추가 시 총비용이 커질 수 있음",
          followup: "납품 이후 규제 후속 관리 범위는 제한적일 수 있음",
          scale: "개별 제품 · 납품 단위 대응 중심\n데이터 자산화와 다국가 확장은 제한적",
        }[key],
    })),
  },
  certification: {
    tabLabel: "일반 기술 / 인증사",
    competitorLabel: "일반 기술·인증사",
    intro:
      "기술·인증사는 시험·인증 중심의 강점이 있지만, 실제 수출을 위해 필요한 것은 규제 해석부터 제출 서류, 제출 대응, 후속 관리까지 연결되는 대응 시스템입니다. 리스튜디오는 친환경 규제 대응을 더 빠르고, 더 정확하고, 더 실행 가능하게 만듭니다.",
    keyDifference:
      "일반 기술·인증사가 시험과 인증을 통과하는 것에 강점이 있다면, 리스튜디오는 ‘무엇을 준비하고 실제로 어떻게 제출해야 이후까지 어떻게 관리할지’까지 연결합니다.",
    questionTitle: "기술·인증사와 상담 중이라면,\n꼭 확인해야 할 질문",
    questions: [
      "실제 제출 가능한 서류까지 만들어주나요?",
      "제품·패키지 구조와 소재까지 규제 기준으로 이해하고 있나요?",
      "인증 이후 규제가 바뀌면 누가 관리해주나요?",
      "한 번 만든 데이터로 다음 국가 대응에도 활용할 수 있나요?",
    ],
    rows: compareRowsBase.map(({ key, label, Icon }) => ({
      label,
      Icon,
      restudio: sharedRestudioRows[key],
      competitor:
        {
          expertise: "시험·인증 적합성 판단 중심\n규제 전략 설계 범위는 제한적일 수 있음",
          scope: "시험·인증 또는 기술 검토 중심\n제출·사후 관리까지는 별도 대응이 필요한 경우 많음",
          understanding: "시험 항목·인증 기준 중심\n제품 전체 사업 흐름 이해는 제한적일 수 있음",
          material: "시험 가능한 항목 중심 검토\n포장 구조·재활용성·라벨링 종합 분석은 제한적일 수 있음",
          document: "문서 작성은 일부 범위 또는 고객 준비 전제\n실제 제출용 패키지 구성은 추가 대응 필요 가능",
          test: "시험기관 연계는 가능하나 전체 증빙 체계·제출 흐름까지 연결은 제한적일 수 있음",
          automation: "자동화 시스템 없이 수작업 대응이 많은 편",
          expert: "개별 기술 검토 중심\n검증 프로세스가 표준화되지 않을 수 있음",
          market: "인증 항목 중심 대응\n업종·브랜드·국가별 맥락 반영은 제한적일 수 있음",
          leadtime: "시험 일정·재시험 발생 시 기간이 길어질 수 있음",
          cost: "인증·시험·컨설팅이 별도 진행되어 총비용이 커질 수 있음",
          followup: "인증 완료 후 후속 규제 관리 범위는 제한적일 수 있음",
          scale: "국가별·프로젝트별 개별 대응 중심\n데이터 자산화와 다국가 확장은 제한적",
        }[key],
    })),
  },
};

const compareBenefits = [
  {
    number: "01",
    title: "실행까지 이어지는 원스톱 대응",
    description: "진단부터 제출 · 사후 관리까지 끊김 없는 원 흐름을 제공합니다.",
    Icon: XCircleFallback,
  },
  {
    number: "02",
    title: "더 빠른 준비",
    description: "AI 자동화와 전문가 검증으로 대응 속도를 높입니다.",
    Icon: LightningFallback,
  },
  {
    number: "03",
    title: "중복 비용 철저한 절감",
    description: "재작업과 외부 커뮤니케이션 비용을 최소화합니다.",
    Icon: LinkSimple,
  },
  {
    number: "04",
    title: "확장 가능한 인프라",
    description: "데이터 자산화를 기반으로 다음 국가 대응도 더 쉬워집니다.",
    Icon: ChartLineUp,
  },
] as const;

function XCircleFallback({ size = 22 }: { size?: number }) {
  return <MinusCircle size={size} weight="bold" />;
}

function LightningFallback({ size = 22 }: { size?: number }) {
  return <GearSix size={size} weight="bold" />;
}

const compareTypeOrder: CompareType[] = ["consulting", "supplier", "certification"];

export function RegulatorySolutionComparePage() {
  const { compareType } = useParams<{ compareType: CompareType }>();

  if (!compareType || !comparePages[compareType]) {
    return <Navigate to="/services/regulatory-response/compare/consulting" replace />;
  }

  const content = comparePages[compareType];

  return (
    <main className="regulatory-compare-page">
      <section className="regulatory-compare-hero" aria-labelledby="regulatory-compare-title">
        <div className="regulatory-compare-hero__head">
          <div>
            <h1 id="regulatory-compare-title">타 솔루션 비교</h1>
            <nav className="regulatory-compare-tabs" aria-label="타 솔루션 비교 탭">
              {compareTypeOrder.map((type) => (
                <Link
                  className={type === compareType ? "is-active" : ""}
                  key={type}
                  to={`/services/regulatory-response/compare/${type}`}
                >
                  {comparePages[type].tabLabel}
                </Link>
              ))}
            </nav>
          </div>
          <p>{content.intro}</p>
        </div>

        <div className="regulatory-compare-table-wrap">
          <div className="regulatory-compare-table" role="table" aria-label="타 솔루션 비교표">
            <div className="regulatory-compare-table__row is-head" role="row">
              <div role="columnheader">비교 항목</div>
              <div role="columnheader">
                <ShieldCheck size={22} weight="regular" />
                리스튜디오 규제 마스터 솔루션
              </div>
              <div role="columnheader">
                <Cube size={22} weight="regular" />
                {content.competitorLabel}
              </div>
            </div>

            {content.rows.map(({ label, Icon, restudio, competitor }) => (
              <div className="regulatory-compare-table__row" key={label} role="row">
                <div className="regulatory-compare-table__label" role="cell">
                  <Icon size={23} weight="regular" />
                  {label}
                </div>
                <div className="regulatory-compare-table__restudio" role="cell">
                  <CheckCircle size={23} weight="fill" />
                  <span>{restudio}</span>
                </div>
                <div className="regulatory-compare-table__competitor" role="cell">
                  <MinusCircle size={23} weight="fill" />
                  <span>{competitor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="regulatory-compare-key">
          <span>
            <Lightbulb size={18} weight="regular" />
            핵심 차이
          </span>
          <p>{content.keyDifference}</p>
        </div>
      </section>

      <section
        className="regulatory-compare-advantage"
        aria-labelledby="regulatory-compare-advantage-title"
      >
        <h2 id="regulatory-compare-advantage-title">그래서 리스튜디오가 더 유리합니다</h2>
        <div className="regulatory-compare-benefits">
          {compareBenefits.map(({ number, title, description, Icon }) => (
            <article key={number}>
              <div>
                <span>{number}</span>
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="regulatory-compare-questions" aria-label="확인 질문">
        <h2>{content.questionTitle}</h2>
        <div>
          {content.questions.map((question) => (
            <p key={question}>{question}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
