import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CHEF, RESTAURANT } from "@/lib/data";

export const metadata = {
  title: "About | Shin Kai Omakase",
  description: "The story behind Shin Kai — Chef Hiroshi Tanaka, Edomae philosophy, and the pursuit of perfection.",
};

const values = [
  {
    n: "01",
    title: "Seasonality",
    titleJP: "旬",
    body: "Every menu begins with a walk through the season. We source directly from trusted purveyors and fishmongers who share our obsession with quality and provenance.",
  },
  {
    n: "02",
    title: "Edomae Tradition",
    titleJP: "江戸前",
    body: "Rooted in the techniques of Edo-era Tokyo, our craft centers on aging, curing, and seasoning — coaxing depth from the fish itself rather than masking it.",
  },
  {
    n: "03",
    title: "Omotenashi",
    titleJP: "おもてなし",
    body: "True hospitality is invisible. Our service is designed to anticipate, never to intrude — so your attention remains on the food and the moment.",
  },
  {
    n: "04",
    title: "Ma — Negative Space",
    titleJP: "間",
    body: "We believe in the power of restraint. A single slice of fish on black stone says more than a crowded plate. The silence between courses is as intentional as the courses themselves.",
  },
];

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "55vh",
          minHeight: 480,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: 80,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=85"
          alt="Shin Kai interior"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(9,8,10,0.97) 0%, rgba(9,8,10,0.5) 60%, transparent 100%)",
          }}
        />
        <div className="container-xl" style={{ position: "relative", zIndex: 10 }}>
          <span className="label-sm text-gold" style={{ display: "block", marginBottom: 16 }}>
            About Shin Kai
          </span>
          <h1 className="display-lg serif">
            A Story Written<br />in Every Plate
          </h1>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: 12 }}>
            一皿に込められた、私たちの物語。
          </p>
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-lg">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
            className="story-grid"
          >
            <div>
              <span className="label-sm text-gold" style={{ display: "block", marginBottom: 18 }}>
                Our Beginning
              </span>
              <h2 className="display-md serif" style={{ marginBottom: 28 }}>
                What Omakase<br />Truly Means
              </h2>
              <div className="divider-gold" style={{ marginBottom: 28 }} />
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: 20 }}>
                Shin Kai — 新懐 — translates as &ldquo;new embrace.&rdquo; It is a name that speaks to the tension at the heart of what we do: honoring a centuries-old tradition while never ceasing to grow.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: 20 }}>
                We opened our doors with twelve seats, a single counter of hinoki cypress, and an unwavering belief that the omakase experience belongs not only in Tokyo — but anywhere a chef dares to pursue perfection.
              </p>
              <p
                className="jp"
                style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.9, marginBottom: 32 }}
              >
                新懐とは、伝統を敬いながら、革新を恐れない姿勢。<br />
                東京だけでなく、世界へ。
              </p>
              <Link href="/omakase" className="btn-outline-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Explore Our Courses <ArrowRight size={11} />
              </Link>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 520 }}>
                <Image
                  src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=85"
                  alt="Sushi preparation"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Floating accent card */}
              <div
                style={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  padding: "28px 32px",
                  maxWidth: 220,
                }}
              >
                <div
                  className="serif"
                  style={{ fontSize: "3rem", color: "var(--accent-gold)", lineHeight: 1, marginBottom: 8 }}
                >
                  12
                </div>
                <div className="label-xs" style={{ color: "var(--text-secondary)" }}>
                  Intimate seats.<br />One unforgettable evening.
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── CHEF ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "100px 0" }}>
        <div className="container-lg">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}
            className="chef-grid"
          >
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 600 }}>
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                  alt={CHEF.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  right: 0,
                  height: 120,
                  background: "linear-gradient(to top, var(--bg-surface), transparent)",
                }}
              />
            </div>

            <div style={{ paddingTop: 20 }}>
              <span className="label-sm text-gold" style={{ display: "block", marginBottom: 18 }}>
                The Chef
              </span>
              <h2 className="display-md serif" style={{ marginBottom: 6 }}>
                {CHEF.name}
              </h2>
              <p className="jp" style={{ color: "var(--accent-gold)", fontSize: "0.82rem", marginBottom: 8 }}>
                {CHEF.nameJP}
              </p>
              <p className="label-xs" style={{ color: "var(--text-secondary)", marginBottom: 30 }}>
                {CHEF.title}
              </p>
              <div className="divider-gold" style={{ marginBottom: 30 }} />

              {CHEF.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: 18 }}
                >
                  {para}
                </p>
              ))}

              <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.9, marginTop: 8, marginBottom: 36 }}>
                {CHEF.bioJP}
              </p>

              {/* Philosophy pull quote */}
              <div
                style={{
                  background: "var(--bg-card)",
                  borderLeft: "2px solid var(--accent-gold)",
                  padding: "24px 28px",
                }}
              >
                <p
                  className="serif"
                  style={{ fontStyle: "italic", fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.7 }}
                >
                  &ldquo;{CHEF.philosophy}&rdquo;
                </p>
                <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 12 }}>
                  {CHEF.philosophyJP}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .chef-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-lg">
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <span className="label-sm text-gold" style={{ display: "block", marginBottom: 14 }}>
              Our Philosophy
            </span>
            <h2 className="display-md serif">
              The Principles That<br />Guide Every Course
            </h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}
            className="values-grid"
          >
            {values.map((v) => (
              <div
                key={v.n}
                style={{
                  padding: "48px 44px",
                  border: "1px solid var(--border-subtle)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="philosophy-number"
                  style={{ position: "absolute", top: 20, right: 28, userSelect: "none" }}
                >
                  {v.n}
                </div>
                <h3 className="serif" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: 4 }}>
                  {v.title}
                </h3>
                <p className="jp" style={{ color: "var(--accent-gold)", fontSize: "0.8rem", marginBottom: 18 }}>
                  {v.titleJP}
                </p>
                <div className="divider-gold" style={{ marginBottom: 18 }} />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.85 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .philosophy-number {
            font-family: var(--font-cormorant, serif);
            font-size: 4rem;
            color: var(--accent-gold);
            opacity: 0.12;
            line-height: 1;
            font-weight: 300;
          }
          @media (max-width: 700px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── WHAT IS OMAKASE ───────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "110px 0",
          overflow: "hidden",
          background: "var(--bg-surface)",
        }}
      >
        <div className="container-lg" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <span className="label-sm text-gold" style={{ display: "block", marginBottom: 18 }}>
              Understanding Omakase
            </span>
            <h2 className="display-md serif" style={{ marginBottom: 28 }}>
              What Is Omakase?
            </h2>
            <div className="divider-gold" style={{ margin: "0 auto 28px" }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: 20 }}>
              The word <em style={{ fontStyle: "italic", color: "var(--text-primary)" }}>omakase</em> (おまかせ) comes from the Japanese verb <em style={{ fontStyle: "italic" }}>makaseru</em> — to entrust. When you sit at our counter and say &ldquo;omakase,&rdquo; you surrender the menu to the chef. It is one of the most intimate acts in dining.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: 20 }}>
              There is no printed menu. No decision fatigue. Only presence — yours, the chef&rsquo;s, and the season&rsquo;s. Each course arrives as a surprise, guided by what is most alive and vibrant on any given evening.
            </p>
            <p
              className="jp"
              style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.9, marginBottom: 40 }}
            >
              おまかせとは、料理人への信頼。<br />季節と出会い、今この瞬間を味わう体験。
            </p>
            <Link href="/omakase" className="btn-gold">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-primary)", padding: "80px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container-lg" style={{ textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "2rem", fontWeight: 300, marginBottom: 8 }}>
            Ready to Experience Shin Kai?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 32 }}>
            {RESTAURANT.capacity} seats. Two seatings nightly. Reserve yours today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/reservation" className="btn-gold">
              Reserve a Seat
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
