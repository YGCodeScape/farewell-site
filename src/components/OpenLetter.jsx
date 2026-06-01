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
    <section className="OL-sec">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="OL-holder"
      >
        {/* Paper lines */}
        <div className="OL-paper-lines">
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
          <div className="OL-left-line" />
        </div>

        {/* Wax seal decoration */}
        <div className="OL-wax-seal">📜</div>

        <div className="OL-letter-content">
           { /* Label */}
           <p className="OL-latter-label"> An open letter</p>
           <h2 className="OL-letter-title"> शब्दांतून मनातलं... 🖊️ </h2>
         
           {/* Shayari lines */}
           <div className="OL-shayari-lines ">
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
          <div className="Ol-signature">
            <div className="Ol-signature-line" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}