import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { path: "/",        label: "Accueil" },
  { path: "/apropos", label: "À Propos" },
  { path: "/galerie", label: "Galerie" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const isHome    = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-700";
  const activeColor = "text-emerald-DEFAULT";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex items-center justify-between h-[72px]">
          
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-shrink-0 overflow-hidden rounded-full"
              style={{ width: 56, height: 56, border: "2px solid rgba(201,162,39,0.5)",
              background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
            <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
          <div className="text-sm font-bold leading-tight text-[#0b6e4f]">École Franco-Arabe</div>
          <div className="text-[11px] font-semibold tracking-widest mt-0.5" style={{ color: "#c9a227" }}>YAYE AMINATA</div>
        </div>
      </div>
          {/* Desktop links */}
          <div className="items-center hidden gap-8 md:flex">
            {links.map((l) => (
              <button
                key={l.path}
                onClick={() => goto(l.path)}
                className={`nav-link bg-transparent border-none cursor-pointer text-sm font-semibold transition-colors ${
                  location.pathname === l.path ? "active" : ""
                }`}
                style={{
                  color:
                    isHome && !scrolled
                      ? "white"
                      : location.pathname === l.path
                      ? "#0b6e4f"
                      : "#555",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => goto("/contact")}
              className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #0b6e4f, #13a070)",
                boxShadow: "0 4px 16px rgba(11,110,79,0.35)",
              }}
            >
              S'inscrire
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded transition-all"
                style={{ background: scrolled ? "#0b6e4f" : "white" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""} bg-white border-t border-gray-100`}>
        <div className="px-6 py-2">
          {links.map((l) => (
            <button
              key={l.path}
              onClick={() => goto(l.path)}
              className="block w-full py-3 text-sm font-semibold text-left bg-transparent border-b border-l-0 border-r-0 cursor-pointer border-gray-50"
              style={{ color: location.pathname === l.path ? "#0b6e4f" : "#444" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => goto("/contact")}
            className="w-full py-3 mt-3 mb-3 text-sm font-semibold text-white rounded-full"
            style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </nav>
  );
}