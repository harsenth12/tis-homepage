import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The school has created an environment where learning feels exciting and meaningful.",
    name: "Parent Community",
    role: "TIS Parent",
  },
  {
    quote:
      "My child has become more confident, curious and independent through the learning experience.",
    name: "Parent Community",
    role: "TIS Parent",
  },
  {
    quote:
      "A learning environment that encourages students to discover what they are capable of.",
    name: "Student Community",
    role: "TIS Student",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          04 — VOICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What our community
          <br />
          <em>says.</em>
        </motion.h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.article
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <Quote size={28} />

            <p>"{item.quote}"</p>

            <div className="testimonial-person">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;