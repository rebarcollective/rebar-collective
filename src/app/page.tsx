"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".reveal");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Header ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-[var(--font-heading)] text-lg md:text-xl tracking-tight"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          Rebar
          <span
            className="ml-1"
            style={{ color: "var(--color-muted)", fontWeight: 300 }}
          >
            Collective
          </span>
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="hidden md:inline-block text-sm tracking-wide hover:text-[var(--color-accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--color-fg)",
              color: "var(--color-bg)",
              fontWeight: 500,
            }}
          >
            문의하기
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-fg) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent line */}
      <div
        className="absolute top-0 left-0 h-1 animate-fade-in delay-700"
        style={{
          backgroundColor: "var(--color-accent)",
          animation: "lineExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards",
          width: 0,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-32 w-full">
        <div className="max-w-[800px]">
          {/* Label */}
          <div
            className="animate-fade-up delay-100 flex items-center gap-3 mb-8"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-muted)",
                fontWeight: 500,
              }}
            >
              Business Growth Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-200 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            성장을 위한
            <br />
            <span style={{ color: "var(--color-accent)" }}>구조</span>를
            <br className="md:hidden" /> 설계합니다
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up delay-300 text-lg md:text-xl leading-relaxed max-w-[520px] mb-12"
            style={{ color: "var(--color-muted)" }}
          >
            이커머스 마케팅 실행과 체계적인 세일즈 오퍼레이션.
            <br className="hidden md:block" />
            데이터 기반의 전략으로 비즈니스의 다음 단계를 함께 만듭니다.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: "var(--color-accent)",
                color: "white",
                fontWeight: 500,
              }}
            >
              프로젝트 문의
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-[var(--color-surface)]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-muted)",
                fontWeight: 400,
              }}
            >
              더 알아보기
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
          <div className="animate-fade-in delay-600 relative w-[280px] h-[280px]">
            <div
              className="absolute inset-0 rounded-full opacity-10"
              style={{
                border: "1px solid var(--color-accent)",
              }}
            />
            <div
              className="absolute inset-8 rounded-full opacity-20"
              style={{
                border: "1px solid var(--color-accent)",
              }}
            />
            <div
              className="absolute inset-16 rounded-full opacity-30"
              style={{
                border: "1px solid var(--color-accent)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700 flex flex-col items-center gap-2">
        <span
          className="text-[10px] tracking-[0.15em] uppercase"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-heading)" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-[var(--color-border)] relative overflow-hidden">
          <div
            className="w-px h-4 absolute top-0"
            style={{
              backgroundColor: "var(--color-accent)",
              animation: "scrollDown 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(-16px); }
          100% { transform: translateY(32px); }
        }
      `}</style>
    </section>
  );
}

/* ─── About ─── */
function About() {
  const ref = useReveal();

  const services = [
    {
      num: "01",
      title: "퍼포먼스 마케팅",
      desc: "네이버, 카카오, Meta, Google Ads 등 국내외 채널을 아우르는 통합 마케팅 실행",
    },
    {
      num: "02",
      title: "세일즈 오퍼레이션",
      desc: "체계적인 세일즈 프로세스 구축과 B2B 영업 파이프라인 최적화",
    },
    {
      num: "03",
      title: "이커머스 컨설팅",
      desc: "Cafe24, 자사몰 기반의 이커머스 전략 수립과 운영 자동화 설계",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-36"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16 md:mb-24">
          <div
            className="h-px flex-grow max-w-[64px]"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-muted)",
              fontWeight: 500,
            }}
          >
            About Us
          </span>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="reveal">
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              성장에는
              <br />
              <span style={{ color: "var(--color-accent)" }}>구조</span>가 필요합니다
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p
              className="text-base md:text-lg leading-[1.8] mb-6"
              style={{ color: "var(--color-muted)" }}
            >
              Rebar Collective는 이커머스 브랜드의 성장을 돕는 비즈니스 컨설팅 그룹입니다.
              콘크리트 속 철근(Rebar)처럼, 보이지 않지만 단단한 구조를 만듭니다.
            </p>
            <p
              className="text-base md:text-lg leading-[1.8]"
              style={{ color: "var(--color-muted)" }}
            >
              마케팅 실행, 세일즈 프로세스 설계, 운영 자동화까지—
              데이터에 기반한 전략과 실행력으로 비즈니스의 지속 가능한 성장을 설계합니다.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal group py-10 md:px-8 first:md:pl-0 last:md:pr-0 border-t md:border-t md:border-l first:md:border-l-0"
              style={{
                borderColor: "var(--color-border)",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <span
                className="block text-xs mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-accent)",
                  fontWeight: 600,
                }}
              >
                {s.num}
              </span>
              <h3
                className="text-xl mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-[1.7]"
                style={{ color: "var(--color-muted)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-36"
      style={{ backgroundColor: "var(--color-fg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16 md:mb-24">
          <div
            className="h-px flex-grow max-w-[64px]"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-muted)",
              fontWeight: 500,
            }}
          >
            Contact
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
          {/* Left */}
          <div className="reveal">
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.15] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                color: "var(--color-bg)",
              }}
            >
              함께 성장할
              <br />
              준비가 되셨나요?
            </h2>
            <p
              className="text-base md:text-lg leading-[1.8] mb-10"
              style={{ color: "var(--color-muted)" }}
            >
              프로젝트에 대해 편하게 이야기해 주세요.
              <br />
              24시간 내에 답변 드리겠습니다.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@rebarcollective.com"
                className="inline-flex items-center gap-3 text-sm transition-colors hover:text-[var(--color-accent)]"
                style={{ color: "var(--color-muted)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                hello@rebarcollective.com
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    className="block text-xs tracking-wide mb-2 uppercase"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-muted)",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                    }}
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b py-3 text-base outline-none transition-colors focus:border-[var(--color-accent)]"
                    style={{
                      borderColor: "rgba(138,138,130,0.3)",
                      color: "var(--color-bg)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-wide mb-2 uppercase"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-muted)",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                    }}
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b py-3 text-base outline-none transition-colors focus:border-[var(--color-accent)]"
                    style={{
                      borderColor: "rgba(138,138,130,0.3)",
                      color: "var(--color-bg)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs tracking-wide mb-2 uppercase"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-muted)",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                    }}
                  >
                    프로젝트 내용
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-transparent border-b py-3 text-base outline-none transition-colors focus:border-[var(--color-accent)] resize-none"
                    style={{
                      borderColor: "rgba(138,138,130,0.3)",
                      color: "var(--color-bg)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 mt-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  문의 보내기
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-start justify-center h-full">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "var(--color-bg)",
                  }}
                >
                  감사합니다!
                </h3>
                <p style={{ color: "var(--color-muted)" }}>
                  빠른 시일 내에 연락드리겠습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: "var(--color-fg)",
        borderTop: "1px solid rgba(138,138,130,0.15)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-xs"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
        >
          © 2025 Rebar Collective. All rights reserved.
        </span>
        <span
          className="text-xs"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-muted)",
            fontWeight: 400,
          }}
        >
          Rebar
          <span style={{ opacity: 0.5, marginLeft: 4 }}>Collective</span>
        </span>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
