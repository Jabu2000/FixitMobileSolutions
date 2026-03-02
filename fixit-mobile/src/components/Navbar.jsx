import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const linkStyle = (path) =>
    `transition-colors duration-300 ${
      location.pathname === path
        ? "text-blue-500"
        : "text-white/80 hover:text-blue-400"
    }`;

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
      <nav
        ref={navRef}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-3 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-white hover:text-blue-600 font-semibold tracking-wide "
        >
          <img src="/src/assets/icon.png" className="h-8 w-8 mr-2 inline-block" />Fixit Mobile
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/repairs" className={linkStyle("/repairs")}>
            Repairs
          </Link>

          <Link to="/shop" className={linkStyle("/shop")}>
            Shop
          </Link>

          <a
            href="https://wa.me/27647254427"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/40"
          >
            Book Repair
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 w-full max-w-6xl px-4 md:hidden">
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 text-center shadow-2xl">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={linkStyle("/")}
            >
              Home
            </Link>

            <Link
              to="/repairs"
              onClick={() => setIsOpen(false)}
              className={linkStyle("/repairs")}
            >
              Repairs
            </Link>

            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className={linkStyle("/shop")}
            >
              Shop
            </Link>

            <a
              href="https://wa.me/27647254427"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-full"
            >
              Book Repair
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;