"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle, Check, Phone } from "lucide-react";
import { RESTAURANT, COURSES } from "@/lib/data";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const SEATINGS = ["5:30 PM", "8:00 PM"];
const UNAVAILABLE_DAYS = [1]; // Monday = 1

export default function Reservation() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  }

  function isDayDisabled(day: number) {
    const d = new Date(year, month, day);
    if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return true;
    if (UNAVAILABLE_DAYS.includes(d.getDay())) return true;
    return false;
  }

  function isToday(day: number) {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDay || !selectedTime || !name || !email) return;
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Shin Kai! I'd like to reserve a table.\nDate: ${selectedDay ? `${MONTHS[month]} ${selectedDay}, ${year}` : "TBD"}\nTime: ${selectedTime || "TBD"}\nGuests: ${guests}\nCourse: ${course || "TBD"}\nName: ${name || "—"}`
  );

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <div>
          <div
            style={{
              width: 70,
              height: 70,
              border: "1px solid var(--accent-gold)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
            }}
          >
            <Check size={28} color="var(--accent-gold)" />
          </div>
          <h1 className="display-md serif" style={{ marginBottom: 14 }}>
            Reservation Requested
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 8, maxWidth: 440, margin: "0 auto 12px" }}>
            Thank you, {name}. We&rsquo;ve received your reservation request for{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {MONTHS[month]} {selectedDay}, {year}
            </strong>{" "}
            at <strong style={{ color: "var(--text-primary)" }}>{selectedTime}</strong>.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 10, maxWidth: 440, margin: "0 auto 10px" }}>
            A confirmation will be sent to <em>{email}</em> within 24 hours.
          </p>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 40 }}>
            ご予約のリクエストを承りました。24時間以内にご連絡いたします。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/" className="btn-gold">Return Home</Link>
            <Link href="/omakase" className="btn-outline">Explore Omakase</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg-surface)",
          paddingTop: 140,
          paddingBottom: 70,
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-lg" style={{ textAlign: "center" }}>
          <span className="label-sm text-gold" style={{ display: "block", marginBottom: 16 }}>
            Reserve Your Seat
          </span>
          <h1 className="display-lg serif" style={{ marginBottom: 14 }}>
            Reserve Your Moment
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", maxWidth: 520, margin: "0 auto 8px" }}>
            We offer two seatings per evening at our intimate 12-seat counter. Reservations are confirmed within 24 hours.
          </p>
          <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            一日のご案内は二部制。カウンター席のみのご用意となります。
          </p>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-lg">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 60,
              alignItems: "start",
            }}
            className="res-form-grid"
          >
            {/* Left: Form */}
            <div>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Date */}
                <div style={{ marginBottom: 48 }}>
                  <h2 className="serif" style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: 6 }}>
                    Select a Date
                  </h2>
                  <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 24 }}>
                    日程を選択してください
                  </p>

                  {/* Calendar */}
                  <div
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      padding: "28px",
                    }}
                  >
                    {/* Month nav */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                      <button
                        type="button"
                        onClick={prevMonth}
                        style={{
                          background: "none",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-secondary)",
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
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
                        <ChevronLeft size={14} />
                      </button>
                      <span className="serif" style={{ fontSize: "1rem", fontWeight: 400 }}>
                        {MONTHS[month]} {year}
                      </span>
                      <button
                        type="button"
                        onClick={nextMonth}
                        style={{
                          background: "none",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-secondary)",
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
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
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    {/* Day headers */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 8 }}>
                      {DAYS.map((d) => (
                        <div
                          key={d}
                          style={{
                            textAlign: "center",
                            fontSize: "0.62rem",
                            letterSpacing: "0.12em",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                            padding: "4px 0",
                          }}
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Day grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                      {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`e${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const disabled = isDayDisabled(day);
                        const selected = selectedDay === day;
                        const todayDay = isToday(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={disabled}
                            onClick={() => setSelectedDay(day)}
                            className={`calendar-day${selected ? " selected" : ""}${todayDay ? " today" : ""}${disabled ? " disabled" : ""}`}
                            style={{
                              background: selected ? "var(--accent-gold)" : "transparent",
                              color: selected
                                ? "#09080a"
                                : todayDay
                                  ? "var(--accent-gold)"
                                  : disabled
                                    ? "var(--text-muted)"
                                    : "var(--text-secondary)",
                              border: selected ? "1px solid var(--accent-gold)" : "1px solid transparent",
                              cursor: disabled ? "not-allowed" : "pointer",
                              opacity: disabled ? 0.3 : 1,
                            }}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Legend */}
                    <div style={{ display: "flex", gap: 20, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.68rem", color: "var(--text-muted)" }}>
                        <div style={{ width: 8, height: 8, background: "var(--accent-gold)", borderRadius: "50%" }} />
                        Available
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.68rem", color: "var(--text-muted)" }}>
                        <div style={{ width: 8, height: 8, background: "var(--text-muted)", borderRadius: "50%", opacity: 0.3 }} />
                        Closed (Mon)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Time */}
                <div style={{ marginBottom: 48 }}>
                  <h2 className="serif" style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: 6 }}>
                    Select a Seating
                  </h2>
                  <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 20 }}>
                    時間を選択してください
                  </p>
                  <div style={{ display: "flex", gap: 14 }}>
                    {SEATINGS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`time-slot${selectedTime === time ? " selected" : ""}`}
                        style={{
                          flex: 1,
                          background: selectedTime === time ? "var(--accent-gold)" : "transparent",
                          border: selectedTime === time
                            ? "1px solid var(--accent-gold)"
                            : "1px solid var(--border-subtle)",
                          color: selectedTime === time ? "#09080a" : "var(--text-secondary)",
                          cursor: "pointer",
                          padding: "14px 0",
                          fontSize: "0.82rem",
                          letterSpacing: "0.06em",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Guests & Course */}
                <div style={{ marginBottom: 48 }}>
                  <h2 className="serif" style={{ fontSize: "1.4rem", fontWeight: 400, marginBottom: 6 }}>
                    Your Details
                  </h2>
                  <p className="jp" style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 20 }}>
                    お客様情報
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                        Number of Guests *
                      </label>
                      <select
                        className="input-dark"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                        Preferred Course
                      </label>
                      <select
                        className="input-dark"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option value="">Chef&rsquo;s selection</option>
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.name}>{c.name} ({c.nameJP}) — ${c.price}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
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
                        Email Address *
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

                  <div style={{ marginBottom: 16 }}>
                    <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="input-dark"
                      placeholder="+1 (212) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label-xs" style={{ color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
                      Special Notes / Dietary Restrictions
                    </label>
                    <textarea
                      className="input-dark"
                      placeholder="Allergies, dietary needs, special occasions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ opacity: !selectedDay || !selectedTime || !name || !email ? 0.5 : 1 }}
                  >
                    Confirm Reservation
                  </button>

                  <a
                    href={`https://wa.me/${RESTAURANT.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={14} />
                    Book via WhatsApp
                  </a>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 16, lineHeight: 1.7 }}>
                  By submitting, you agree to our cancellation policy. Full prepayment required to confirm. Cancellations within 48 hours are non-refundable.
                </p>
              </form>
            </div>

            {/* Right: Summary + Info */}
            <div>
              {/* Booking summary */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  padding: "32px",
                  marginBottom: 28,
                  position: "sticky",
                  top: 100,
                }}
              >
                <h3 className="serif" style={{ fontSize: "1.15rem", fontWeight: 400, marginBottom: 20 }}>
                  Your Reservation
                </h3>
                <div className="rule-subtle" style={{ marginBottom: 20 }} />

                {[
                  { label: "Date", value: selectedDay ? `${MONTHS[month]} ${selectedDay}, ${year}` : "Not selected" },
                  { label: "Seating", value: selectedTime || "Not selected" },
                  { label: "Guests", value: `${guests} ${guests === 1 ? "guest" : "guests"}` },
                  { label: "Course", value: course || "Chef's selection" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span className="label-xs" style={{ color: "var(--text-muted)" }}>{label}</span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: value.includes("selected") ? "var(--text-muted)" : "var(--text-primary)",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}

                <div className="rule-subtle" style={{ margin: "20px 0 16px" }} />
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Confirmation will be sent to your email within 24 hours. Full payment required to finalize.
                </p>
              </div>

              {/* Info card */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  padding: "32px",
                }}
              >
                <h3 className="serif" style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: 20 }}>
                  Prefer to Call?
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem", lineHeight: 1.75, marginBottom: 20 }}>
                  Our reservations team is available during restaurant hours. We&rsquo;re happy to assist with special arrangements.
                </p>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--accent-gold)", textDecoration: "none", fontSize: "0.88rem" }}
                >
                  <Phone size={14} />
                  {RESTAURANT.phone}
                </a>
                <div className="rule-subtle" style={{ margin: "20px 0" }} />
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  <div><strong style={{ color: "var(--text-primary)", fontSize: "0.78rem" }}>Hours:</strong></div>
                  <div>{RESTAURANT.hours.days}</div>
                  <div>{RESTAURANT.hours.times}</div>
                  <div style={{ color: "var(--text-muted)", marginTop: 4 }}>{RESTAURANT.hours.note}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .res-form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
