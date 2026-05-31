import { motion } from "framer-motion";
import { teachers } from "../data";

export default function TeachersGrid({ onOpen }) {
  const grid = teachers.filter((t) => !t.fullWidth);
  const full = teachers.find((t) => t.fullWidth);

  return (
    <section className="TG-sec">
      <p className="TG-sec-subtext">
        Our Guiding Stars
      </p>
      <h2 className="TG-title">
        The people who shaped us
      </h2>

      {/* 2-col grid */}
      <div className="TG-cards">
        {grid.map((t, i) => (
          <motion.div
            className="TG-single-cards"
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpen(t.id)}
            style={{
              background: t.cardGradient,
            }}
          >
            <div className="TG-icon">↗</div>

            <div className="Tg-card-image">
              {t.emoji}
            </div>

            <p className="TG-card-name" >{t.name}</p>
            <p className="TG-card-role" >{t.role}</p>
            <span className="TG-card-tag" >{t.cardTag}</span>
          </motion.div>
        ))}
      </div>

      {/* Full-width card */}
      {full && (
        <motion.div
          className="TG-card-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(full.id)}
          style={{
            background: full.cardGradient,
          }}
        >
          <div className="Tg-card-image " >{full.emoji}</div>

          <div style={{ flex: 1 }}>
            <p className="TG-card-name" >{full.name}</p>
            <p className="TG-card-role" >{full.role}</p>
            <span className="TG-card-tag ">{full.cardTag}</span>
          </div>

          <div className="TG-icon" >↗</div>
        </motion.div>
      )}
    </section>
  );
}