import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Er. Ravinder Singh</h3>
                        <p className="footer-title">Top Rated Content Manager & Virtual Assistant</p>
                        <p>Scaling businesses through high-speed execution in Data Scraping, Web Research, and Content Operations.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>New Delhi, India</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>Available for Hire</span>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ravinder Singh. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
