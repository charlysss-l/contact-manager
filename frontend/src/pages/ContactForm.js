import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/contacts', contact);
            setMessage('Contact added successfully!');
            setContact({ name: '', email: '', phone: '' }); // reset form
        } catch (error) {
            console.error(error);
            setMessage('Error adding contact.');
        }

        setLoading(false);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactForm}>
                <h1>Contact Form</h1>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Contact'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
