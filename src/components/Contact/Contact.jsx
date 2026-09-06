// src/components/Contact/Contact.jsx
import './Contact.css'

function Contact() {
  // Remplace par tes vraies informations
  const contactInfo = {
    email: 'juleskagb229@gmail.com',
    phone: '2290147959701', // Format international sans le +
    telegram: 'julesclaurece'
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          Une question ? Un projet ? Contactez-moi directement !
        </p>

        <div className="contact-cards">
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${contactInfo.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
          >
            <div className="contact-card-icon">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="contact-logo"
              />
            </div>
            <h3>WhatsApp</h3>
            <p>Réponse rapide</p>
          </a>

          {/* Gmail */}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="contact-card gmail"
          >
            <div className="contact-card-icon">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Gmail"
                className="contact-logo"
              />
            </div>
            <h3>Gmail</h3>
            <p>Envoyez un email</p>
          </a>

          {/* Telegram */}
          <a 
            href={`https://t.me/${contactInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card telegram"
          >
            <div className="contact-card-icon">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                className="contact-logo"
              />
            </div>
            <h3>Telegram</h3>
            <p>Messagerie instantanée</p>
          </a>
        </div>

        {/* Ajout de liens sociaux en bas */}
        <div className="contact-social">
          <p className="contact-social-text">Retrouvez-moi aussi sur :</p>
          <div className="social-links-bottom">
            <a href="https://github.com/julesclaurece" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dédji-jules-claurèce-kagbahinto-571942369" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact