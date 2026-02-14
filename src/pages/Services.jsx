import React from 'react';
import { services } from '../data';
import './Pages.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-section">
                <div className="container">
                    <h1 className="section-title">Service Suite</h1>
                    <p className="hero-subtitle" style={{ textAlign: 'center' }}>Comprehensive technical and administrative solutions tailored for growth.</p>

                    <div className="grid-container">
                        {services.map((service, index) => {
                            // Ensure icon is treated as a component if it's not a string in data.js
                            // In data.js I passed the component itself
                            const Icon = service.icon;
                            return (
                                <div key={index} className="card service-card">
                                    <div className="icon-wrapper" style={{ background: '#eef2ff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-light)' }}>{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
