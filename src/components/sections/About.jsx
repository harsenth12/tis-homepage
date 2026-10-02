import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-top">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          01 — OUR PHILOSOPHY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Education that shapes
          <br />
          <em>the whole person.</em>
        </motion.h2>
      </div>

      <div className="about-grid">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="Students learning together"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-large-text">
            At Tulas, learning goes beyond classrooms and textbooks.
          </p>

          <p>
            We create an environment where students are encouraged
            to question, explore, create and discover their own potential.
          </p>

          <p>
            Our approach brings together academic excellence,
            character development, creativity and real-world experiences.
          </p>

          <button className="text-button">
            Discover our approach →
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default About;