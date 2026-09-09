// src/components/Footer/Footer.jsx
import './Footer.css'
import { useLanguage } from '../../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1 : Logo et description */}
        <div className="footer-section">
          <h3 className="footer-logo">Jules Claurèce KAGBAHINTO</h3>
          <p className="footer-description">
            {t.footer.description}
          </p>
        </div>

        {/* Section 2 : Liens rapides */}
        <div className="footer-section">
          <h4 className="footer-title">{t.footer.quickLinks}</h4>
          <ul className="footer-links">
            <li><a href="#about">{t.header.nav.about}</a></li>
            <li><a href="#projects">{t.header.nav.projects}</a></li>
            <li><a href="#skills">{t.header.nav.skills}</a></li>
            <li><a href="#contact">{t.header.nav.contact}</a></li>
          </ul>
        </div>

        {/* Section 3 : Réseaux sociaux */}
        <div className="footer-section">
          <h4 className="footer-title">{t.footer.followMe}</h4>
          <div className="footer-social">
            <a 
              href="https://github.com/julesclaurece" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="footer-social-icon"
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/dédji-jules-claurèce-kagbahinto-571942369"
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@13/icons/linkedin.svg"
                alt="LinkedIn"
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer