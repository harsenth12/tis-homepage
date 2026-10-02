import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <p className="footer-label">TULAS INTERNATIONAL SCHOOL</p>

          <h2>
            Shaping curious
            <br />
            <em>minds.</em>
          </h2>
        </div>

        <a href="#admissions" className="footer-cta">
          Admissions
          <ArrowUpRight size={20} />
        </a>

      </div>

      <div className="footer-bottom">

        <p>© 2026 Tulas International School</p>

        <div>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
        </div>

        <p>Designed & Developed with React</p>

      </div>

    </footer>
  );
}

export default Footer;