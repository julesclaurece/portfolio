import { useState, useEffect, useRef } from 'react'
import './Header.css'
import { useLanguage } from '../../i18n/LanguageContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const langMenuRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  const selectLang = (value) => {
    setLang(value)
    setIsLangOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
            <li><a href="#about">{t.header.nav.about}</a></li>
            <li><a href="#projects">{t.header.nav.projects}</a></li>
            <li><a href="#skills">{t.header.nav.skills}</a></li>
            <li><a href="#contact">{t.header.nav.contact}</a></li>
          </ul>
        </nav>

        {/* Actions à droite : CTA, langue, burger */}
        <div className="header-actions">
          {/* Bouton CTA desktop */}
          <div className="cta">
            <a href="#contact" className="btn-primary">{t.header.cta}</a>
          </div>

          {/* Sélecteur de langue (toujours visible, desktop + mobile) */}
          <div className="lang-menu-container" ref={langMenuRef}>
            <button
              className="lang-menu-btn"
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-label="Changer de langue / Switch language"
              aria-expanded={isLangOpen}
            >
              {lang.toUpperCase()}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                <button
                  className={`lang-option ${lang === 'fr' ? 'active' : ''}`}
                  onClick={() => selectLang('fr')}
                >
                  Français
                  {lang === 'fr' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
                <button
                  className={`lang-option ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => selectLang('en')}
                >
                  English
                  {lang === 'en' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Bouton menu burger (mobile) */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li><a href="#about" onClick={closeMenu}>{t.header.nav.about}</a></li>
            <li><a href="#projects" onClick={closeMenu}>{t.header.nav.projects}</a></li>
            <li><a href="#skills" onClick={closeMenu}>{t.header.nav.skills}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{t.header.nav.contact}</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn-primary mobile-cta" onClick={closeMenu}>{t.header.cta}</a>
      </div>
    </header>
  )
}

export default Header