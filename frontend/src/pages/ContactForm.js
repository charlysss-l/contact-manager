import React from 'react';
import styles from './ContactForm.module.css';
const ContactForm = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactForm}>
                <h1>Contact Form</h1>
                        <form>
                            <input type="text" placeholder="Name" required/>
                            <input type="text" placeholder="Email" required/>
                            <input type="text" placeholder="Phone" required/>

                            <button type="submit">
                                Add Contact
                            </button>
                        </form>
            </div>

        </section>
    );
};
export default ContactForm;