"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "70px 0 0",
      }}
    >
      <div className="container-xl">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1.4fr",
            gap: 60,
            paddingBottom: 60,
            borderBottom: "1px solid var(--border-subtle)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div
                className="serif"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "var(--accent-gold)",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                {RESTAURANT.nameJP}
              </div>
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginTop: 6,
                }}
              >
                {RESTAURANT.name} Omakase
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 280 }}>
              An intimate 12-seat counter experience in the heart of New York City. Where every course tells a story of the season.
            </p>
            <p
              className="jp"
              style={{
                color: "var(--text-muted)",
                fontSize: "0.78rem",
                marginTop: 12,
                lineHeight: 1.8,
              }}
            >
              一期一会の体験を、あなたへ。
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
              {[
                { label: "Instagram", href: RESTAURANT.social.instagram, path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Facebook", href: RESTAURANT.social.facebook, path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
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
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="label-sm"
              style={{ color: "var(--accent-gold)", marginBottom: 24 }}
            >
              Navigation
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Omakase", href: "/omakase" },
                { label: "Reservation", href: "/reservation" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="label-sm"
              style={{ color: "var(--accent-gold)", marginBottom: 24 }}
            >
              Omakase
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Hana — 華", href: "/omakase#hana" },
                { label: "Miyabi — 雅", href: "/omakase#miyabi" },
                { label: "Shin — 心", href: "/omakase#shin" },
                { label: "Tokusen — 特選", href: "/omakase#tokusen" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="label-sm"
              style={{ color: "var(--accent-gold)", marginBottom: 24 }}
            >
              Visit Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <MapPin size={14} color="var(--accent-gold)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                    {RESTAURANT.address}
                  </div>
                  <div className="jp" style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginTop: 2 }}>
                    {RESTAURANT.addressJP}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Clock size={14} color="var(--accent-gold)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  <div>{RESTAURANT.hours.days}</div>
                  <div>{RESTAURANT.hours.times}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{RESTAURANT.hours.note}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Phone size={14} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {RESTAURANT.phone}
                </a>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Mail size={14} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none", wordBreak: "break-all" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {RESTAURANT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "22px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.72rem", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} {RESTAURANT.nameFull}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <span
                key={item}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
