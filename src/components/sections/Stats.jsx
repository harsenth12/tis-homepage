import { motion } from "framer-motion";

const stats = [
  {
    number: "22+",
    label: "ACRES CAMPUS",
  },
  {
    number: "16+",
    label: "SPORTS",
  },
  {
    number: "6:1",
    label: "STUDENT / TEACHER",
  },
  {
    number: "24/7",
    label: "STUDENT SUPPORT",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat"
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;