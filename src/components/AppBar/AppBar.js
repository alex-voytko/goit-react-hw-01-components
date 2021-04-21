import React from 'react';
import styles from "./AppBar.module.css"

const AppBar = () => (
    <header className={styles.Header}>
        <div className={styles.headerWraper}>
            <div className={styles.logoContainer}></div>
            <div className={styles.buttonContainer}>
                <button className={styles.Button}>Settings</button>
                <button className={styles.Button}>Log out</button>
            </div>
        </div>

    </header>
)

export default AppBar