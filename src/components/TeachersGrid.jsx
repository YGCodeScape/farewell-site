import { motion } from "framer-motion";
import { teachers } from "../data";

export default function TeachersGrid({ onOpen }) {
  const grid = teachers.filter((t) => !t.fullWidth);
  const full = teachers.find((t) => t.fullWidth);

  return (
    <section style={{ padding: "4rem 1.25rem", maxWidth: 480, margin: "0 auto" }}>
      <p style={{
        fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
        textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem",
      }}>
        Our Guiding Stars
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem", fontWeight: 600,
        marginBottom: "2rem", color: "var(--text)",
      }}>
        The people who shaped us
      </h2>

      {/* 2-col grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        {grid.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpen(t.id)}
            style={{
              borderRadius: 20,
              padding: "1.25rem 1rem",
              cursor: "pointer",
              background: t.cardGradient,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: "1rem", right: "1rem",
              width: 28, height: 28, borderRadius: "50%",
              background: "rgba(255,255,255,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14,
            }}>↗</div>

            <div style={{
              width: 54, height: 54, borderRadius: 16,
              background: "rgba(255,255,255,0.6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem", marginBottom: "0.75rem",
            }}>
              {t.emoji}
            </div>

            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem", fontWeight: 600,
              color: "var(--text)", marginBottom: 3, lineHeight: 1.2,
            }}>{t.name}</p>
            <p style={{ fontSize: 11, color: "var(--muted)" }}>{t.role}</p>
            <span style={{
              display: "inline-block", fontSize: 10, fontWeight: 500,
              padding: "3px 10px", borderRadius: 100,
              background: "rgba(255,255,255,0.6)",
              color: "var(--text)", marginTop: "0.6rem",
            }}>{t.cardTag}</span>
          </motion.div>
        ))}
      </div>

      {/* Full-width card (Gorakh Sir) */}
      {full && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(full.id)}
          style={{
            borderRadius: 20,
            padding: "1.25rem",
            cursor: "pointer",
            background: full.cardGradient,
            display: "flex", alignItems: "center", gap: "1rem",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            width: 64, height: 64, borderRadius: 20,
            background: "rgba(255,255,255,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.8rem", flexShrink: 0,
          }}>{full.emoji}</div>

          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem", fontWeight: 600,
              color: "var(--text)", marginBottom: 3,
            }}>{full.name}</p>
            <p style={{ fontSize: 11, color: "var(--muted)" }}>{full.role} — The man with answers to everything</p>
            <span style={{
              display: "inline-block", fontSize: 10, fontWeight: 500,
              padding: "3px 10px", borderRadius: 100,
              background: "rgba(255,255,255,0.6)",
              color: "var(--text)", marginTop: "0.5rem",
            }}>{full.cardTag}</span>
          </div>

          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, flexShrink: 0,
          }}>↗</div>
        </motion.div>
      )}
    </section>
  );
}