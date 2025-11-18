import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    // useState - a react hook that allows you to add state to functional components
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Loading and message states
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Handle input changes for form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission button click
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Send POST request to backend API to add contact
            await axios.post(`${process.env.REACT_APP_API_URL}/contacts`, contact);
            setMessage('Contact added successfully!');
            setContact({ name: '', email: '', phone: '' }); 
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
