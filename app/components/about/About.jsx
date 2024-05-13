import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import img from '/public/devops.jpg'

const About = () => {
  return (
    <div className={styles.page_container} >
      <div className={styles.about_container} id='about'>
        <div className={styles.img}>
          <Image className={styles.image} src={img} />
        </div>
        <div className={styles.description}>
          <div className={styles.description_title1}>ABOUT ME</div>
          <div className={styles.description_title2}>A dedicated Full-Stack Developper</div>
          <div className={styles.description_text}>
            Je suis un développeur full-stack junior de 20 ans et étudiant en informatique. Passionné par la création de solutions innovantes, je m'efforce d'apporter ma contribution au monde numérique en utilisant mes compétences en développement web et mes connaissances en informatique. Je suis constamment en quête de nouveaux défis et d'occasions d'apprendre, ce qui me motive à explorer de nouvelles idées et à créer des solutions efficaces pour répondre aux besoins de l'industrie technologique.
          </div>
          <button className={styles.button}>
            Télécharger CV
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About