import { useNavigate } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { Sparkle, MoveRight, BookOpen, Trophy, GraduationCap, ShieldCheck, Sprout, Star } from 'lucide-react';
import { FaMosque } from "react-icons/fa6";
import { PiHandsPrayingBold, PiStudentBold, } from "react-icons/pi";

const programs = [
  { 
    icon: BookOpen,          
    title: "Programme Académique français", 
    desc: "Lecture, écriture, mathématiques, sciences et culture générale." 
  },
  { 
    icon: FaMosque,          
    title: "Éducation Islamique",  
    desc: "Mémorisation du Coran, étude des Hadiths, morale islamique et comportement éthique." 
  },
  { 
    icon: PiStudentBold, 
    title: "Langue Arabe",          
    desc: "Lecture et écriture arabes, grammaire et expression pour une maîtrise complète." 
  },
  { 
    icon: Trophy,              
    title: "Activités Extrascolaires", 
    desc: "Concours de Coran, sorties pédagogiques, ateliers culturels et éducatifs." 
  },
];

const values = [
  { icon: PiHandsPrayingBold, label: "Foi & Spiritualité",      color: "#0b6e4f" },
  { icon: GraduationCap,      label: "Excellence Académique",   color: "#c9a227" }, 
  { icon: ShieldCheck,        label: "Discipline & Respect",    color: "#0b6e4f" }, 
  { icon: Sprout,             label: "Épanouissement Personnel",color: "#c9a227" },
];

const stats = [
  { n: "40+", label: "Élèves inscrits" },
  { n: "15+",  label: "Enseignants qualifiés" },
  { n: "3",    label: "Niveaux scolaires" },
  // { n: "10+",  label: "Années d'expérience" },
];

