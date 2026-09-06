import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Nom */}
        <div className="logo">
          <a href="#home">Jules Claurèce</a>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Bouton CTA (optionnel) */}
        <div className="cta">
          <a href="#contact" className="btn-primary">Me contacter</a>
        </div>
      </div>
    </header>
  )
}

export default Header