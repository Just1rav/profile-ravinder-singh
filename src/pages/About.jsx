import React from 'react';
import { endorsements } from '../data';
import { CheckCircle, Award } from 'lucide-react';
import './Pages.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-section">
                <div className="container">
                    <h1 className="section-title">About Er. Ravinder Singh</h1>

                    <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div className="bio-sction">
                            <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>A Decade of Excellence</h2>
                            <p style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                                I am a 36-year-old industry veteran with over 10 years of experience on Upwork. My background in Computer Science & Engineering (B.Tech) allows me to bridge the gap between technical complexity and operational efficiency.
                            </p>
                            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                Currently based in New Delhi, India, I specialize in helping businesses scale through precise data execution and content management. My "Top Rated" status is not just a badge; it's a promise of quality.
                            </p>

                            <div className="education-badge" style={{ marginTop: '2rem', padding: '1rem', background: '#eef2ff', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Education</h3>
                                <p><strong>B.Tech in Computer Science & Engineering</strong></p>
                            </div>
                        </div>

                        <div className="endorsements-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                            {endorsements.map((item, index) => (
                                <div key={index} className="endorsement-card" style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: 'var(--success-color)', marginRight: '1rem' }}>
                                        <CheckCircle size={32} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)' }}>{item.count}</h3>
                                        <p style={{ color: 'var(--text-light)' }}>Endorsements for "{item.label}"</p>
                                    </div>
                                </div>
                            ))}
                            <div className="endorsement-card" style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <div style={{ color: 'var(--accent-color)', marginRight: '1rem' }}>
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}>ID Verified</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Trusted & Verified Professional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
