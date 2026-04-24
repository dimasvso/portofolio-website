import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portofolio" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              &lt;
            </span>
            <span className="font-display font-semibold text-[var(--off-white)] tracking-tight">
              dimas
            </span>
            <span className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              /&gt;
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[var(--off-white)]"
                    : "text-[var(--muted)] hover:text-[var(--off-white)]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-px w-full bg-[var(--accent)] transform transition-transform duration-300 origin-left ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/dimas-susilo/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[var(--border-glow)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--carbon)] transition-all duration-200 rounded-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } glass-strong border-t border-[var(--border)]`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                isActive(link.path)
                  ? "text-[var(--off-white)]"
                  : "text-[var(--muted)] hover:text-[var(--off-white)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/dimas-susilo/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] hover:text-[var(--off-white)] transition-colors"
          >
            Contact →
          </a>
        </div>
      </div>
    </nav>
  );
}
