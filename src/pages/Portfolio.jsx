import React from 'react';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';
import './Pages.css';

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <section className="page-section">
                <div className="container">
                    <h1 className="section-title">Work History & Portfolio</h1>

                    <div className="timeline-section" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        {experience.map((job, index) => (
                            <div key={index} className="timeline-item" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
                                <div className="timeline-marker" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ background: 'var(--primary-color)', padding: '0.8rem', borderRadius: '50%', color: 'white', zIndex: 2 }}>
                                        <Briefcase size={20} />
                                    </div>
                                    {index !== experience.length - 1 && <div style={{ width: '2px', background: '#ddd', flexGrow: 1, marginTop: '0.5rem' }}></div>}
                                </div>
                                <div className="timeline-content" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{job.role}</h3>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{job.company}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                        <Calendar size={16} />
                                        <span>{job.period}</span>
                                    </div>
                                    <p>{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="projects-grid">
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--secondary-color)' }}>Project Showcase</h2>
                        <div className="grid-container">
                            <div className="card project-card">
                                <h3 className="project-title" style={{ marginBottom: '1rem' }}>Web Research Projects</h3>
                                <p>Market analysis, competitor tracking, and lead generation databases built for high-growth startups.</p>
                            </div>
                            <div className="card project-card">
                                <h3 className="project-title" style={{ marginBottom: '1rem' }}>Data Scraping Workflows</h3>
                                <p>Automated extraction pipelines for e-commerce, real estate, and financial data aggregation.</p>
                            </div>
                            <div className="card project-card">
                                <h3 className="project-title" style={{ marginBottom: '1rem' }}>Content Management Systems</h3>
                                <p>Full-cycle WordPress management, including plugin optimization, SEO updates, and media handling.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Portfolio;
