import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { Sparkle } from 'lucide-react';

const photos = [
  { url: "/src/assets/image1.jpeg", label: "Salle de classe",category: "Académique",    tall: true  },
  { url: "/src/assets/image2.jpeg", label: "Activités islamiques", category: "Islamique",     tall: true },
  { url: "/src/assets/image3.jpeg", label: "Cours de lecture", category: "Académique",    tall: false },
  { url: "/src/assets/image1.jpeg", label: "Activités parascolaires", category: "Parascolaire",  tall: true  },
  { url: "/src/assets/image3.jpeg", label: "Sortie pédagogique",       category: "Parascolaire",  tall: true },
  { url: "/src/assets/image3.jpeg", label: "Apprentissage en groupe",  category: "Académique",    tall: true },
  { url: "/src/assets/image1.jpeg", label: "Lecture du Coran",         category: "Islamique",     tall: true  },
  { url: "/src/assets/image2.jpeg", label: "Concours scolaire",        category: "Événements",    tall: false },
];

const cats = ["Tous", "Académique", "Islamique", "Parascolaire", "Événements"];

export default function Galerie() {
  const [filter,   setFilter]   = useState("Tous");
  const [selected, setSelected] = useState(null);
  const r1 = useReveal();

  const filtered = filter === "Tous" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <div className="relative px-6 pt-20 pb-32 text-center geo-bg">
        <div className="animate-fadeIn inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-5"
             style={{ background: "rgba(201,162,39,0.2)", color: "#e8c048" }}>
          <Sparkle className="w-4 h-4" /> VIE SCOLAIRE 
        </div>
        <h1 className="mb-4 text-white animate-fadeUp font-amiri"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Notre Galerie
        </h1>
        <p className="max-w-md mx-auto text-base delay-200 animate-fadeUp"
           style={{ color: "rgba(255,255,255,0.78)" }}>
          Découvrez la vie scolaire animée et les moments précieux de l'École Franco-Arabe Yaye Aminata.
        </p>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#fdf8f0" />
        </svg>
      </div>

      <div className="px-6 py-16" style={{ background: "#fdf8f0" }}>
        <div ref={r1} className="max-w-6xl mx-auto reveal">

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-5 py-2 text-sm font-semibold transition-all border-2 rounded-full cursor-pointer"
                style={{
                  borderColor:  filter === c ? "#0b6e4f" : "#e0e0e0",
                  background:   filter === c ? "#0b6e4f" : "white",
                  color:        filter === c ? "white"   : "#666",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="cursor-pointer gallery-item"
                style={{ height: p.tall ? 300 : 220 }}
                onClick={() => setSelected(p)}
              >
                <img src={p.url} alt={p.label} />
                <div className="gallery-overlay">
                  <div>
                    <div className="text-sm font-bold">{p.label}</div>
                    <div className="text-xs opacity-80 mt-0.5">{p.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fadeIn"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl animate-scaleIn"
            style={{ background: "#111", boxShadow: "0 20px 80px rgba(0,0,0,0.8)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.url} alt={selected.label}
                 className="object-cover w-full" style={{ maxHeight: "70vh" }} />
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <div className="text-base font-bold text-white">{selected.label}</div>
                <div className="mt-1 text-xs font-semibold" style={{ color: "#c9a227" }}>{selected.category}</div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="flex items-center justify-center text-lg text-white border-none rounded-full cursor-pointer w-9 h-9"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}