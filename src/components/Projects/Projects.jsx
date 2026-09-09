// src/components/Projects/Projects.jsx
import './Projects.css'
import { projects } from '../../data/projects'
import { useLanguage } from '../../i18n/LanguageContext'

function Projects() {
  const { lang, t } = useLanguage()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">{t.projects.title}</h2>
        <p className="projects-subtitle">
          {t.projects.subtitle}
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x250/2563eb/ffffff?text=' + encodeURIComponent(project.title)
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description[lang]}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects