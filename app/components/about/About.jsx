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
          <div className={styles.description_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, explicabo tenetur quas dolorum facilis consequatur, molestiae incidunt ex adipisci est nostrum veniam nam, rem magni recusandae repudiandae similique ratione fugit.</div>
        </div>
      </div>
    </div>
  )
}

export default About