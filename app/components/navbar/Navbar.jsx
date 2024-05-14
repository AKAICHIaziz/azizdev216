import React from 'react'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>AzizDev216</div>
      <div className={styles.nav_links}>
        <div className={styles.nav_link}><a className={styles.a} href="#home">Home</a></div>
        <div className={styles.nav_link}><a className={styles.a} href="#about">About</a></div>
        <div className={styles.nav_link}><a className={styles.a} href="#skills">Skills</a></div>
        <div className={styles.nav_link}><a className={styles.a} href="#home">Home</a></div>
      </div>
      <div className={styles.mobile_menu}>
          <svg className={styles.menu_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </div>
    </div>
  )
}

export default NavBar