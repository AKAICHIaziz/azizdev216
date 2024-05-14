import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.page_container}>

            <div className={styles.contact_form}>
                <input type="text" className={styles.input} id='name' placeholder='You full name' required />
                <input type="email" className={styles.input} id='email' placeholder='Your email' required />
                <input type="text" pattern='/[0-9]{8}/' className={styles.input} placeholder='Your phone number' id='phone' required />
                <textarea name="message" id="message" placeholder='Drop your message' className={styles.textarea}></textarea>
                <button className={styles.button}>Send</button>
            </div>

            <div className={styles.text}>
                <div className={styles.text1}>Drop us a line</div>
                <div className={styles.text2}>I would love to hear from you!</div>
                <div className={styles.text3}>Would you like to discuss a projectdiv Maybe you just
                    want to stop in and say hi? you can send me a message
                    using our contact form, or reach me using the informations
                    below.
                </div>
                <div className={styles.text4}>Contact Information:</div>
                <div className={styles.contact}>
                    <a className={styles.text6} href="mailto:akaichiaziz10@gmail.com" target='_blank'>akaichiaziz10@gmail.com </a>
                    <a className={styles.text6} href="https://www.facebook.com/aziz.akaychi.7" target='_blank'>Link to facebook: Aziz Akaichi </a>
                </div>
            </div>

        </div>
    )
}

export default Contact