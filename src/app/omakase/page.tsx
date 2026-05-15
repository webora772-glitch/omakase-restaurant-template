"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { COURSES, RESTAURANT } from "@/lib/data";


export default function Omakase() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "52vh",
          minHeight: 460,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: 80,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1600&q=85"
          alt="Omakase courses"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(9,8,10,0.97) 0%, rgba(9,8,10,0.45) 65%, transparent 100%)",
          }}
        />
        <div className="container-xl" style={{ position: "relative", zIndex: 10 }}>
          <span className="label-sm text-gold" style={{ display: "block", marginBottom: 16 }}>
            The Omakase Experience
          </span>
          <h1 className="display-lg serif">
            Courses That Flow<br />With the Seasons
          </h1>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: 12 }}>
            旬の恵みが導く、季節の料理の旅。
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "70px 0" }}>
        <div className="container-lg" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.96rem", lineHeight: 1.9, maxWidth: 680, margin: "0 auto 12px" }}>
            At Shin Kai, the omakase menu changes with the seasons — sometimes weekly, sometimes daily. What remains constant is the structure: a procession of courses that build in intensity, each one a distinct expression of the season&rsquo;s finest offerings.
          </p>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            季節とともに変わるメニュー。変わらないのは、料理人の誠実さと情熱。
          </p>
        </div>
      </section>

      {/* ── COURSE TABS NAV ───────────────────────────────────── */}
      <div style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border-subtle)", position: "sticky", top: 72, zIndex: 50 }}>
        <div className="container-xl">
          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {COURSES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                style={{
                  padding: "16px 28px",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-gold)";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--accent-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                }}
              >
                {c.name}
                <span className="jp" style={{ fontSize: "0.8rem", opacity: 0.7 }}>{c.nameJP}</span>
                {c.popular && (
                  <span
                    style={{
                      background: "var(--accent-gold)",
                      color: "#09080a",
                      fontSize: "0.5rem",
                      letterSpacing: "0.1em",
                      padding: "2px 6px",
                      fontWeight: 500,
                    }}
                  >
                    Popular
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── COURSES ───────────────────────────────────────────── */}
      {COURSES.map((course, index) => (
        <section
          key={course.id}
          id={course.id}
          style={{
            padding: "100px 0",
            background: index % 2 === 0 ? "var(--bg-primary)" : "var(--bg-surface)",
            scrollMarginTop: 140,
          }}
        >
          <div className="container-xl">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: index % 2 === 0 ? "1.1fr 1fr" : "1fr 1.1fr",
                gap: 80,
                alignItems: "center",
              }}
              className="course-layout"
            >
              {/* Image side */}
              <div
                style={{
                  order: index % 2 === 0 ? 1 : 2,
                  position: "relative",
                }}
                className="course-img-side"
              >
                <div style={{ position: "relative", height: 520 }}>
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {course.popular && (
                    <div style={{ position: "absolute", top: 20, left: 20 }}>
                      <span className="badge-popular">Most Popular</span>
                    </div>
                  )}
                  {/* Price overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      right: 24,
                      background: "rgba(9,8,10,0.88)",
                      border: "1px solid var(--border-gold)",
                      padding: "16px 24px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="serif"
                      style={{ fontSize: "2.2rem", color: "var(--accent-gold)", lineHeight: 1, fontWeight: 300 }}
                    >
                      ${course.price}
                    </div>
                    <div className="label-xs" style={{ color: "var(--text-secondary)", marginTop: 4 }}>
                      per person
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <span className="label-sm text-gold" style={{ display: "block", marginBottom: 14 }}>
                  {course.courseCount}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
                  <h2 className="display-md serif">{course.name}</h2>
                  <span className="jp" style={{ fontSize: "1.8rem", color: "var(--accent-gold)", fontWeight: 300 }}>
                    {course.nameJP}
                  </span>
                </div>
                <p
                  className="serif"
                  style={{ fontStyle: "italic", fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: 24 }}
                >
                  {course.tagline}
                </p>
                <div className="divider-gold" style={{ marginBottom: 24 }} />

                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: 12 }}>
                  {course.description}
                </p>
                <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.9, marginBottom: 32 }}>
                  {course.descriptionJP}
                </p>

                {/* Course highlights */}
                <div style={{ marginBottom: 36 }}>
                  <h4
                    className="label-xs"
                    style={{ color: "var(--text-muted)", marginBottom: 16 }}
                  >
                    Course Highlights
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {course.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <Check size={13} color="var(--accent-gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.86rem" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/reservation" className="btn-gold">
                    Reserve for {course.name}
                  </Link>
                  <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    Enquire <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── COMPARISON TABLE ──────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "100px 0" }}>
        <div className="container-lg">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="label-sm text-gold" style={{ display: "block", marginBottom: 14 }}>
              At a Glance
            </span>
            <h2 className="display-md serif">Compare Courses</h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px 20px",
                      fontSize: "0.68rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  />
                  {COURSES.map((c) => (
                    <th
                      key={c.id}
                      style={{
                        textAlign: "center",
                        padding: "16px 20px",
                        borderBottom: "1px solid var(--border-subtle)",
                        position: "relative",
                        background: c.popular ? "rgba(201,169,110,0.04)" : "transparent",
                      }}
                    >
                      <div className="serif" style={{ fontSize: "1.1rem", fontWeight: 400 }}>
                        {c.name}
                      </div>
                      <div className="jp" style={{ fontSize: "0.8rem", color: "var(--accent-gold)" }}>
                        {c.nameJP}
                      </div>
                      {c.popular && (
                        <div style={{ marginTop: 6 }}>
                          <span className="badge-popular">Popular</span>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price per person", values: COURSES.map((c) => `$${c.price}`) },
                  { label: "Course count", values: COURSES.map((c) => c.courseCount) },
                  { label: "Sashimi selection", values: ["✓", "✓", "✓", "✓"] },
                  { label: "Premium nigiri", values: ["6 pcs", "8 pcs", "10 pcs", "12+ pcs"] },
                  { label: "Wagyu course", values: ["—", "—", "✓", "✓"] },
                  { label: "Caviar & truffle", values: ["—", "—", "✓", "✓"] },
                  { label: "Sake pairing available", values: ["✓", "✓", "✓", "✓"] },
                  { label: "Duration", values: ["~2 hrs", "~2.5 hrs", "~3 hrs", "~3.5 hrs"] },
                ].map((row, ri) => (
                  <tr key={ri}>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "0.84rem",
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border-subtle)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, vi) => (
                      <td
                        key={vi}
                        style={{
                          textAlign: "center",
                          padding: "16px 20px",
                          fontSize: "0.88rem",
                          color: val === "—" ? "var(--text-muted)" : val === "✓" ? "var(--accent-gold)" : "var(--text-primary)",
                          borderBottom: "1px solid var(--border-subtle)",
                          fontWeight: ri === 0 ? 400 : 300,
                          background: COURSES[vi].popular ? "rgba(201,169,110,0.04)" : "transparent",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── NOTES ─────────────────────────────────────────────── */}
      <section style={{ padding: "70px 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container-lg">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
            className="notes-grid"
          >
            <div>
              <h3 className="serif" style={{ fontSize: "1.3rem", fontWeight: 400, marginBottom: 18 }}>
                Good to Know
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Menus are seasonal and subject to change based on market availability.",
                  "Dietary restrictions (vegetarian, shellfish allergy, etc.) must be communicated at time of booking.",
                  "Sake and wine pairings are available for all courses. Please enquire when reserving.",
                  "Full prepayment is required to confirm your reservation.",
                  "Cancellations within 48 hours of the reservation are non-refundable.",
                ].map((note, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-gold)", fontSize: "0.7rem", marginTop: 4, flexShrink: 0 }}>◆</span>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem", lineHeight: 1.7 }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                padding: "36px",
              }}
            >
              <h3 className="serif" style={{ fontSize: "1.3rem", fontWeight: 400, marginBottom: 6 }}>
                Private Dining
              </h3>
              <p className="jp" style={{ color: "var(--accent-gold)", fontSize: "0.75rem", marginBottom: 18 }}>
                プライベートダイニング
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.85, marginBottom: 24 }}>
                For exclusive buyouts of the full counter (12 seats), private dining events, and corporate experiences, please contact us directly. Bespoke menus are available for groups.
              </p>
              <Link href="/contact" className="btn-outline-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Enquire Now <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .course-layout { grid-template-columns: 1fr !important; }
            .course-img-side { order: 1 !important; }
            .notes-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── RESERVE CTA ───────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "80px 0" }}>
        <div className="container-lg" style={{ textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "2rem", fontWeight: 300, marginBottom: 10 }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 32 }}>
            {RESTAURANT.capacity} seats. Two seatings. Reserve yours before they fill.
          </p>
          <Link href="/reservation" className="btn-gold">
            Reserve a Seat
          </Link>
        </div>
      </section>
    </>
  );
}
