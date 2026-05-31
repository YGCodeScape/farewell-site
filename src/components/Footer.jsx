import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "3rem 1.5rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.25); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          display: "block",
          animation: "heartbeat 1.5s ease-in-out infinite",
        }}>💜</span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.8rem", fontWeight: 600,
          marginBottom: "0.75rem", color: "var(--text)",
        }}>
          Thank you, from the<br />bottom of our hearts.
        </h2>

        <p style={{
          fontSize: "0.9rem", color: "var(--muted)",
          lineHeight: 1.7, maxWidth: 300, margin: "0 auto",
        }}>
          You didn't just teach us subjects. You taught us how to think, how to try again, and how to care about what we make.
        </p>

        {/* ✏️ Update college name and batch info here */}
        <span style={{
          display: "inline-block",
          marginTop: "2rem",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          paddingTop: "1.5rem",
          width: "100%",
        }}>
          BCA Batch · Computer Science Students · With love, always 🌸
        </span>
      </motion.div>
    </footer>
  );
}