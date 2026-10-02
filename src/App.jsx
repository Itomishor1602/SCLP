import { useEffect, useState } from "react";


import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Pastors from "./component/Pastors";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
const [theme, setTheme] = useState(() => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)]">

      {/* Navbar */}
     <Navbar
  theme={theme}
  toggleTheme={toggleTheme}
/>

    

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Pastors */}
      <Pastors />

      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />


    </div>
  );
}

export default App;