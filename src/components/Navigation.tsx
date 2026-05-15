"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { RESTAURANT } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Omakase",
    href: "/omakase",
    children: [
      { label: "Hana — 華", href: "/omakase#hana" },
      { label: "Miyabi — 雅", href: "/omakase#miyabi" },
      { label: "Shin — 心", href: "/omakase#shin" },
      { label: "Tokusen — 特選", href: "/omakase#tokusen" },
    ],
  },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "JP">("EN");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled
          ? "rgba(9,8,10,0.96)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(201,169,110,0.1)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              className="serif"
              style={{ fontSize: "1.05rem", fontWeight: 400, color: "var(--accent-gold)", letterSpacing: "0.05em" }}
            >
              {RESTAURANT.nameJP}
            </span>
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginTop: 2,
              }}
            >
              {RESTAURANT.name.toUpperCase()} &nbsp;OMAKASE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            listStyle: "none",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`nav-link ${pathname.startsWith(link.href) ? "active" : ""}`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={10}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 16px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(14,12,15,0.97)",
                      border: "1px solid var(--border-subtle)",
                      backdropFilter: "blur(12px)",
                      minWidth: 200,
                      padding: "8px 0",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="hidden-mobile">
          <Link href="/reservation" className="btn-gold" style={{ fontSize: "0.62rem" }}>
            Reserve a Seat
          </Link>
          <button
            onClick={() => setLang(lang === "EN" ? "JP" : "EN")}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {lang === "EN" ? "JP" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(9,8,10,0.98)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "24px 0 32px",
          }}
        >
          <div className="container-xl" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "12px 0",
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: pathname === link.href ? "var(--accent-gold)" : "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 20 }}>
              <Link href="/reservation" className="btn-gold" style={{ fontSize: "0.62rem" }}>
                Reserve a Seat
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
