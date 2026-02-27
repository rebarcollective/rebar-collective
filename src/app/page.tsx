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

const C = {
  bg: "#FAFAF8",
  fg: "#1A1A18",
  muted: "#8A8A82",
  accent: "#7C8B9B",
  accentLight: "#9AABBB",
  border: "#E5E5E0",
  surface: "#F0F0EC",
};

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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s",
        backgroundColor: scrolled ? "rgba(250,250,248,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            textDecoration: "none",
            color: C.fg,
            letterSpacing: "-0.02em",
          }}
        >
          Rebar
          <span style={{ color: C.muted, fontWeight: 300, marginLeft: 4 }}>
            Collective
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a
            href="#about"
            style={{
              fontSize: "0.875rem",
              color: C.fg,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: C.fg,
              color: C.bg,
              textDecoration: "none",
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
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: C.bg,
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 1px 1px, ${C.fg} 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top accent line */}
      <div
        className="animate-fade-in delay-700"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 4,
          backgroundColor: C.accent,
          animation:
            "lineExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards",
          width: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "160px 40px 128px",
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          {/* Label */}
          <div
            className="animate-fade-up delay-100"
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: C.accent,
              }}
            />
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: C.muted,
              }}
            >
              Business Growth Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 32,
              color: C.fg,
            }}
          >
            성장을 위한
            <br />
            <span style={{ color: C.accent }}>구조</span>를 설계합니다
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-300"
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.7,
              color: C.muted,
              maxWidth: 520,
              marginBottom: 48,
            }}
          >
            이커머스 마케팅 실행과 체계적인 세일즈 오퍼레이션.
            <br />
            데이터 기반의 전략으로 비즈니스의 다음 단계를 함께 만듭니다.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: "flex", flexWrap: "wrap" as const, alignItems: "center", gap: 16 }}
          >
            <a
              href="#contact"
              style={{
                fontFamily: "'Sora', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "1rem",
                fontWeight: 500,
                padding: "14px 28px",
                borderRadius: 999,
                backgroundColor: C.accent,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              프로젝트 문의
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#about"
              style={{
                fontSize: "0.875rem",
                padding: "14px 24px",
                borderRadius: 999,
                color: C.muted,
                textDecoration: "none",
              }}
            >
              더 알아보기
            </a>
          </div>
        </div>

        {/* Decorative circles - desktop only */}
        <div
          className="animate-fade-in delay-600 hero-deco"
          style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            width: 280,
            height: 280,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1px solid ${C.accent}`,
              opacity: 0.1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 32,
              borderRadius: "50%",
              border: `1px solid ${C.accent}`,
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 64,
              borderRadius: "50%",
              border: `1px solid ${C.accent}`,
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: C.accent,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in delay-700"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: C.muted,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            backgroundColor: C.border,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 1,
              height: 16,
              position: "absolute",
              top: 0,
              backgroundColor: C.accent,
              animation: "scrollDown 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
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
      style={{ padding: "96px 0", backgroundColor: C.bg }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 96,
          }}
        >
          <div style={{ height: 1, width: 64, backgroundColor: C.accent }} />
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: C.muted,
            }}
          >
            About Us
          </span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            marginBottom: 96,
          }}
          className="about-grid"
        >
          <div className="reveal">
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "2.75rem",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: C.fg,
              }}
            >
              성장에는
              <br />
              <span style={{ color: C.accent }}>구조</span>가 필요합니다
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: C.muted,
                marginBottom: 24,
              }}
            >
              Rebar Collective는 이커머스 브랜드의 성장을 돕는 비즈니스 컨설팅
              그룹입니다. 콘크리트 속 철근(Rebar)처럼, 보이지 않지만 단단한
              구조를 만듭니다.
            </p>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: C.muted }}>
              마케팅 실행, 세일즈 프로세스 설계, 운영 자동화까지—데이터에 기반한
              전략과 실행력으로 비즈니스의 지속 가능한 성장을 설계합니다.
            </p>
          </div>
        </div>

        {/* Services */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal"
              style={{
                padding: "40px 32px",
                borderTop: `1px solid ${C.border}`,
                borderLeft: i > 0 ? `1px solid ${C.border}` : "none",
                paddingLeft: i === 0 ? 0 : 32,
                paddingRight: i === 2 ? 0 : 32,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: C.accent,
                  marginBottom: 16,
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                  color: C.fg,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: C.muted }}>
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(138,138,130,0.3)",
    padding: "12px 0",
    fontSize: "1rem",
    fontFamily: "'DM Sans', sans-serif",
    color: C.bg,
    outline: "none",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "96px 0", backgroundColor: C.fg }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 96,
          }}
        >
          <div style={{ height: 1, width: 64, backgroundColor: C.accent }} />
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: C.muted,
            }}
          >
            Contact
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div className="reveal">
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "2.75rem",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: C.bg,
                marginBottom: 24,
              }}
            >
              함께 성장할
              <br />
              준비가 되셨나요?
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: C.muted,
                marginBottom: 40,
              }}
            >
              프로젝트에 대해 편하게 이야기해 주세요.
              <br />
              24시간 내에 답변 드리겠습니다.
            </p>
            <a
              href="mailto:hello@rebarcollective.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontSize: "0.875rem",
                color: C.muted,
                textDecoration: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              hello@rebarcollective.com
            </a>
          </div>

          {/* Right - Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: C.muted,
                      marginBottom: 8,
                    }}
                  >
                    이름
                  </label>
                  <input type="text" required style={inputStyle} />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: C.muted,
                      marginBottom: 8,
                    }}
                  >
                    이메일
                  </label>
                  <input type="email" required style={inputStyle} />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: C.muted,
                      marginBottom: 8,
                    }}
                  >
                    프로젝트 내용
                  </label>
                  <textarea
                    rows={4}
                    required
                    style={{ ...inputStyle, resize: "none" as const }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-start",
                    fontFamily: "'Sora', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "14px 28px",
                    borderRadius: 999,
                    backgroundColor: C.accent,
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    marginTop: 16,
                  }}
                >
                  문의 보내기
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            ) : (
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: C.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: C.bg,
                    marginBottom: 12,
                  }}
                >
                  감사합니다!
                </h3>
                <p style={{ color: C.muted }}>
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
      style={{
        padding: "40px 0",
        backgroundColor: C.fg,
        borderTop: "1px solid rgba(138,138,130,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
          <span style={{ fontSize: "0.75rem", color: C.muted }}>
            © 2025 Rebar Collective. All rights reserved.
          </span>
          <span style={{ fontSize: "0.7rem", color: C.muted, opacity: 0.7 }}>
            경기 수원시 영통구 광교로 146, 안효빌딩 10층 1003호 25번
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "0.75rem",
            color: C.muted,
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
    <>
      <style jsx global>{`
        @keyframes scrollDown {
          0% { transform: translateY(-16px); }
          100% { transform: translateY(32px); }
        }
        @media (max-width: 768px) {
          .hero-deco { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-grid h2 { font-size: 2rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div { border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-grid h2 { font-size: 2rem !important; }
        }
      `}</style>
      <main>
        <Header />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
