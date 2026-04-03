import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { MapPin, Phone, Mail, Clock, Sparkle, Send, CheckCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const infos = [
  { icon: MapPin, title: "Adresse",   value: "Zac Mbao, Cité Sonatel, Dakar, Sénégal" },
  { icon: Phone,  title: "Téléphone", value: "+221 71 126 59 10" },
  { icon: Mail,   title: "Email",     value: "ecole.francoarabe.yayeamina@gmail.com" },
  { icon: Clock,  title: "Horaires",  value: "Lun – Ven : 8h30 – 17h00" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook",  color: "#1877f2", href: "https://www.facebook.com/share/1JwbP5oyoe/" },
  { icon: FaInstagram, label: "Instagram", color: "#e4405f", href: "https://www.instagram.com/ecolefranco_arabe_yaye_aminata" },
  { icon: FaWhatsapp,  label: "WhatsApp",  color: "#25d366", href: "https://wa.me/221711265910" },
];

const niveaux = [
  "Petite Section (Maternelle)", "Moyenne Section", "Grande Section",
  "CI", "CP", "CE1 – CE2", "CM1 – CM2",
];

const INITIAL_FORM = { nom: "", email: "", telephone: "", niveau: "", message: "" };

export default function Contact() {
  const r1 = useReveal();
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation envoi 1.5s
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(INITIAL_FORM);
    }, 1500);
  };

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <div className="relative px-6 pt-20 pb-32 text-center geo-bg">
        <div className="animate-fadeIn inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-5"
          style={{ background: "rgba(201,162,39,0.2)", color: "#e8c048" }}>
          <Sparkle className="w-4 h-4" /> NOUS CONTACTER
        </div>
        <h1 className="mb-4 text-white animate-fadeUp font-amiri"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          Contact & Inscription
        </h1>
        <p className="max-w-md mx-auto text-base delay-200 animate-fadeUp"
          style={{ color: "rgba(255,255,255,0.78)" }}>
          Inscrivez votre enfant ou contactez-nous pour toute information sur nos programmes et admissions.
        </p>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#fdf8f0" />
        </svg>
      </div>

      <div className="px-6 py-20" style={{ background: "#fdf8f0" }}>
        <div ref={r1} className="reveal max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* ── Sidebar infos ── */}
          <div>
            <h2 className="mb-8 section-title font-amiri"
              style={{ fontSize: "clamp(1.6rem,2.5vw,2rem)" }}>
              Informations de contact
            </h2>

            {/* Infos */}
            <div className="flex flex-col gap-4 mb-10">
              {infos.map(({ icon: Icon, title, value }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative flex flex-col items-center justify-center gap-2 overflow-hidden text-white rounded-2xl h-52"
              style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}>
              <MapPin size={36} strokeWidth={1.5} />
              <div className="text-base font-bold">Zac Mbao, Cité Sonatel</div>
              <div className="text-xs opacity-80">Dakar, Sénégal</div>
            </div>

            {/* Socials */}
            <div className="mt-7">
              <div className="mb-4 text-sm font-bold text-gray-900">Suivez-nous</div>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, label, color, href }) => (
                  <a key={label} href={href} title={label}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-xs font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ border: "1px solid #eee" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = color;
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "#374151";
                      e.currentTarget.style.borderColor = "#eee";
                    }}>
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="p-10 bg-white shadow-md rounded-2xl"
            style={{ border: "1px solid rgba(11,110,79,0.08)" }}>

            {sent ? (
              /* ── Message succès ── */
              <div className="py-10 text-center">
                <div className="flex justify-center mb-5">
                  <CheckCircle size={72} strokeWidth={1.5} style={{ color: "#0b6e4f" }} />
                </div>
                <h3 className="mb-3 text-2xl font-amiri" style={{ color: "#0b6e4f" }}>
                  Demande envoyée !
                </h3>
                <p className="mb-2 text-sm leading-loose text-gray-500">
                  Merci <span className="font-semibold text-gray-700">{form.nom || "cher parent"}</span>,
                  votre demande a bien été reçue.
                </p>
                <p className="mb-8 text-sm leading-loose text-gray-500">
                  Notre équipe vous contactera dans les plus brefs délais au
                  <span className="font-semibold text-gray-700"> +221 71 126 59 10</span>.
                </p>

                {/* Bouton WhatsApp direct */}
                <a href="https://wa.me/221711265910"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold mb-4 transition-all hover:-translate-y-0.5"
                  style={{ background: "#25d366", boxShadow: "0 4px 16px rgba(37,211,102,0.35)" }}>
                  <FaWhatsapp size={16} /> Contacter sur WhatsApp
                </a>

                <br />
                <button onClick={() => setSent(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:-translate-y-0.5 mt-2"
                  style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)" }}>
                  <Send size={14} /> Nouvelle demande
                </button>
              </div>

            ) : (
              /* ── Formulaire ── */
              <>
                <h2 className="mb-8 section-title font-amiri"
                  style={{ fontSize: "clamp(1.5rem,2vw,1.9rem)" }}>
                  Demande d'inscription
                </h2>

                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nom complet *
                      </label>
                      <input className="form-input" name="nom" value={form.nom}
                        onChange={handle} placeholder="Votre nom" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Téléphone *
                      </label>
                      <input className="form-input" name="telephone" value={form.telephone}
                        onChange={handle} placeholder="+221 XX XXX XX XX" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input className="form-input" name="email" type="email"
                      value={form.email} onChange={handle} placeholder="votre@email.com" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Niveau scolaire *
                    </label>
                    <select className="form-input" name="niveau" value={form.niveau}
                      onChange={handle} required style={{ cursor: "pointer" }}>
                      <option value="">Choisir un niveau…</option>
                      {niveaux.map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea className="form-input" name="message" value={form.message}
                      onChange={handle} placeholder="Questions, informations…"
                      rows={4} style={{ resize: "vertical" }} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #0b6e4f, #13a070)", boxShadow: "0 4px 20px rgba(11,110,79,0.3)" }}>
                    {loading ? (
                      <span className="animate-shimmer">Envoi en cours…</span>
                    ) : (
                      <><Send size={15} /> Envoyer la demande</>
                    )}
                  </button>

                  {/* Lien WhatsApp alternatif */}
                  <div className="pt-2 text-center">
                    <p className="mb-2 text-xs text-gray-400">Ou contactez-nous directement</p>
                    <a href="https://wa.me/221711265910"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                      style={{ background: "#25d366", boxShadow: "0 4px 12px rgba(37,211,102,0.3)" }}>
                      <FaWhatsapp size={14} /> WhatsApp : +221 71 126 59 10
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}