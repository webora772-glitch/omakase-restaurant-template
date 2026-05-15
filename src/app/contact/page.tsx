"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, MessageCircle, Check } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  const whatsappMsg = encodeURIComponent(`Hello Shin Kai! I have an enquiry.`);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg-surface)",
          paddingTop: 140,
          paddingBottom: 70,
          borderBottom: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div className="container-lg">
          <span className="label-sm text-gold" style={{ display: "block", marginBottom: 16 }}>
            Get in Touch
          </span>
          <h1 className="display-lg serif" style={{ marginBottom: 14 }}>
            Contact Shin Kai
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", maxWidth: 480, margin: "0 auto 8px" }}>
            Whether you have a question, a special request, or would like to plan a private event — we&rsquo;re here to help.
          </p>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            ご質問やプライベートイベントのご相談は、お気軽にどうぞ。
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ──────────────────────────────────────── */}
      <section style={{ padding: "90px 0" }}>
        <div className="container-lg">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 70,
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: Info */}
            <div>
              <h2 className="serif" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: 6 }}>
                Visit Us
              </h2>
              <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 32 }}>
                アクセス情報
              </p>

              {/* Info items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 40 }}>
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={16} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 6 }}>
                      Location
                    </div>
                    <div style={{ color: "var(--text-primary)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                      {RESTAURANT.address}
                    </div>
                    <div className="jp" style={{ color: "var(--text-muted)", fontSize: "0.76rem", marginTop: 4 }}>
                      {RESTAURANT.addressJP}
                    </div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-xs text-gold"
                      style={{ display: "inline-block", marginTop: 8, textDecoration: "none" }}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={16} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 6 }}>
                      Opening Hours
                    </div>
                    <div style={{ color: "var(--text-primary)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 240 }}>
                        <span>{RESTAURANT.hours.days}</span>
                        <span style={{ color: "var(--text-secondary)" }}>{RESTAURANT.hours.times}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 240 }}>
                        <span>Monday</span>
                        <span style={{ color: "var(--text-muted)" }}>Closed</span>
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 4 }}>
                        Seatings
                      </div>
                      {RESTAURANT.seatings.map((s) => (
                        <span
                          key={s}
                          style={{
                            display: "inline-block",
                            border: "1px solid var(--border-subtle)",
                            padding: "3px 10px",
                            fontSize: "0.76rem",
                            color: "var(--text-secondary)",
                            marginRight: 8,
                            marginTop: 4,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={16} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 6 }}>
                      Phone
                    </div>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      style={{ color: "var(--text-primary)", fontSize: "0.88rem", textDecoration: "none" }}
                    >
                      {RESTAURANT.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={16} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 6 }}>
                      Email
                    </div>
                    <a
                      href={`mailto:${RESTAURANT.email}`}
                      style={{ color: "var(--text-primary)", fontSize: "0.88rem", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      {RESTAURANT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  padding: "24px 28px",
                  marginBottom: 28,
                }}
              >
                <h4 className="serif" style={{ fontSize: "1.05rem", fontWeight: 400, marginBottom: 8 }}>
                  Quick Contact via WhatsApp
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: 16 }}>
                  Prefer a faster response? Send us a message on WhatsApp and we&rsquo;ll get back to you promptly.
                </p>
                <a
                  href={`https://wa.me/${RESTAURANT.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </div>

              {/* Social */}
              <div>
                <div className="label-xs" style={{ color: "var(--text-muted)", marginBottom: 14 }}>
                  Follow Us
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[
                    {
                      icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
                      label: "Instagram",
                      href: RESTAURANT.social.instagram,
                    },
                    {
                      icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                      label: "Facebook",
                      href: RESTAURANT.social.facebook,
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
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
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    padding: "60px 40px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      border: "1px solid var(--accent-gold)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <Check size={22} color="var(--accent-gold)" />
                  </div>
                  <h3 className="serif" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: 12 }}>
                    Message Received
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: 8 }}>
                    Thank you, {name}. We&rsquo;ll respond to your enquiry at <em>{email}</em> within one business day.
                  </p>
                  <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                    お問い合わせありがとうございます。1営業日以内にご返信いたします。
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    padding: "44px 40px",
                  }}
                >
                  <h2 className="serif" style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: 6 }}>
                    Send an Enquiry
                  </h2>
                  <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 28 }}>
                    お問い合わせフォーム
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="input-dark"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          className="input-dark"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                        Subject
                      </label>
                      <select
                        className="input-dark"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      >
                        <option value="">Select a topic</option>
                        <option value="reservation">Reservation Enquiry</option>
                        <option value="private">Private Dining / Buyout</option>
                        <option value="gift">Gift Certificates</option>
                        <option value="dietary">Dietary Requirements</option>
                        <option value="press">Press & Media</option>
                        <option value="other">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                        Message *
                      </label>
                      <textarea
                        className="input-dark"
                        placeholder="Tell us how we can help..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ minHeight: 140 }}
                      />
                    </div>

                    <div style={{ paddingTop: 8 }}>
                      <button
                        type="submit"
                        className="btn-gold"
                        style={{ opacity: !name || !email || !message ? 0.5 : 1 }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── MAP SECTION ───────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface)", padding: "0 0 100px" }}>
        <div className="container-xl">
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 16,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative grid overlay to make it look like a map */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
            <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--accent-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                }}
              >
                <MapPin size={20} color="#09080a" style={{ transform: "rotate(45deg)" }} />
              </div>
              <div className="serif" style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: 4 }}>
                Shin Kai Omakase
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", marginBottom: 16 }}>
                {RESTAURANT.address}
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESERVE CTA ───────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border-subtle)", padding: "80px 0" }}>
        <div className="container-lg" style={{ textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "2rem", fontWeight: 300, marginBottom: 10 }}>
            Ready to Join Us?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 32 }}>
            Secure your seat at the counter today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/reservation" className="btn-gold">
              Reserve a Seat
            </Link>
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
