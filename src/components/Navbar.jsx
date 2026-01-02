import React from "react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

const Navbar = ({ lang, setLang, siteName }) => {
  const t = content[lang].nav;

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo and site name */}
        <Link to="/" className="flex items-center gap-3 pr-4 border-r border-gray-300">
          <img
            src="/logo.png"
            alt="Jnanalaya Logo"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-lg font-semibold text-primaryBlue">
              {siteName.title}
            </h1>
            <p className="text-sm text-gray-500">{siteName.subtitle}</p>
          </div>
        </Link>

        {/* Navigation links and language switcher */}
        <div className="flex items-center gap-6">
          {/* Navigation links */}
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#home" className="hover:text-primaryRed">
              {t.home}
            </a>
            <a href="#about" className="hover:text-primaryRed">
              {t.about}
            </a>
            <a href="#programs" className="hover:text-primaryRed">
              {t.programs}
            </a>
            <a href="#research" className="hover:text-primaryRed">
              {t.research}
            </a>
            <a href="#contact" className="hover:text-primaryRed">
              {t.contact}
            </a>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-4 border-r pr-4 border-gray-300">
            <button
              onClick={() => setLang(lang === "np" ? "en" : "np")}
              className="font-semibold"
            >
              {lang === "np" ? "En" : "ने"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
