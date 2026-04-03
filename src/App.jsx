import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Accueil  from "./pages/Accueil";
import APropos  from "./pages/APropos";
import Galerie  from "./pages/Galerie";
import Contact  from "./pages/Contact";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="animate-fadeIn">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}