import { Link } from "react-router-dom";
import { Link2, User, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-mono text-xs text-[var(--muted)]">&lt;</span>
              <span className="font-display font-semibold text-[var(--off-white)]">dimas</span>
              <span className="font-mono text-xs text-[var(--muted)]">/&gt;</span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Fullstack Developer & ML Engineer based in Bogor, Indonesia.
              Building clean, performant, and thoughtful digital experiences.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--muted)] mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Portfolio", to: "/portofolio" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--muted)] mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:susilodim@gmail.com"
                  className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
                >
                  <Mail size={14} />
                  susilodim@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dimas-susilo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
                >
                  <Link2 size={14} />
                  linkedin.com/in/dimas-susilo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
                >
                  <User size={14} />
                  github.com/dimas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hr-glow my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[var(--muted)]">
            © {year} Muhammad Dimas Susilo. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[var(--muted)]">
            Built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
