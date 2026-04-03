import useReveal from "../hooks/useReveal";
import {Sparkle, Target,Eye, BookOpen, UserRound, Users, BookOpenText } from 'lucide-react';

const cards = [
  {
    icon: <Target />, title: "Notre Mission", color: "#0b6e4f",
    items: [
      "Transmettre le savoir académique tout en inculquant les valeurs islamiques.",
      "Favoriser l'épanouissement intellectuel, moral et spirituel de chaque enfant.",
      "Préparer des citoyens responsables et conscients de leur foi.",
    ],
  },
  {
    icon: <Eye />, title: "Notre Vision", color: "#c9a227",
    items: [
      "Faire de chaque enfant un apprenant équilibré, capable de réussir dans le monde moderne.",
      "Rester profondément ancré dans sa foi et sa culture.",
      "Être l'école de référence en Éducation Franco-Arabe au Sénégal.",
    ],
  },
  {
    icon: <BookOpen />, title: "Nos Programmes", color: "#0b6e4f",
    items: [
      "Programme académique français : lecture, écriture, maths, sciences.",
      "Programme arabe et islamique : Coran, Hadiths, morale.",
      "Activités extrascolaires : concours, sorties, ateliers culturels.",
    ],
  },
];

const milestones = [
  { year: "Fondation", event: "Création de l'école avec une vision d'éducation bilingue unique à Zac Mbao." },
  { year: "Croissance", event: "Expansion des classes et accueil de plus de 200 élèves issus de la région." },
  { year: "Excellence",  event: "Reconnaissance pour les résultats académiques et les concours de mémorisation du Coran." },
  { year: "Aujourd'hui",  event: "Un établissement de référence combinant modernité académique et tradition islamique." },
];

const team = [
  { icon: UserRound, name: "Directrice Générale", role: "Direction", desc: "Passionnée d'éducation islamique et académique, fondatrice et pilier de l'école." },
  { icon:Users, name: "Corps Enseignant", role: "Pédagogie", desc: "Une équipe qualifiée et passionnée, dédiée à l'encadrement bilingue de chaque élève." },
  { icon: BookOpenText,  name: "Département Islamique", role: "Éducation Coranique", desc: "Des maîtres coraniques assurant la mémorisation et l'enseignement du Coran." },
];

export default function APropos() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <div className="relative px-6 pt-20 pb-32 text-center geo-bg">
        <div className="animate-fadeIn inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-5"
             style={{ background: "rgba(201,162,39,0.2)", color: "#e8c048" }}>
          <Sparkle className="w-4 h-4"/> NOTRE HISTOIRE 
        </div>
        <h1 className="mb-5 text-white animate-fadeUp font-amiri"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          À Propos de l'École
        </h1>
        <p className="max-w-xl mx-auto text-base leading-loose delay-200 animate-fadeUp"
           style={{ color: "rgba(255,255,255,0.78)" }}>
          L'École Franco-Arabe YAYE AMINATA est un établissement éducatif d'excellence situé à Zac Mbao,
          cité Sonatel, offrant une formation  islamique depuis sa création.
        </p>
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#fdf8f0" />
        </svg>
      </div>

      {/* ── Mission / Vision / Programmes ── */}
      <div className="px-6 py-20 geo-bg-light">
        <div ref={r1} className="grid max-w-6xl grid-cols-1 mx-auto reveal md:grid-cols-3 gap-7">
          {cards.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                 style={{ borderTop: `4px solid ${b.color}` }}>
              <div className="mb-4 text-4xl">{b.icon}</div>
              <h3 className="mb-4 text-2xl font-amiri" style={{ color: b.color }}>{b.title}</h3>
              <ul className="space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: b.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="px-6 py-20" style={{ background: "#fdf8f0" }}>
        <div ref={r2} className="max-w-3xl mx-auto reveal">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#c9a227" }}>NOTRE PARCOURS</span>
            <h2 className="mt-2 section-title center font-amiri" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Notre histoire en quelques étapes
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 rounded"
                 style={{ background: "linear-gradient(to bottom, #0b6e4f, #c9a227)" }} />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div
                    className="z-10 flex items-center justify-center flex-shrink-0 w-20 h-20 text-xs font-bold leading-tight text-center text-white rounded-full shadow-md"
                    style={{ background: i % 2 === 0 ? "#0b6e4f" : "#c9a227" }}
                  >
                    {m.year.length > 8   ? m.year.slice(0, 8) : m.year}
                  </div>
                  <div className="flex-1 p-5 bg-white shadow-sm rounded-2xl"
                       style={{ border: "1px solid rgba(11,110,79,0.08)" }}>
                    <div className="mb-1 text-sm font-bold" style={{ color: "#0b6e4f" }}>{m.year}</div>
                    <p className="text-sm leading-relaxed text-gray-500">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Équipe ── */}
      <div className="px-6 py-20 geo-bg-light">
        <div ref={r3} className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0b6e4f" }}>NOTRE ÉQUIPE</span>
            <h2 className="mt-2 section-title center font-amiri" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Une équipe qualifiée et passionnée
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((t, i) => {         
            const Icon = t.icon;        
            return (                    
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-full" style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}>
                  <Icon size={36} color="white" strokeWidth={1.5} /> 
                </div>
                <h3 className="mb-1 text-base font-bold text-gray-900">{t.name}</h3>
                <div className="mb-3 text-xs font-semibold" style={{ color: "#c9a227" }}>{t.role}</div>
                <p className="text-sm leading-relaxed text-gray-500">{t.desc}</p>
              </div>
            );                         
          })}                          
          </div>
        </div>
      </div>
    </div>
  );
}