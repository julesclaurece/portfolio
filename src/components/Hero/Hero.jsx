// src/components/Hero/Hero.jsx
import './Hero.css'
import { useLanguage } from '../../i18n/LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero