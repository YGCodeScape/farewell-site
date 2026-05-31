import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teachers } from "../data";

export default function TeacherPage({ activeId, onClose }) {
  const teacher = teachers.find((t) => t.id === activeId);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  return (
    <AnimatePresence>
      {teacher && (
        <motion.div
          key={teacher.id}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "var(--bg)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Page Hero */}
          <div style={{
            minHeight: 300,
            background: teacher.pageGradient,
            display: "flex", flexDirection: "column",
            justifyContent: "flex-end",
            padding: "2rem 1.5rem",
            position: "relative",
          }}>
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: "1.25rem", left: "1.25rem",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, color: "var(--text)",
              }}
            >←</button>

            <div style={{
              width: 72, height: 72, borderRadius: 22,
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2.2rem", marginBottom: "1rem",
            }}>
              {teacher.emoji}
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem", fontWeight: 600,
              color: "var(--text)", lineHeight: 1.1,
            }}>{teacher.name}</h1>

            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: 4 }}>
              {teacher.subtitle}
            </p>
          </div>

          {/* Page Body */}
          <div style={{ padding: "2rem 1.5rem 4rem" }}>
            {/* Subject chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
              {teacher.subjects.map((s, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 14px", borderRadius: 100,
                  fontSize: 13, fontWeight: 500,
                  background: s.bg, borderColor: s.border,
                  color: s.color, border: `1.5px solid ${s.border}`,
                }}>{s.label}</span>
              ))}
            </div>

            {/* Thank you note */}
            <div style={{
              background: "var(--card-bg)",
              borderRadius: 20, padding: "1.5rem",
              marginBottom: "1.5rem",
              border: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "5rem", position: "absolute",
                top: -10, left: "1rem", lineHeight: 1,
                opacity: 0.08, color: "var(--text)",
                userSelect: "none",
              }}>"</span>
              {teacher.note.split("\n\n").map((para, i) => (
                <p key={i} style={{
                  fontSize: "1rem", lineHeight: 1.8,
                  color: "var(--text)", fontWeight: 300,
                  marginBottom: i < teacher.note.split("\n\n").length - 1 ? "1rem" : 0,
                }}>
                  {para.split(/(\*\*.*?\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={j} style={{ fontWeight: 500 }}>{part.slice(2, -2)}</strong>
                      : part
                  )}
                </p>
              ))}
            </div>

            {/* Comments */}
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem", fontWeight: 600,
              marginBottom: "1rem", color: "var(--text)",
            }}>
              What your students say 💬
            </h3>

            {teacher.comments.map((c, i) => {
              const initials = c.name.split(" ").map((n) => n[0]).join("").toUpperCase();
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: "flex", gap: 12, marginBottom: "1rem" }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 12,
                    flexShrink: 0, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 500,
                    color: "white", background: c.color,
                  }}>{initials}</div>

                  <div style={{
                    background: "var(--card-bg)",
                    borderRadius: "0 16px 16px 16px",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(0,0,0,0.06)", flex: 1,
                  }}>
                    <p style={{ fontSize: 12, fontWeight: 500, color: "var(--muted)", marginBottom: 3 }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text)" }}>
                      {c.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}