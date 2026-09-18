"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#experience"],
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo">
          GARVIT<span></span>
        </a>

        <div className="nav-links">
          {links.map(([name, href]) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-hire">
          Hire / Contact
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "75px",
            left: "15px",
            right: "15px",
            background: "white",
            borderRadius: "25px",
            padding: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,.15)",
          }}
        >
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "15px",
                fontWeight: 700,
                borderBottom: "1px solid #eee",
              }}
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: "15px",
              padding: "14px",
              borderRadius: "999px",
              background: "#111",
              color: "white",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Hire / Contact
          </a>
        </div>
      )}
    </nav>
  );
}