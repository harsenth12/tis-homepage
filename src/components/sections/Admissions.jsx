import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Admissions() {
  return (
    <section id="admissions" className="admissions-section">
      <motion.div
        className="admissions-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="admissions-label">05 — ADMISSIONS</p>

        <h2>
          Your child's
          <br />
          <em>next chapter.</em>
        </h2>

        <p>
          Discover a learning environment built to help every
          student grow with confidence, curiosity and purpose.
        </p>

        <button>
          Begin your journey
          <ArrowUpRight size={20} />
        </button>
      </motion.div>
    </section>
  );
}

export default Admissions;