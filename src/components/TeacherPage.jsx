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
          className="TP-sec"
        >
          {/* Page Hero */}
          <div className="TP-hero" style={{
            background: teacher.pageGradient,
          }}>
            <button
              onClick={onClose}
              className="TP-back-btn"
            >←</button>
            <div className="TP-emoji">
              {teacher.emoji}
            </div>
            <h1 className="TP-T-name">{teacher.name}</h1>
            <p className="TP-sub-text">
              {teacher.subtitle}
            </p>
          </div>

          {/* Page Body */}
          <div style={{ padding: "2rem 1.5rem 4rem" }}>
            {/* Subject chips */}
            <div className="TP-sub-chip">
              {teacher.subjects.map((s, i) => (
                <span className="TP-chips" key={i} style={{
                  background: s.bg, borderColor: s.border,
                  color: s.color, border: `1.5px solid ${s.border}`,
                }}>{s.label}</span>
              ))}
            </div>

            {/* Thank you note */}
            <div className="TP-note">
              <span className="TP-note-quote">"</span>
              {teacher.note.split("\n\n").map((para, i) => (
                <p className="TP-note-content" key={i} style={{
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
            <h3 className="TP-comments">
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
                  <div className="TP-comments-box" style={{
                     background: c.color,
                  }}>{initials}</div>

                  <div className="TP-comments-content">
                    <p  className="TP-S-name">
                      {c.name}
                    </p>
                    <p className="TP-S-text">
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