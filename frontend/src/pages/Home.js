import React from 'react';
import styles from './Home.module.css';
import {Link} from "react-router-dom";
const Home = () => {
    return(
        <section className={styles.homeSection}>
            <h1>Welcome to the Contact Manager</h1>
            <p>Manage your contacts efficiently and effortlessly.</p>
            <Link to="/list">Get Started</Link>
        </section>
    );
};

export default Home;