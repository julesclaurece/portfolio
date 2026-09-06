// src/components/Skills/Skills.jsx
import { useState, useEffect, useRef } from 'react'
import './Skills.css'
import claudeIcon from '../../assets/icons/claude.svg'

const BASE_ORBIT_SIZE = 600 // largeur de référence utilisée pour les rayons ci-dessous (desktop)

function Skills() {
  const [time, setTime] = useState(0)
  const [scale, setScale] = useState(1)
  const animationRef = useRef(null)
  const orbitContainerRef = useRef(null)

  const skills = [
    // Orbite 1 (cercle intérieur) - 2 technologies
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
      orbit: 1,
      radius: 110,
      speed: 0.015, // Vitesse de rotation
      angle: 0 // Position de départ en degrés
    },
    {
      name: 'Claude Code',
      icon: claudeIcon,
      color: '#D97757',
      orbit: 1,
      radius: 110,
      speed: 0.015,
      angle: 180
    },
    // Orbite 2 (cercle intermédiaire) - 2 technologies
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      orbit: 2,
      radius: 180,
      speed: 0.03,
      angle: 0
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      orbit: 2,
      radius: 180,
      speed: 0.03,
      angle: 180
    },
    // Orbite 3 (cercle extérieur) - 3 technologies
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#4169E1',
      orbit: 3,
      radius: 250,
      speed: 0.02,
      angle: 0
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      orbit: 3,
      radius: 250,
      speed: 0.02,
      angle: 120
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      orbit: 3,
      radius: 250,
      speed: 0.02,
      angle: 240
    }
  ]

  // Animation loop
  useEffect(() => {
    let lastTime = 0

    const animate = (currentTime) => {
      if (lastTime === 0) {
        lastTime = currentTime
      }
      
      const delta = currentTime - lastTime
      lastTime = currentTime

      // Mise à jour du temps
      setTime(prev => prev + delta * 0.001) // Conversion en secondes

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Adapter les rayons d'orbite à la taille réelle du conteneur (mobile inclus)
  useEffect(() => {
    const updateScale = () => {
      if (orbitContainerRef.current) {
        setScale(orbitContainerRef.current.offsetWidth / BASE_ORBIT_SIZE)
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  // Calculer la position de chaque technologie
  const getSkillPosition = (skill) => {
    const currentAngle = skill.angle + time * skill.speed * 360
    const rad = currentAngle * Math.PI / 180
    const radius = skill.radius * scale

    const x = Math.cos(rad) * radius
    const y = Math.sin(rad) * radius

    return { x, y }
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Compétences</h2>
        <p className="skills-subtitle">Développement web</p>
        
        <div className="skills-orbit-container" ref={orbitContainerRef}>
          {/* Orbites visuelles */}
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
          
          {/* Centre */}
          <div className="orbit-center">
            <span>⚡</span>
          </div>

          {/* Compétences */}
          {skills.map((skill) => {
            const pos = getSkillPosition(skill)
            
            return (
              <div 
                key={skill.name}
                className="skill-item"
                style={{
                  transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                  '--color': skill.color,
                  '--delay': `${skill.angle}deg`
                }}
              >
                <div className="skill-circle">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills