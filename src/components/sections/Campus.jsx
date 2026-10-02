import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Campus() {
  return (
    <section id="campus" className="campus-section">
      <div className="campus-image">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=80"
          alt="Modern school campus"
        />

        <div className="campus-overlay" />
      </div>

      <motion.div
        className="campus-content"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="campus-label">03 — CAMPUS LIFE</p>

        <h2>
          A place to
          <br />
          <em>belong.</em>
        </h2>

        <p className="campus-description">
          More than a school, our campus is a space designed for
          discovery, collaboration, creativity and connection.
        </p>

        <button className="campus-button">
          Explore the campus
          <ArrowUpRight size={18} />
        </button>
      </motion.div>

      <div className="campus-location">
        <span>DEHRADUN</span>
        <span>30° 19' N</span>
      </div>
    </section>
  );
}

export default Campus;