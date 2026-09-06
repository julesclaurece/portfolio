import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Nom */}
        <div className="logo">
          <a href="#home">Jules Claurèce</a>
        </div>

        {/* Navigation desktop */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Bouton CTA desktop */}
        <div className="cta">
          <a href="#contact" className="btn-primary">Me contacter</a>
        </div>

        {/* Bouton menu burger (mobile) */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li><a href="#about" onClick={closeMenu}>À propos</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
            <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn-primary mobile-cta" onClick={closeMenu}>Me contacter</a>
      </div>
    </header>
  )
}

export default Header