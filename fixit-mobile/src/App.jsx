import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Repairs from "./pages/Repairs";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollTop";
import PageTransition from "./components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </PageTransition>
  );
}

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    // expose lenis globally
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
};

export default App;