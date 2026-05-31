import { motion } from "framer-motion";

// ✏️ ADD YOUR MARATHI SHAYARI LINES HERE
const shayariLines = [
  "तुम्ही शिकवलेले धडे, आयुष्यभर साथ देतील...",
  "तुमच्या मायेने आम्हाला माणूस बनवलं,",
  "तुमच्या शब्दांनी आम्हाला दिशा दिली,",
  "आभार मानण्यासाठी शब्द कमी पडतात...",
  "— तुमचे विद्यार्थी, BCA Batch 💜",
];

export default function OpenLetter() {
  return (
    <section style={{ padding: "2rem 1.25rem 3rem", maxWidth: 480, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: "#fffef7",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          padding: "2.5rem 2rem 2.5rem",
        }}
      >
        {/* Paper lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              left: 0, right: 0,
              top: `${60 + i * 36}px`,
              height: 1,
              background: "rgba(100, 149, 237, 0.12)",
            }} />
          ))}
          {/* Left red margin line */}
          <div style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: 48,
            width: 1.5,
            background: "rgba(220, 80, 80, 0.18)",
          }} />
        </div>

        {/* Wax seal decoration */}
        <div style={{
          position: "absolute", top: 16, right: 20,
          fontSize: 32, opacity: 0.15, zIndex: 0,
          userSelect: "none",
        }}>📜</div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Label */}
          <p style={{
            fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem",
          }}>
            An open letter
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem", fontWeight: 600,
            color: "var(--text)", marginBottom: "2rem",
          }}>
            शब्दांतून मनातलं... 🖊️
          </h2>

          {/* Shayari lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {shayariLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  fontStyle: i % 2 === 0 ? "italic" : "normal",
                  lineHeight: 1.8,
                  color: i === shayariLines.length - 1 ? "var(--lavender-deep)" : "var(--text)",
                  fontWeight: i === shayariLines.length - 1 ? 500 : 300,
                  paddingLeft: 16,
                  borderLeft: i === shayariLines.length - 1
                    ? "3px solid var(--lavender-mid)"
                    : "3px solid transparent",
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Signature */}
          <div style={{
            marginTop: "2.5rem",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              flex: 1, height: 1,
              background: "rgba(0,0,0,0.08)",
            }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "var(--muted)",
            }}>
              with love 🌸
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}