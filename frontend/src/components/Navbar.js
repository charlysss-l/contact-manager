import React from "react";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>Contact Manager</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Contact Form</Link>
                </li>
                <li>
                    <Link to="/list">Contact List</Link>
                </li>
            </ul>
        </nav>)
};
export default Navbar;