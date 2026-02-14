import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '../data';
import { ShieldCheck, Award, Clock, DollarSign, Briefcase } from 'lucide-react';
import './Pages.css';

const Home = () => {
    const iconMap = {
        DollarSign: DollarSign,
        Clock: Clock,
        Briefcase: Briefcase,
        Award: Award
    };

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="top-rated-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFD700', color: '#333', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            <Award size={20} /> Top Rated Freelancer
                        </div>
                        <h1 className="hero-title">High-Performance Content Operations & Data Solutions</h1>
                        <p className="hero-subtitle">Scaling businesses through high-speed execution in Data Scraping, Web Research, and Content Operations. Over 24,000 hours of excellence.</p>
                        <div className="cta-group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn-primary">Hire An Elite Freelancer</Link>
                            <Link to="/portfolio" className="btn-secondary" style={{ padding: '1rem 2rem', color: 'var(--primary-color)', border: '2px solid var(--primary-color)', borderRadius: '5px', fontWeight: '600' }}>View Portfolio</Link>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src="/profile.jpg" alt="Ravinder Singh" className="hero-image" />
                    </div>
                </div>
            </section>

            <section className="page-section stats-section">
                <div className="container">
                    <h2 className="section-title">The Impact Dashboard</h2>
                    <div className="grid-container">
                        {stats.map((stat, index) => {
                            const IconComponent = iconMap[stat.icon];
                            return (
                                <div key={index} className="card stat-card" style={{ textAlign: 'center' }}>
                                    <div className="icon-wrapper" style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                        <IconComponent size={48} />
                                    </div>
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>{stat.value}</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="page-section retention-section" style={{ background: '#f0f2f5' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Why Clients Stay</h2>
                    <div className="retention-graphic" style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ShieldCheck size={64} color="var(--success-color)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>60% Long-Term Retention</h3>
                        <p>Clients choose to stay for over 90 days due to unmatched reliability and consistent quality delivery.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
