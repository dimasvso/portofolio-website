import { useEffect, useRef, useState } from "react";
import { ArrowRight, Terminal, Cpu, Globe, Database, Code2, GitBranch, Layers, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../assets/dimasAI.jpeg";

/* ── Tech Stack data ── */
const STACK = [
  { label: "React", icon: <Code2 size={16} /> },
  { label: "Python", icon: <Terminal size={16} /> },
  { label: "Django", icon: <Layers size={16} /> },
  { label: "JavaScript", icon: <Zap size={16} /> },
  { label: "Tailwind CSS", icon: <Globe size={16} /> },
  { label: "Machine Learning", icon: <Cpu size={16} /> },
  { label: "PostgreSQL", icon: <Database size={16} /> },
  { label: "Git", icon: <GitBranch size={16} /> },
];

const PROCESS = [
  {
    step: "01",
    title: "Research",
    desc: "Deep-dive into requirements, user needs, and technical constraints before writing a single line.",
    tag: "discovery",
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Design system structure, data flow, and component hierarchy. Logic before code.",
    tag: "design",
  },
  {
    step: "03",
    title: "Build",
    desc: "Iterative development with clean, readable code. Test early, test often.",
    tag: "development",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "CI/CD pipeline, performance audit, and monitoring. Ship with confidence.",
    tag: "deployment",
  },
];


const LANG_BARS = [
  { lang: "Python", pct: 42, color: "#3b82f6" },
  { lang: "JavaScript", pct: 35, color: "#f2f2f2" },
  { lang: "HTML/CSS", pct: 15, color: "#8a8a8e" },
  { lang: "SQL", pct: 8, color: "#4ade80" },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const target = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

function LangBar({ lang, pct, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-[var(--muted)]">{lang}</span>
        <span className="font-mono text-xs text-[var(--muted)]">{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-[var(--surface-2)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: color }}
        />
      </div>
    </div>
  );
}

const TERMINAL_LINES = [
  "$ whoami",
  "> Muhammad Dimas Susilo",
  "$ cat skills.txt",
  "> Fullstack Dev | ML Engineer | Data Science",
  "$ uptime",
  "> 8 months frontend · 2 months fullstack",
  "$ status",
  "> Available for opportunities ✓",
];

export default function HomePage() {
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    if (terminalIndex >= TERMINAL_LINES.length) return;
    const timer = setTimeout(() => {
      setTerminalIndex((prev) => prev + 1);
    }, 320);
    return () => clearTimeout(timer);
  }, [terminalIndex]);

  const terminalLines = TERMINAL_LINES.slice(0, terminalIndex);

  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-glow) 1px, transparent 1px), linear-gradient(90deg, var(--border-glow) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div className="space-y-8 fade-up">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--green)] glow-green" />
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
                  Available for work
                </span>
              </div>

              <div>
                <p className="font-mono text-sm text-[var(--muted)] mb-3">
                  Hello, I'm
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] gradient-text text-glow">
                  Muhammad
                  <br />
                  Dimas
                  <br />
                  Susilo
                </h1>
              </div>

              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-md">
                Fullstack Developer · ML Engineer · Data Science Enthusiast.
                I build systems that are{" "}
                <span className="text-[var(--accent)]">fast, clean, and purposeful</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portofolio"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--off-white)] text-[var(--carbon)] font-display font-semibold text-sm rounded-sm hover:bg-[var(--accent)] transition-colors duration-200"
                >
                  View Work <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:susilodim@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 border border-[var(--border-glow)] text-[var(--off-white)] font-display font-semibold text-sm rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right — terminal */}
            <div className="glass rounded-lg overflow-hidden neo-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="font-mono text-xs text-[var(--muted)] ml-2">
                  dimas@portfolio ~ zsh
                </span>
              </div>
              <div className="p-6 min-h-64 space-y-2">
                {terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className={`font-mono text-sm ${typeof line === "string" && line.startsWith("$")
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)]"
                      }`}
                  >
                    {line}
                  </p>
                ))}
                {terminalIndex < TERMINAL_LINES.length && (
                  <span className="font-mono text-sm text-[var(--accent)] blink">
                    ▌
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section className="py-10 border-y border-[var(--border)] overflow-hidden">
        <div className="marquee-track">
          {[...STACK, ...STACK].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 text-[var(--muted)] hover:text-[var(--off-white)] transition-colors"
            >
              {item.icon}
              <span className="font-mono text-xs tracking-widest uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-4">
              // about
            </p>
            <h2 className="font-display text-5xl font-bold text-[var(--off-white)] leading-tight">
              Developer by craft,{" "}
              <span className="gradient-text">engineer by mindset.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: Profile card ── */}
            <div className="flex flex-col gap-6">
              {/* Photo */}
              <div className="neo-card rounded-lg p-6 flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--border-glow)] ring-4 ring-[var(--surface-2)]">
                  <img
                    src={ProfilePhoto}
                    alt="Muhammad Dimas Susilo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--off-white)]">
                    Muhammad Dimas Susilo
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted)] mt-1">
                    Fullstack Dev · ML Engineer
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--green)] glow-green" />
                  <span className="font-mono text-xs text-[var(--green)]">
                    Open to opportunities
                  </span>
                </div>
                <hr className="hr-glow w-full" />
                <div className="w-full space-y-2 text-left">
                  {[
                    { label: "Location", value: "Bogor, Indonesia" },
                    { label: "Email", value: "susilodim@gmail.com" },
                    { label: "Phone", value: "+62 819-5917-6199" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-2">
                      <span className="font-mono text-xs text-[var(--muted)]">{item.label}</span>
                      <span className="font-mono text-xs text-[var(--off-white)] text-right truncate max-w-[140px]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick facts */}
              <div className="neo-card rounded-lg p-6 space-y-3">
                <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-4">
                  quick facts
                </p>
                {[
                  { text: "Self-taught & continuously learning" },
                  { text: "Turning raw data into predictive insights" },
                  { text: "Fueled by coffee & curiosity" },
                  { text: "Fluent in Indonesian & English" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-base leading-none mt-0.5">{f.emoji}</span>
                    <span className="text-sm text-[var(--muted)] leading-snug">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Center: Bio + Skills ── */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Bio */}
              <div className="neo-card rounded-lg p-8">
                <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-5">
                  bio
                </p>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    I'm a Web Developer with around{" "}
                    <span className="text-[var(--off-white)]">8 months of frontend experience</span>,
                    currently in my second month as a Fullstack Developer. I build
                    responsive, modern UIs with React and develop backend systems
                    with Django and Python.
                  </p>
                  <p>
                    My fullstack work includes a{" "}
                    <span className="text-[var(--off-white)]">flower shop e-commerce platform</span>{" "}
                    with a complete order and payment system, and a{" "}
                    <span className="text-[var(--off-white)]">coffee shop order management app</span>{" "}
                    with real-time tracking.
                  </p>
                  <p>
                    Beyond web, I'm deeply interested in{" "}
                    <span className="text-[var(--off-white)]">Data Science and Machine Learning</span>.
                    One of my key projects involves Computer Vision for industrial safety — utilizing YOLOv8 to automate object detection and monitoring in construction environments.
                  </p>
                  <p>
                    I'm continuously learning and improving to build efficient,
                    scalable, and user-friendly applications that solve real problems.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="neo-card rounded-lg p-8">
                <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-6">
                  skill proficiency
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                  {[
                    { label: "React / JSX", pct: 85, color: "#61dafb" },
                    { label: "Python", pct: 80, color: "#3b82f6" },
                    { label: "Tailwind CSS", pct: 90, color: "#f2f2f2" },
                    { label: "Django", pct: 65, color: "#092e20" },
                    { label: "JavaScript", pct: 78, color: "#f7df1e" },
                    { label: "Machine Learning", pct: 60, color: "#4ade80" },
                    { label: "SQL / PostgreSQL", pct: 55, color: "#8a8a8e" },
                    { label: "Git & GitHub", pct: 75, color: "#e8e0d4" },
                  ].map((s) => (
                    <LangBar key={s.label} lang={s.label} pct={s.pct} color={s.color} />
                  ))}
                </div>
              </div>

              {/* Experience timeline */}
              <div className="neo-card rounded-lg p-8">
                <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-6">
                  experience timeline
                </p>
                <div className="relative pl-6 space-y-8">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border-glow)]" />

                  {[
                    {
                      period: "2024 – Present",
                      role: "Frontend Developer",
                      detail: "8 months focused on React, Tailwind CSS, and building responsive, accessible UIs.",
                      tag: "Frontend",
                    },
                    {
                      period: "2024 – Present",
                      role: "Fullstack Developer",
                      detail: "Building full-stack web apps with React + Django. Expanding into backend architecture and REST APIs.",
                      tag: "FullStack",
                    },
                    {
                      period: "2025 - Present",
                      role: "ML & Data Science",
                      detail: "Explored Python-based ML pipelines. Built a K-Means clustering model and a Computer Vision Mini Project.",
                      tag: "Machine Learning",
                    },
                  ].map((e, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <div className="absolute -left-[1.6rem] top-1.5 w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[var(--carbon)]" />
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-[var(--muted)]">{e.period}</span>
                        <span className="tag">{e.tag}</span>
                      </div>
                      <h4 className="font-display text-base font-semibold text-[var(--off-white)] mb-1">
                        {e.role}
                      </h4>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WORKING PROCESS ── */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-4">
              // the lab
            </p>
            <h2 className="font-display text-4xl font-bold text-[var(--off-white)]">
              How I solve problems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={i} className="neo-card rounded-lg p-6 group relative overflow-hidden">
                {/* Connector line */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-6 h-px bg-[var(--border-glow)] z-10" />
                )}
                <p className="font-mono text-5xl font-bold text-[var(--surface-2)] group-hover:text-[var(--border-glow)] transition-colors mb-4 select-none">
                  {p.step}
                </p>
                <span className="tag mb-3 inline-block">{p.tag}</span>
                <h3 className="font-display text-lg font-semibold text-[var(--off-white)] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-6">
            // let's build something
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text text-glow mb-8">
            Have a project in mind?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto">
            I'm open to freelance work, collaborations, and full-time opportunities.
            Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:susilodim@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-[var(--off-white)] text-[var(--carbon)] font-display font-semibold rounded-sm hover:bg-[var(--accent)] transition-colors duration-200"
            >
              Send an Email <ChevronRight size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-susilo/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-[var(--border-glow)] text-[var(--off-white)] font-display font-semibold rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
