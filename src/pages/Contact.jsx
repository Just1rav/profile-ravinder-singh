import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import './Pages.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-section">
                <div className="container">
                    <h1 className="section-title">Get In Touch</h1>

                    <div className="contact-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="contact-info">
                            <h2 style={{ marginBottom: '1.5rem' }}>Hire an Elite Freelancer</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                                Ready to scale your business operations? I am open to Contract-to-Hire and long-term opportunities.
                            </p>

                            <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <MapPin size={24} color="var(--primary-color)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.2rem' }}>Location</h4>
                                    <p>New Delhi, India</p>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Globe size={24} color="var(--primary-color)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.2rem' }}>Languages</h4>
                                    <p>Native Hindi & Conversational English</p>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Mail size={24} color="var(--primary-color)" />
                                <div>
                                    <h4 style={{ marginBottom: '0.2rem' }}>Availability</h4>
                                    <p>Immediate Start</p>
                                </div>
                            </div>

                        </div>

                        <div className="contact-action" style={{ background: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Ready to clean up your data?</h3>
                            <p style={{ marginBottom: '2rem' }}>Click below to view my Upwork profile and invite me to your job.</p>
                            <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: '1.1rem' }}>
                                Hire Me on Upwork
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
