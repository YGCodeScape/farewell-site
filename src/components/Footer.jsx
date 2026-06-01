import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer-sec">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="footer-hearth">💜</span>

        <h2 className="footer-text">
          Thank you, from the<br />bottom of our hearts.
        </h2>

        <p className="footer-subtext">
          You didn't just teach us subjects. You taught us how to think, how to try again, and how to care about what we make.
        </p>

        {/* ✏️ Update college name and batch info here */}
        <span className="footer-info">
          BCA Batch TY 2025-2026· Computer Science Students · With love, always 🌸
        </span>
      </motion.div>
    </footer>
  );
}