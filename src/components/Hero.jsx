import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="hero-page">
      {/* Blobs */}
      <div className="page-blob">
        {[
          { w: 260, h: 260, bg: "var(--lavender-mid)", top: "-60px", left: "-60px", delay: "0s" },
          { w: 220, h: 220, bg: "var(--rose-mid)", top: "30%", right: "-80px", delay: "2s" },
          { w: 200, h: 200, bg: "var(--mint-mid)", bottom: "-60px", left: "20%", delay: "4s" },
          { w: 180, h: 180, bg: "var(--peach-mid)", bottom: "10%", right: "10%", delay: "1s" },
        ].map((b, i) => (
          <div key={i} style={{
            position: "absolute",
            width: b.w, height: b.h,
            borderRadius: "50%",
            background: b.bg,
            filter: "blur(60px)",
            opacity: 0.45,
            top: b.top, left: b.left,
            right: b.right, bottom: b.bottom,
            animation: `floatBlob 8s ease-in-out ${b.delay} infinite`,
          }} />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.span {...fadeUp(0)} className="hero-span" >
          BCA Final Year · 2025-26, Batch: 3:30PM
        </motion.span>

        <motion.h1 {...fadeUp(0.1)} className="hero-context-title">
          From us,<br />
          with{" "}
          <em className="hero-content-em">
            all our heart.
          </em>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="hero-content-subtitle">
          {/* ✏️ Edit this subtitle */}
          Three years of code, questions, late submissions, and lessons that were never just about computers. Thank you for everything.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="hero-content-meet">
          <span className="hero-content-meet-span">
            Meet our teachers
          </span>
          <div className="hero-content-meet-line" />
        </motion.div>
      </div>
    </section>
  );
}