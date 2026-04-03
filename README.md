#  École Franco-Arabe YAYE AMINATA

> Site web officiel de l'École Franco-Arabe Yaye Aminata — Zac Mbao, Cité Sonatel, Dakar, Sénégal.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=flat&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat&logo=reactrouter)

---

##  Table des matières

- [Aperçu](#-aperçu)
- [Technologies](#-technologies)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Pages](#-pages)
- [Fonctionnalités](#-fonctionnalités)
- [Icônes](#-icônes)
- [Contact & Réseaux sociaux](#-contact--réseaux-sociaux)
- [Scripts disponibles](#-scripts-disponibles)

---

##  Aperçu

Site web moderne et responsive pour l'**École Franco-Arabe Yaye Aminata**, un établissement d'excellence combinant enseignement académique français et éducation islamique.

**Slogan :** *"Apprendre avec le cœur et l'esprit, grandir avec foi et savoir."*

### Caractéristiques visuelles
-  Palette **vert émeraude & or** inspirée de l'esthétique islamique
-  Motifs géométriques islamiques en arrière-plan
-  Animations fluides au scroll et au chargement
-  Entièrement **responsive** (mobile, tablette, desktop)
-  Polices **Amiri** (titres arabesques) + **Poppins** (texte)

---

## 🛠 Technologies

| Technologie | Version | Usage |
|---|---|---|
| **React** | 18 | Framework UI |
| **Vite** | 8 | Bundler & Dev server |
| **Tailwind CSS** | 3 | Styles utilitaires |
| **React Router DOM** | 7 | Navigation entre pages |
| **Lucide React** | latest | Icônes génériques |
| **React Icons** | latest | Icônes réseaux sociaux |

---

##  Structure du projet

```
ecole-yaye-aminata/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.jpeg              # Logo de l'école
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation fixe avec menu mobile
│   │   └── Footer.jsx             # Pied de page avec réseaux sociaux
│   ├── hooks/
│   │   └── useReveal.js           # Hook animation au scroll
│   ├── pages/
│   │   ├── Accueil.jsx            # Page d'accueil
│   │   ├── APropos.jsx            # Page à propos
│   │   ├── Galerie.jsx            # Galerie photos
│   │   └── Contact.jsx            # Page contact & inscription
│   ├── App.jsx                    # Routes principales
│   ├── index.css                  # Styles globaux + Tailwind
│   └── main.jsx                   # Point d'entrée
├── .env                           # Variables d'environnement
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Installation

### Prérequis

- **Node.js** v18 ou supérieur
- **npm** v9 ou supérieur

### Étapes

```bash
# 1. Cloner le projet
git clone https://github.com/votre-repo/ecole-yaye-aminata.git
cd ecole-yaye-aminata

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**

### Installation depuis zéro

```bash
# Créer le projet
npm create vite@latest ecole-yaye-aminata -- --template react
cd ecole-yaye-aminata
npm install

# Installer les dépendances supplémentaires
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
npm install lucide-react
npm install react-icons
```

---

##  Pages

###  Accueil (`/`)
- **Hero** animé avec motif géométrique islamique et étoile tournante
- **Statistiques** : élèves, enseignants, niveaux, années d'expérience
- **Programmes** : Académique, Islamique, Arabe, Extrascolaire
- **Valeurs** : Foi, Excellence, Discipline, Épanouissement
- **CTA** banner d'inscription

###  À Propos (`/apropos`)
- **Hero** avec présentation de l'école
- **Mission / Vision / Programmes** en 3 cartes
- **Timeline** du parcours de l'école
- **Équipe pédagogique** : Direction, Enseignants, Département islamique

###  Galerie (`/galerie`)
- **Filtres** par catégorie : Académique, Islamique, Parascolaire, Événements
- **Grille responsive** de photos avec effet hover
- **Lightbox** au clic pour agrandir les photos

###  Contact (`/contact`)
- **Informations** de contact avec icônes
- **Formulaire** d'inscription : nom, téléphone, email, niveau, message
- **Bouton WhatsApp** direct pour contact immédiat
- **Réseaux sociaux** : Facebook, Instagram, WhatsApp

---

## ✨ Fonctionnalités

### Navigation
- Navbar **transparente** sur hero → **opaque** au scroll
- **Menu hamburger** sur mobile avec animation
- Logo de l'école avec **effet hover**
- Lien **"S'inscrire"** mis en évidence

### Animations
- `animate-fadeUp` — apparition de bas en haut
- `animate-fadeIn` — fondu à l'entrée
- `animate-float` — flottement continu
- `animate-spin-slow` — rotation lente (étoile décorative)
- `animate-shimmer` — clignotement (bouton de chargement)
- **Reveal au scroll** via `IntersectionObserver`

### Responsive
| Breakpoint | Comportement |
|---|---|
| Mobile `< 768px` | 1 colonne, menu hamburger |
| Tablette `768px` | 2 colonnes, navbar complète |
| Desktop `> 1024px` | Mise en page complète |

---

##  Palette de couleurs

```css
--emerald:       #0b6e4f   /* Vert principal */
--emerald-dark:  #084d37   /* Vert foncé (fond) */
--emerald-light: #13a070   /* Vert clair (dégradés) */
--gold:          #c9a227   /* Or principal */
--gold-light:    #e8c048   /* Or clair */
--cream:         #fdf8f0   /* Fond crème */
```

---

## 🔣 Icônes

### Lucide React
```jsx
import { 
  BookOpen, Trophy, GraduationCap, ShieldCheck, Sprout, Star,
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Sparkle, MoveRight, Menu, X
} from "lucide-react"
```

### React Icons
```jsx
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaMosque } from "react-icons/fa6"
import { PiArabicLettersBold, PiHandsPrayingBold } from "react-icons/pi"
```

---

## 📬Contact & Réseaux sociaux

| Canal | Lien |
|---|---|
|  Adresse | Zac Mbao, Cité Sonatel, Dakar, Sénégal |
|  Téléphone | +221 71 126 59 10 |
|  Email | ecole.francoarabe.yayeamina@gmail.com |
|  Facebook | [École Franco-Arabe Yaye Aminata](https://www.facebook.com/share/1JwbP5oyoe/) |
|  Instagram | [@ecolefranco_arabe_yaye_aminata](https://www.instagram.com/ecolefranco_arabe_yaye_aminata) |
|  WhatsApp | [+221 71 126 59 10](https://wa.me/221711265910) |

---

##  Scripts disponibles

```bash
# Lancer en développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview

# Vérifier le code
npm run lint
```

---

##  À propos de l'école

L'**École Franco-Arabe Yaye Aminata** est un établissement éducatif d'excellence situé à **Zac Mbao, Cité Sonatel, Dakar**. Elle offre une formation complète combinant :

-  **Programme académique français** : lecture, écriture, mathématiques, sciences
-  **Programme islamique** : mémorisation du Coran, étude des Hadiths, morale
-  **Langue arabe** : lecture, écriture, grammaire
-  **Activités extrascolaires** : concours, sorties pédagogiques, ateliers

### Niveaux scolaires
```
Maternelle : Petite Section → Moyenne Section → Grande Section
Primaire   : CI → CP → CE1 → CE2 → CM1 → CM2
```

---

## 🗓 Horaires

| Jour | Horaires |
|---|---|
| Lundi – Vendredi | 8h30 – 17h00 |
| Samedi | 8h00 – 13h00 |

---

*Développé avec ❤️ pour Awa Sylla pour l'École Franco-Arabe Yaye Aminata — Dakar, Sénégal 🇸🇳*