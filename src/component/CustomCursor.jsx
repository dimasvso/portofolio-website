import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
      if (ring.current) {
        ring.current.style.left = x + "px";
        ring.current.style.top = y + "px";
      }
    };

    const addHover = () => ring.current?.classList.add("hovered");
    const removeHover = () => ring.current?.classList.remove("hovered");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Re-attach on DOM changes via MutationObserver
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
