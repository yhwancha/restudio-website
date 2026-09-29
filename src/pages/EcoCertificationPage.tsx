const companyCertificates = [
  {
    title: "벤처 기업 인증 (혁신성장유형)",
    image: "/assets/certifications/venture-company.png",
  },
  {
    title: "산업디자인 전문회사 인증",
    image: "/assets/certifications/industrial-design-company.png",
  },
  {
    title: "기업부설 연구소 인증",
    image: "/assets/certifications/corporate-research-institute.png",
  },
  {
    title: "중소기업 확인",
    image: "/assets/certifications/small-business.png",
  },
  {
    title: "FSC 인증기업",
    image: "/assets/certifications/fsc.png",
  },
  {
    title: "ISO 9001 인증기업",
    image: "/assets/certifications/iso-9001.png",
  },
  {
    title: "ISO 14001 인증기업",
    image: "/assets/certifications/iso-14001.png",
  },
] as const;

const globalCertificates = [
  {
    title: "GRS 인증",
    description:
      "재생 원료 함량과 생산 유통 과정을 추적하여 투명성을 보장하는 글로벌 재활용 표준",
    image: "/assets/certifications/grs.png",
    imageClassName: "eco-certification-grid__image--grs",
  },
  {
    title: "OK biobased 인증",
    description:
      "바이오 기반 원료 함량을 검증하여 재생 가능 자원의 사용 비율을 보장하는 글로벌 인증",
    image: "/assets/certifications/ok-biobased-no-new.png",
    imageClassName: "eco-certification-grid__image--ok-biobased",
  },
  {
    title: "SGS 인증",
    description:
      "국제 시험·검증 기관을 통해 유해물질, 물성, 규제 적합성 등을 객관적으로 검증하는 글로벌 품질 인증",
    image: "/assets/certifications/sgs.svg",
    imageClassName: "eco-certification-grid__image--sgs",
  },
] as const;

export function EcoCertificationPage() {
  return (
    <main className="eco-certification-page">
      <header className="eco-certification-hero">
        <h1>친환경 기술 인증</h1>
        <span>
          소재의 출처부터 생산, 품질, 환경경영까지 지속가능한 제품 개발에 필요한 기준을
          객관적으로 증명합니다.
        </span>
      </header>

      <section className="eco-certification-section" aria-labelledby="global-certification-title">
        <h2 id="global-certification-title">Global Certification</h2>
        <ul className="eco-certification-grid eco-certification-grid--global">
          {globalCertificates.map(({ title, description, image, imageClassName }) => (
            <li key={title}>
              <article>
                <h3>{title}</h3>
                <figure>
                  <img
                    className={imageClassName}
                    src={image}
                    alt={`${title} 로고`}
                    loading="eager"
                  />
                </figure>
                <p>{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="eco-certification-section eco-certification-section--company"
        aria-labelledby="company-certification-title"
      >
        <h2 id="company-certification-title">Certificates</h2>
        <ul className="eco-certification-grid">
          {companyCertificates.map(({ title, image }) => (
            <li key={title}>
              <article>
                <h3>{title}</h3>
                <figure>
                  <img src={image} alt={`${title} 로고`} loading="lazy" />
                </figure>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
