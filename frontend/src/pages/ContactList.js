import React from 'react';
import styles from './ContactList.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';    

const ContactList= () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
    };
    fetchContacts();
}, []);

    return(
        <section className={styles.contactList}>
            <h1>Contact List</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </thead>

                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No contacts found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default ContactList;