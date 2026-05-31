import { useEffect, useRef } from "react";

export default function Petals({ trigger }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const container = containerRef.current;
    if (!container) return;

    container.style.display = "block";
    const emojis = ["🌸", "💜", "🌿", "✨", "💕", "🌺", "⭐"];

    const timers = [];
    for (let i = 0; i < 18; i++) {
      const t = setTimeout(() => {
        const p = document.createElement("span");
        p.style.cssText = `
          position: absolute;
          top: -20px;
          font-size: ${12 + Math.random() * 10}px;
          left: ${Math.random() * 100}%;
          opacity: 0.9;
          animation: petalFall ${2.5 + Math.random() * 2}s linear forwards;
          --drift: ${Math.random() * 80 - 40}px;
        `;
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        container.appendChild(p);
        setTimeout(() => p.remove(), 5000);
      }, i * 100);
      timers.push(t);
    }

    const hide = setTimeout(() => {
      container.style.display = "none";
    }, 4000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(hide);
    };
  }, [trigger]);

  return (
    <>
      <style>{`
        @keyframes petalFall {
          0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 0.9; }
          100% { transform: translateY(110vh) rotate(720deg) translateX(var(--drift)); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          position: "fixed", inset: 0,
          pointerEvents: "none",
          zIndex: 200,
          display: "none",
        }}
      />
    </>
  );
}