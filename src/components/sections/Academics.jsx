import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Early Years",
    description:
      "A joyful foundation where curiosity, creativity and confidence begin.",
  },
  {
    number: "02",
    title: "Primary School",
    description:
      "Building strong fundamentals through exploration and meaningful learning.",
  },
  {
    number: "03",
    title: "Middle School",
    description:
      "Developing critical thinking, independence and a deeper understanding of the world.",
  },
  {
    number: "04",
    title: "Senior School",
    description:
      "Preparing students for higher education, leadership and the future.",
  },
];

function Academics() {
  return (
    <section id="academics" className="academics-section">
      <div className="academics-header">
        <motion.p
          className="section-label dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          02 — ACADEMICS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Learning for a
          <br />
          <em>changing world.</em>
        </motion.h2>
      </div>

      <div className="program-grid">
        {programs.map((program, index) => (
          <motion.article
            className="program-card"
            key={program.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="program-top">
              <span>{program.number}</span>

              <ArrowUpRight size={22} />
            </div>

            <div>
              <h3>{program.title}</h3>

              <p>{program.description}</p>
            </div>

            <div className="program-line" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Academics;