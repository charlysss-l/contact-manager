import React from 'react';
import styles from './ContactList.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';    

const ContactList= () => {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null); // for the contact being edited
    const [updatedContact, setUpdatedContact] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
    };
    fetchContacts();
}, []);

    // Delete contact
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
            // Update state after deletion
            setContacts(prev => prev.filter(contact => contact._id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

        // Start editing a contact
    const handleEdit = (contact) => {
        setEditingContact(contact._id);
        setUpdatedContact({ name: contact.name, email: contact.email, phone: contact.phone });
    };

    // Handle input changes for editing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit updated contact
    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, updatedContact);
            setContacts(prev => prev.map(contact => contact._id === id ? response.data : contact));
            setEditingContact(null);
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    return(
        <section className={styles.contactList}>
            <h1>Contact List</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </thead>

               <tbody>
  {contacts.length > 0 ? (
    contacts.map((contact) => (
      <tr key={contact._id}>
                <td>
                    {editingContact === contact._id ? (
                        <input
                        type="text"
                        name="name"
                        value={updatedContact.name}
                        onChange={handleChange}
                        />
                    ) : (
                        contact.name
                    )}
                </td>
                <td>
                    {editingContact === contact._id ? (
                        <input
                        type="email"
                        name="email"
                        value={updatedContact.email}
                        onChange={handleChange}
                        />
                    ) : (
                        contact.email
                    )}
                </td>
                <td>
                    {editingContact === contact._id ? (
                        <input
                        type="text"
                        name="phone"
                        value={updatedContact.phone}
                        onChange={handleChange}
                        />
                    ) : (
                        contact.phone
                    )}
                </td>
                <td>
                    {editingContact === contact._id ? (
                        <button className={styles.saveButton} onClick={() => handleUpdate(contact._id)}>Save</button>
                    ) : (
                        <button className={styles.editButton} onClick={() => handleEdit(contact)}>Edit</button>
                    )}
                </td>
                <td>
                    <button className={styles.deleteButton} onClick={() => handleDelete(contact._id)}>Delete</button>
                </td>
            </tr>
            ))
        ) : (
            <tr>
            <td colSpan="5">No contacts found.</td>
            </tr>
        )}
        </tbody>

            </table>
        </section>
    );
};

export default ContactList;