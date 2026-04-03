import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";

const links = [
  { path: "/",        label: "Accueil" },
  { path: "/apropos", label: "À Propos" },
  { path: "/galerie", label: "Galerie" },
  { path: "/contact", label: "Contact" },
];

const contactItems = [
  { icon: MapPin,  text: "Zac Mbao, Cité Sonatel, Dakar" },
  { icon: Phone,   text: "+221 71 126 59 10" },
  { icon: Mail,    text: "ecole.francoarabe.yayeamina@gmail.com" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook", color: "#1877f2", href: "https://www.facebook.com/share/1JwbP5oyoe/" },
  { icon: FaInstagram, label: "Instagram", color: "#e4405f", href: "https://www.instagram.com/ecolefranco_arabe_yaye_aminata?utm_source=qr&igsh=MW00MHE5NXhxdnRhOA==" },
  { icon: FaWhatsapp,  label: "WhatsApp", color: "#25d366", href: "https://wa.me/221711265910?text=Bonjour" },
  { icon: FaYoutube,    label: "YouTube",   color: "#ff0000", href: "#" },
  { icon: FaTiktok,     label: "TikTok",    color: "#ffffff", href: "https://www.tiktok.com/@ecolefrancoarabeyayeamin?_r=1&_t=ZS-93RoCHWGKtE" },
];

export default function Footer() {
  const navigate = useNavigate();
  const goto = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer className="pt-16 pb-8 geo-bg">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-shrink-0 overflow-hidden rounded-full"
                style={{ width: 56, height: 56, border: "2px solid rgba(201,162,39,0.5)",
                 background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
                <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight text-white">École Franco-Arabe</div>
                <div className="text-[11px] font-semibold tracking-widest mt-0.5" style={{ color: "#c9a227" }}>YAYE AMINATA</div>
              </div>
            </div>
            <p className="text-sm italic leading-loose font-amiri" style={{ color: "rgba(255,255,255,0.7)" }}>
              "Apprendre avec le cœur et l'esprit,<br />grandir avec foi et savoir."
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, label, href }) => {
                const IconComponent = Icon;
                return (
                  <a key={label} 
                    title={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 border-none cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <IconComponent size={16} color="white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9a227" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <button key={l.path} onClick={() => goto(l.path)}
                  className="flex items-center gap-2 text-sm text-left transition-colors duration-300 bg-transparent border-none cursor-pointer footer-link"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Poppins, sans-serif" }}>
                  <ArrowRight size={13} style={{ color: "#c9a227" }} />
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9a227" }}>
              Contact
            </h4>
            {contactItems.map(({ icon: IconComponent, text }, i) => {
              const Icon = IconComponent;
              return (
              <div key={i} className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  <Icon size={15} style={{ color: "#c9a227" }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {text}
                </span>
              </div>
            );
            })}
          </div>

          {/* Horaires */}
          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9a227" }}>
              Horaires
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
                style={{ background: "rgba(255,255,255,0.08)" }}>
                <Clock size={15} style={{ color: "#c9a227" }} />
              </div>
              <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                Lundi – Vendredi<br />
                <span className="font-semibold text-white">8h30 – 17h00</span><br />
                Samedi<br />
                <span className="font-semibold text-white">8h30 – 13h00</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2025 École Franco-Arabe Yaye Aminata. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Zac Mbao, Cité Sonatel, Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}