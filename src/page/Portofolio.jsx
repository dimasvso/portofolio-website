import { useState } from "react";
import { ExternalLink, Code2, Tag } from "lucide-react";
import ConnectCoffee from "../assets/ConnectCoffee.png";
import TokoBunga from "../assets/Bungaku.png";
import ConnectCompro from "../assets/ConnectCompro.png";
import Certificate1 from "../assets/Dicoding-Frond End.png";
import Certificate2 from "../assets/Dicoding-JS.png";
import Certificate3 from "../assets/DicodingPython.png";
import Certificate4 from "../assets/DQLAB-DPB-Python.png";
import Certificate5 from "../assets/K3.png";
import Certificate6 from "../assets/ML-KMeans.png";
import Certificate7 from "../assets/MySkillFrontendjs.png";

const PROJECTS = [
  {
    title: "ConnectCoffee",
    desc: "Smart order management system for coffee shops. Full-stack web app with real-time order tracking and inventory management.",
    image: ConnectCoffee,
    tags: ["React", "Express", "Prisma"],
    type: "FullStack",
    snippet: `// Order state machine
const order = await Order.create({
  items: cart.items,
  status: 'pending',
  customer: req.user.id
});
await notify(order.id);`,
  },
  {
    title: "Toko Bunga",
    desc: "E-commerce platform for a flower shop with product catalog, cart system, and integrated online payment gateway.",
    image: TokoBunga,
    tags: ["React", "Tailwind", "Django"],
    type: "FullStack",
    snippet: `// Payment integration
const session = await stripe
  .checkout.sessions.create({
    line_items: cartItems,
    mode: 'payment',
    success_url: '/success'
  });`,
  },
  {
    title: "Company Profile",
    desc: "Modern, responsive company profile website with animated sections, team showcase, and contact form.",
    image: ConnectCompro,
    tags: ["React", "Tailwind CSS"],
    type: "Frontend",
    snippet: `// Animated hero section
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.6 }
  }
};`,
  },
];

const CERTS = [
  {
    image: Certificate1,
    title: "Frontend Web Development",
    issuer: "Dicoding",
    tags: ["Frontend", "Web"],
  },
  {
    image: Certificate2,
    title: "JavaScript Programming",
    issuer: "Dicoding",
    tags: ["JavaScript", "Programming"],
  },
  {
    image: Certificate3,
    title: "Python Programming",
    issuer: "Dicoding",
    tags: ["Python", "Programming"],
  },
  {
    image: Certificate4,
    title: "Data Processing with Python",
    issuer: "DQLab",
    tags: ["Python", "Data Science"],
  },
  {
    image: Certificate5,
    title: "K3 Safety Certification",
    issuer: "K3",
    tags: ["Safety", "Professional"],
  },
  {
    image: Certificate6,
    title: "Machine Learning — K-Means",
    issuer: "Independent",
    tags: ["ML", "Data Science"],
  },
  {
    image: Certificate7,
    title: "Frontend JavaScript",
    issuer: "MySkill",
    tags: ["Frontend", "JavaScript"],
  },
];

const ALL_CERT_TAGS = ["All", ...new Set(CERTS.flatMap((c) => c.tags))];

/* ── Project Card ── */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="neo-card rounded-lg overflow-hidden group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${hovered ? "scale-105 brightness-30" : "scale-100 brightness-100"
            }`}
        />
        {/* Code snippet overlay */}
        <div
          className={`absolute inset-0 p-4 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
            }`}
        >
          <pre className="font-mono text-xs text-[var(--accent)] leading-relaxed text-left whitespace-pre-wrap">
            {project.snippet}
          </pre>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="tag">{project.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-semibold text-[var(--off-white)]">
            {project.title}
          </h3>
          <ExternalLink
            size={14}
            className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors mt-1 flex-shrink-0"
          />
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cert Card ── */
function CertCard({ cert }) {
  return (
    <div className="neo-card rounded-lg overflow-hidden group">
      <div className="relative h-44 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--carbon)] via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-4">
        <p className="font-mono text-xs text-[var(--muted)] mb-1">{cert.issuer}</p>
        <h4 className="font-display text-sm font-semibold text-[var(--off-white)] mb-3 leading-snug">
          {cert.title}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {cert.tags.map((t) => (
            <span key={t} className="tag text-[0.65rem]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredCerts =
    activeTag === "All"
      ? CERTS
      : CERTS.filter((c) => c.tags.includes(activeTag));

  return (
    <div className="pt-24 pb-16">
      {/* ── Projects ── */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="mb-14">
          <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-4">
            // project archive
          </p>
          <h1 className="font-display text-5xl font-bold text-[var(--off-white)] mb-4">
            Selected Work
          </h1>
          <p className="text-[var(--muted)] max-w-xl">
            A curated set of projects spanning fullstack web, e-commerce, and
            data-driven applications. Hover a card to peek at the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      <hr className="hr-glow max-w-7xl mx-auto px-6" />

      {/* ── Certification Vault ── */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        <div className="mb-10">
          <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-4">
            // certification vault
          </p>
          <h2 className="font-display text-5xl font-bold text-[var(--off-white)] mb-4">
            Credentials
          </h2>
          <p className="text-[var(--muted)] max-w-xl mb-8">
            Verified certifications across frontend, backend, data science, and
            machine learning disciplines.
          </p>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2">
            {ALL_CERT_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${activeTag === t
                    ? "border-[var(--off-white)] text-[var(--off-white)] bg-[var(--surface-2)]"
                    : "border-[var(--border-glow)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCerts.map((c, i) => (
            <CertCard key={i} cert={c} />
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-[var(--muted)]">
              No certificates found for "{activeTag}"
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
