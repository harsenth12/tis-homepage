import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("tis-theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;

    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tis-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tis-theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <a href="#" className="logo">
        TULAS
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#campus">Campus</a>
        <a href="#admissions">Admissions</a>
      </nav>

      <div className="nav-actions">

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="nav-btn">
          Apply Now
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#academics" onClick={closeMenu}>Academics</a>
          <a href="#campus" onClick={closeMenu}>Campus</a>
          <a href="#admissions" onClick={closeMenu}>Admissions</a>
        </div>
      )}

    </header>
  );
}

export default Navbar;