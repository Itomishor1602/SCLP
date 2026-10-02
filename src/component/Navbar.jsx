import logo from "../assets/logo.png";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="flex items-center justify-between p-4" id="home">

      {/* Logo */}
      <img
        src={logo}
        alt="Great Saint Charles Lwanga Catholic Parish logo"
        className="h-20 w-20"
      />

      {/* Navigation */}
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:underline">
          <a href="#home">Home</a>
          
        </li>

        <li className="cursor-pointer hover:underline">
          <a href="#about">About</a>
        </li>

        <li className="cursor-pointer hover:underline">
          <a href="#map">Find Us</a>
        </li>
      </ul>

      {/* Theme button */}
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${
          theme === "light" ? "dark" : "light"
        } mode`}
        className="rounded-full p-3 transition hover:bg-gray-200 dark:hover:bg-slate-700"
      >
        {theme === "light" ? (
          <Moon size={22} />
        ) : (
          <Sun size={22} />
        )}
      </button>

    </nav>
  );
};

export default Navbar;