"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Phone, Leaf, PenLine, Coffee, Landmark, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { RESTAURANT, COURSES, TESTIMONIALS, FEATURES } from "@/lib/data";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600&q=85",
    headline: "The Art of\nOmakase",
    sub: "A curated journey of taste,\ncrafted in the moment.",
    jp: "その瞬間を、味わう",
  },
  {
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1600&q=85",
    headline: "Seasons on\na Plate",
    sub: "Every course drawn from\nnature's living calendar.",
    jp: "旬の恵みを、一皿に。",
  },
  {
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&q=85",
    headline: "Intimate.\nTimeless.",
    sub: "Twelve seats. One chef.\nAn evening to remember.",
    jp: "十二の席、一人の料理人。",
  },
];

const featureIcons = [Leaf, PenLine, Coffee, Landmark];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => changeSlide((slide + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, [slide]);

  function changeSlide(next: number) {
    setFading(true);
    setTimeout(() => {
      setSlide(next);
      setFading(false);
    }, 400);
  }

  const current = heroSlides[slide];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 680, overflow: "hidden" }}>
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.6s ease",
            opacity: fading ? 0 : 1,
          }}
        >
          <Image
            src={current.image}
            alt="Shin Kai dining room"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Gradient overlay — heavy on left for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(9,8,10,0.95) 0%, rgba(9,8,10,0.7) 50%, rgba(9,8,10,0.25) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="container-xl"
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 80,
          }}
        >
          <div style={{ maxWidth: 560 }}>
            {/* Label */}
            <div
              className="label-sm"
              style={{
                color: "var(--accent-gold)",
                marginBottom: 24,
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(8px)" : "translateY(0)",
                transition: "all 0.5s ease",
              }}
            >
              New York&apos;s Premier Omakase Counter
            </div>

            {/* Headline */}
            <h1
              className="display-xl"
              style={{
                color: "var(--text-primary)",
                marginBottom: 20,
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(12px)" : "translateY(0)",
                transition: "all 0.5s ease 0.05s",
                whiteSpace: "pre-line",
              }}
            >
              {current.headline}
            </h1>

            {/* Divider */}
            <div className="divider-gold" style={{ marginBottom: 20 }} />

            {/* Sub */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: 12,
                whiteSpace: "pre-line",
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(10px)" : "translateY(0)",
                transition: "all 0.5s ease 0.1s",
              }}
            >
              {current.sub}
            </p>

            {/* JP subtitle */}
            <p
              className="jp"
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: 40,
                opacity: fading ? 0 : 1,
                transition: "opacity 0.5s ease 0.15s",
              }}
            >
              {current.jp}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/reservation" className="btn-gold">
                Reserve a Seat
              </Link>
              <Link href="/omakase" className="btn-outline" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                Explore Omakase <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Slide indicator */}
          <div style={{ position: "absolute", bottom: 48, left: 48, display: "flex", alignItems: "center", gap: 20 }}>
            <span className="label-xs" style={{ color: "var(--text-secondary)" }}>
              0{slide + 1}
            </span>
            <div className="slide-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeSlide(i)}
                  className={`slide-dot ${i === slide ? "active" : ""}`}
                  style={{ border: "none", cursor: "pointer", padding: 0 }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="label-xs" style={{ color: "var(--text-secondary)" }}>
              0{heroSlides.length}
            </span>
          </div>

          {/* Arrow controls */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: 48,
              display: "flex",
              gap: 10,
            }}
          >
            <button
              onClick={() => changeSlide((slide - 1 + heroSlides.length) % heroSlides.length)}
              style={{
                width: 40,
                height: 40,
                border: "1px solid var(--border-subtle)",
                background: "transparent",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => changeSlide((slide + 1) % heroSlides.length)}
              style={{
                width: 40,
                height: 40,
                border: "1px solid var(--border-subtle)",
                background: "transparent",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "80px 0" }}>
        <div className="container-lg">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="display-md serif" style={{ marginBottom: 16 }}>
              Intimate Dining. Timeless Craft.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto 10px" }}>
              At Shin Kai Omakase, every course is a reflection of season, tradition, and the pursuit of perfection.
            </p>
            <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
              伝統と革新が織りなす、一期一会の体験を。
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
            }}
            className="features-grid"
          >
            {FEATURES.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={f.title} style={{ textAlign: "center" }}>
                  <div className="icon-wrap" style={{ marginBottom: 20 }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="serif" style={{ fontSize: "1.15rem", fontWeight: 400, marginBottom: 6 }}>
                    {f.title}
                  </h3>
                  <p className="jp" style={{ color: "var(--accent-gold)", fontSize: "0.75rem", marginBottom: 10 }}>
                    {f.titleJP}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .features-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          }
          @media (max-width: 480px) {
            .features-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── ABOUT SPLIT ───────────────────────────────────────── */}
      <section className="section-pad" style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 540,
          }}
          className="about-split"
        >
          {/* Image */}
          <div style={{ position: "relative", minHeight: 480 }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
              alt="Chef preparing omakase"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, transparent 70%, var(--bg-primary) 100%)",
              }}
            />
          </div>

          {/* Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "60px 70px 60px 60px",
              background: "var(--bg-primary)",
            }}
            className="about-text"
          >
            <span className="label-sm text-gold" style={{ marginBottom: 16 }}>
              About Shin Kai
            </span>
            <h2 className="display-md serif" style={{ marginBottom: 24 }}>
              A Journey Beyond<br />the Ordinary
            </h2>
            <div className="divider-gold" style={{ marginBottom: 28 }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.85, marginBottom: 16 }}>
              Omakase means &ldquo;I leave it up to you.&rdquo; At Shin Kai, it is an expression of trust. You entrust us with your time, and we reward you with an unforgettable journey.
            </p>
            <p
              className="jp"
              style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.9, marginBottom: 36 }}
            >
              「おまかせ」は、信頼の証。<br />その信頼に、心を込めてお応えします。
            </p>
            <Link
              href="/about"
              className="btn-outline-gold"
              style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Our Story <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .about-split { grid-template-columns: 1fr !important; }
            .about-text { padding: 48px 24px !important; }
          }
        `}</style>
      </section>

      {/* ── COURSES PREVIEW ───────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)", paddingTop: 100, paddingBottom: 100 }}>
        <div className="container-xl">
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <span className="label-sm text-gold" style={{ display: "block", marginBottom: 12 }}>
                The Omakase Experience
              </span>
              <h2 className="display-md serif">
                Courses That Flow<br />With the Seasons
              </h2>
            </div>
            <Link
              href="/omakase"
              className="btn-outline-gold"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}
            >
              View All Courses <ArrowRight size={11} />
            </Link>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="courses-grid"
          >
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/omakase#${course.id}`}
                className="card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  display: "block",
                  position: "relative",
                }}
              >
                {/* Badge */}
                {course.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      zIndex: 10,
                    }}
                  >
                    <span className="badge-popular">Popular</span>
                  </div>
                )}

                {/* Image */}
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                    className="course-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: "linear-gradient(to top, var(--bg-card) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "22px 22px 26px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                    <div>
                      <span className="serif" style={{ fontSize: "1.25rem", fontWeight: 400 }}>
                        {course.name}
                      </span>
                      <span
                        className="jp"
                        style={{ color: "var(--accent-gold)", fontSize: "0.9rem", marginLeft: 8 }}
                      >
                        {course.nameJP}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                    <span className="label-xs" style={{ color: "var(--text-secondary)" }}>
                      {course.courseCount}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.78rem", lineHeight: 1.7, marginBottom: 18 }}>
                    {course.tagline}
                  </p>
                  <div
                    className="rule-subtle"
                    style={{ marginBottom: 18 }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="serif" style={{ fontSize: "1.4rem", color: "var(--accent-gold)" }}>
                      ${course.price}
                    </span>
                    <span className="label-xs" style={{ color: "var(--text-muted)" }}>
                      per person
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .course-img:hover { transform: scale(1.05); }
          @media (max-width: 900px) {
            .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .courses-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CHEF QUOTE ────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "120px 0",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76594e94e6a?w=1600&q=80"
            alt="Chef at work"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(9,8,10,0.82)" }} />
        </div>
        <div className="container-lg" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          <div
            className="serif"
            style={{
              fontSize: "5rem",
              color: "var(--accent-gold)",
              opacity: 0.2,
              lineHeight: 0.8,
              marginBottom: -20,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>
          <blockquote
            className="serif"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.5,
              maxWidth: 740,
              margin: "0 auto 28px",
              color: "var(--text-primary)",
            }}
          >
            Omakase is not a menu. It is a conversation — between the chef, the season, and the guest.
          </blockquote>
          <div className="divider-gold" style={{ margin: "0 auto 20px" }} />
          <p className="label-sm" style={{ color: "var(--accent-gold)" }}>
            Chef Hiroshi Tanaka
          </p>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: 6 }}>
            田中 裕 — Executive Chef & Owner
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-surface)" }}>
        <div className="container-lg">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="label-sm text-gold" style={{ display: "block", marginBottom: 14 }}>
              Guest Experiences
            </span>
            <h2 className="display-md serif">What Our Guests Say</h2>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
            className="testimonials-grid"
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars" style={{ marginBottom: 18, marginTop: 16 }}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={12} fill="currentColor" />
                  ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: 24 }}>
                  {t.text}
                </p>
                <div className="rule-subtle" style={{ marginBottom: 18 }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--text-primary)" }}>
                    {t.author}
                  </div>
                  <div className="label-xs" style={{ color: "var(--text-secondary)", marginTop: 3 }}>
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .testimonials-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── RESERVATION CTA ───────────────────────────────────── */}
      <section style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 480,
          }}
          className="res-split"
        >
          {/* Image */}
          <div style={{ position: "relative", minHeight: 360 }}>
            <Image
              src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=900&q=85"
              alt="Restaurant entrance"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, transparent 60%, var(--bg-primary) 100%)",
              }}
            />
          </div>

          {/* Info */}
          <div
            style={{
              background: "var(--bg-primary)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "70px 60px 70px 50px",
              borderLeft: "1px solid var(--border-subtle)",
            }}
            className="res-text"
          >
            <span className="label-sm text-gold" style={{ marginBottom: 16 }}>
              Reserve Your Moment
            </span>
            <h2 className="display-md serif" style={{ marginBottom: 20 }}>
              Reserve Your<br />Moment
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: 10 }}>
              We offer two seatings per evening in our intimate counter. Each seating is limited to ensure the highest quality experience.
            </p>
            <p
              className="jp"
              style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.8, marginBottom: 36 }}
            >
              一日のご案内は二部制、カウンター席のみのご用意となります。
            </p>

            {/* Quick info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <MapPin size={14} color="var(--accent-gold)" />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>{RESTAURANT.address}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Clock size={14} color="var(--accent-gold)" />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>
                  {RESTAURANT.hours.days} &nbsp;|&nbsp; {RESTAURANT.hours.times}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Phone size={14} color="var(--accent-gold)" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none" }}
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>

            <Link href="/reservation" className="btn-gold" style={{ alignSelf: "flex-start" }}>
              Reserve a Seat
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .res-split { grid-template-columns: 1fr !important; }
            .res-text { padding: 48px 24px !important; border-left: none !important; border-top: 1px solid var(--border-subtle) !important; }
          }
        `}</style>
      </section>
    </>
  );
}
