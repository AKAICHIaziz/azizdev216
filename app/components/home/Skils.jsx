import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

import html from '/public/html.png'
import css from '/public/css.png'
import js from '/public/js.png'
import node from '/public/node.png'
import express from '/public/express.png'
import next from '/public/next.png'
import sql from '/public/sql.png'
import mongodb from '/public/mongodb.png'

const Skils = () => {
  return (
    <div className={styles.skills_container}>
        <span className={styles.skills_text}>Tech stack:</span>
        <Image className={styles.skill} src={html} />
        <Image className={styles.skill} src={css} />
        <Image className={styles.skill} src={js} />
        <Image className={styles.skill} src={node} />
        <Image className={styles.skill} src={express} />
        <Image className={styles.skill} src={next} />
        <Image className={styles.skill} src={sql} />
        <Image className={styles.skill} src={mongodb} />
    </div>
  )
}

export default Skils