import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message ?? "Unknown error" };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="glass rounded-lg p-10 max-w-lg w-full neo-card text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase mb-6">
              runtime error
            </p>
            <h2 className="font-display text-2xl font-bold text-[var(--off-white)] mb-3">
              Something went wrong
            </h2>
            <p className="font-mono text-xs text-red-400 bg-[var(--surface)] rounded p-3 mb-6 text-left break-all">
              {this.state.message}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, message: "" });
                window.location.href = "/";
              }}
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[var(--border-glow)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--carbon)] transition-all duration-200 rounded-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
