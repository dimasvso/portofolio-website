// Kept for backward compatibility — contact is now inlined in Navbar & Footer
export default function CtaContact() {
  return (
    <a
      href="https://www.linkedin.com/in/dimas-susilo/"
      target="_blank"
      rel="noreferrer"
    >
      <button className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[var(--border-glow)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--carbon)] transition-all duration-200 rounded-sm">
        Contact
      </button>
    </a>
  );
}
