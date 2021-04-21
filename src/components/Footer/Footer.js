import React from 'react';
import appBarStyles from "../AppBar/AppBar.module.css"
import footerStyles from "./Footer.module.css"

const Footer = () => (
    <footer className={appBarStyles.Header}>
        <div className={appBarStyles.headerWraper}>
            <div className={appBarStyles.logoContainer}></div>
            <div className={footerStyles.linksContainer}>
                <a href="#" className={footerStyles.link}>About Us</a>
                <a href="#" className={footerStyles.link}>Help</a>
                <a href="#" className={footerStyles.link}>Privacy Policy</a>
            </div>
        </div>
    </footer>
)


export default Footer