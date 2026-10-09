import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import dark from "../assets/darklogo.png"; 

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      id="home"
      className="relative z-50 border-b border-gray-200 `bg-[var(--card-bg)]` px-4 py-3 shadow-sm dark:border-slate-700"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <img
            src={theme === "light" ? logo : dark}
            alt="Great Saint Charles Lwanga Catholic Parish logo"
            className="h-full w-20 rounded-lg object-cover "
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden justify-center items-center gap-8 md:flex">
          <li>
            <a
              href="#home"
              className="font-medium transition hover:text-amber-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="font-medium transition hover:text-amber-600"
            >
              About
            </a>
          </li>
{/* 
          <li>
            <a
              href="#pastors"
              className="font-medium transition hover:text-amber-600"
            >
              Our Pastors
            </a>
          </li> */}

          <li>
            <a
              href="#map"
              className="font-medium transition hover:text-amber-600"
            >
              Find Us
            </a>
          </li>
        </ul>

        {/* Desktop Theme Button */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          className="hidden rounded-full p-3 transition hover:bg-gray-200 md:block dark:hover:bg-slate-700"
        >
          {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
        </button>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            {theme === "light" ? <Moon size={21} /> : <Sun size={21} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 dark:border-slate-700 md:hidden">
          <ul className="flex flex-col px-4 py-4">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium transition hover:bg-gray-100 hover:text-amber-600 dark:hover:bg-slate-700"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium transition hover:bg-gray-100 hover:text-amber-600 dark:hover:bg-slate-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#pastors"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium transition hover:bg-gray-100 hover:text-amber-600 dark:hover:bg-slate-700"
              >
                Our Pastors
              </a>
            </li>

            <li>
              <a
                href="#map"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-medium transition hover:bg-gray-100 hover:text-amber-600 dark:hover:bg-slate-700"
              >
                Find Us
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;