export default function Accueil() {
  const navigate = useNavigate();
  const goto = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <div>
      {/* ── HERO ── */}
      <div className="relative flex items-center min-h-screen overflow-hidden geo-bg">
        <div className="absolute rounded-full pointer-events-none -top-20 -right-20 w-96 h-96"
          style={{ border: "60px solid rgba(201,162,39,0.08)" }} />
        <div className="absolute rounded-full pointer-events-none -bottom-24 -left-16 w-72 h-72"
          style={{ border: "40px solid rgba(201,162,39,0.06)" }} />
        <div className="pointer-events-none animate-spin-slow"
          style={{ position:"absolute", top: "20%", right: "8%", width: 120, height: 120, opacity: 0.12 }}>
          <svg viewBox="0 0 100 100" fill="none">
            <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="#c9a227"/>
          </svg>
        </div>

        <div className="w-full max-w-6xl px-6 pb-20 mx-auto pt-28">
          <div className="flex items-center justify-center min-h-screen text-center">
            <div>
              <div className="animate-fadeIn inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-6"
                style={{ background: "rgba(201,162,39,0.18)", color: "#e8c048" }}>
                <Sparkle className="w-4 h-4" /> ZAC MBAO, CITÉ SONATEL
              </div>

              <h1 className="mb-5 leading-tight text-white animate-fadeUp font-amiri"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
                École Franco-Arabe<br />
                <span className="gradient-text">YAYE AMINATA</span>
              </h1>

              <p className="max-w-lg mb-8 text-base leading-relaxed delay-200 animate-fadeUp"
                style={{ color: "rgba(255,255,255,0.78)" }}>
                À Yaye Aminata, nous croyons que chaque enfant mérite une éducation complète
                qui allie savoir académique et valeurs spirituelles islamiques.
              </p>

              <div className="flex flex-wrap gap-3 delay-300 animate-fadeUp">
                <button onClick={() => goto("/contact")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)", boxShadow: "0 4px 20px rgba(11,110,79,0.4)" }}>
                  S'inscrire maintenant <MoveRight className="w-4 h-4" />
                </button>
                <button onClick={() => goto("/apropos")}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 border-white text-white transition-all hover:bg-white hover:text-[#0b6e4f]">
                  Découvrir l'école
                </button>
              </div>

              <div className="p-5 mt-10 animate-fadeUp delay-400 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.07)", borderLeft: "3px solid #c9a227", backdropFilter: "blur(8px)" }}>
                <p className="text-lg italic leading-relaxed font-amiri"
                  style={{ color: "rgba(255,255,255,0.85)" }}>
                  "Apprendre avec le cœur et l'esprit,<br/>grandir avec foi et savoir."
                </p>
              </div>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#fdf8f0" />
        </svg>
      </div>

      {/* ── STATS ── */}
      <div ref={r1} className="px-6 py-16 reveal" style={{ background: "#fdf8f0" }}>
        <div className="grid max-w-4xl grid-cols-2 gap-5 mx-auto md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-white shadow-md rounded-2xl p-7"
              style={{ borderTop: "4px solid #0b6e4f" }}>
              <div className="mb-1 text-4xl font-bold font-amiri" style={{ color: "#0b6e4f" }}>{s.n}</div>
              <div className="text-xs font-medium text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROGRAMMES ── */}
      <div className="px-6 py-20 geo-bg-light">
        <div ref={r2} className="max-w-6xl mx-auto reveal">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0b6e4f" }}>
              NOS PROGRAMMES
            </span>
            <h2 className="mt-2 section-title center font-amiri" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
              Une éducation complète et équilibrée
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => {
              const Icon = p.icon; // ← majuscule obligatoire
              return (
                <div key={i}
                  className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  style={{ border: "1px solid rgba(11,110,79,0.08)" }}>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}>
                    <Icon size={22} color="white" />
                  </div>

                  <h3 className="text-base font-bold mb-2.5" style={{ color: "#0b6e4f" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── VALEURS ── */}
      <div className="px-6 py-20" style={{ background: "#fdf8f0" }}>
        <div ref={r3} className="grid items-center max-w-5xl grid-cols-1 gap-16 mx-auto reveal md:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#c9a227" }}>
              NOS VALEURS
            </span>
            <h2 className="mt-2 section-title font-amiri mb-7" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Former l'enfant dans sa globalité
            </h2>
            <p className="mb-8 text-sm leading-loose text-gray-500">
              L'École Franco-Arabe YAYE AMINATA offre une formation complète combinant
              enseignement académique français et éducation islamique, à Zac Mbao, cité Sonatel.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => {
                const Icon = v.icon; // ← majuscule obligatoire
                return (
                  <div key={i}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white shadow-sm"
                    style={{ borderLeft: `3px solid ${v.color}` }}>

                    {/* ✅ Icône dans un carré coloré */}
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
                      style={{ background: `${v.color}18` }}>
                      <Icon size={16} style={{ color: v.color }} />
                    </div>

                    <span className="text-xs font-bold text-gray-800">{v.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Circle Mission ── */}
          <div className="flex justify-center">
            <div
              className="relative flex flex-col items-center justify-center p-8 text-center text-white rounded-full w-72 h-72"
              style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)", boxShadow: "0 20px 60px rgba(11,110,79,0.3)" }}>

              {/* ✅ Star lucide à la place de 🌟 */}
              <Star size={48} color="rgba(255,255,255,0.9)" strokeWidth={1.5} className="mb-3" />

              <div className="text-xl font-bold font-amiri">Notre Mission</div>
              <div className="mt-2 text-xs leading-relaxed opacity-80">
                Former des enfants épanouis, instruits et ancrés dans leurs valeurs
              </div>
              <div className="absolute rounded-full pointer-events-none"
                style={{ inset: -24, border: "2px dashed rgba(11,110,79,0.2)" }} />
              <div className="absolute rounded-full pointer-events-none"
                style={{ inset: -50, border: "1px dashed rgba(201,162,39,0.2)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div ref={r4} className="px-6 py-20 text-center reveal geo-bg">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-4 text-white font-amiri" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
            Rejoignez notre communauté scolaire
          </h2>
          <p className="mb-8 text-base leading-loose" style={{ color: "rgba(255,255,255,0.75)" }}>
            Inscrivez votre enfant dès aujourd'hui et offrez-lui une éducation d'excellence
            alliant académique et spiritualité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => goto("/contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#0b6e4f] font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #c9a227, #e8c048)", boxShadow: "0 4px 20px rgba(201,162,39,0.4)" }}>
              Demander une inscription 
            </button>
            <button onClick={() => goto("/galerie")}
              className="px-7 py-3 rounded-full border-2 border-white text-white font-semibold text-sm transition-all hover:bg-white hover:text-[#0b6e4f]">
              Voir la galerie →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}