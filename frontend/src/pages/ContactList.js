import React from 'react';
import styles from './ContactList.module.css';

const ContactList= () => {
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
                    <tr>
                        <td>John Doe</td>
                        <td>jon@gmail.com </td>
                        <td>123-456-7890</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ContactList;