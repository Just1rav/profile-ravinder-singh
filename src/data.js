import { Share2, Code, Database, Edit, CheckCircle } from 'lucide-react';

export const stats = [
    { label: 'Total Earnings', value: '$100,000+', icon: 'DollarSign' },
    { label: 'Professional Hours', value: '24,933+', icon: 'Clock' },
    { label: 'Completed Jobs', value: '144+', icon: 'Briefcase' },
    { label: 'Job Success Score', value: '100%', icon: 'Award' },
];

export const services = [
    {
        title: 'Data & Research',
        description: 'Advanced Data Scraping, Web Research, Lead Generation, and Data Mining.',
        icon: Database,
    },
    {
        title: 'Content Operations',
        description: 'WordPress Management, Video Content Management, and Audio/Video Ripping.',
        icon: Edit,
    },
    {
        title: 'Technical & Creative',
        description: 'Adobe Photoshop, Audio/Video Transcription (AI-assisted), and Core Java (J2EE).',
        icon: Code,
    },
    {
        title: 'Administrative',
        description: 'PC Administration and Troubleshooting.',
        icon: Share2, // Placeholder
    },
];

export const endorsements = [
    { count: '20+', label: 'Committed to Quality' },
    { count: '16+', label: 'Reliability' },
    { count: '11+', label: 'Clear Communication' },
];

export const experience = [
    {
        role: 'Freelance Content Manager',
        company: 'Upwork (Top Rated)',
        period: '2014 - Present',
        description: 'Delivering high-quality content management and virtual assistance services to global clients.',
    },
    {
        role: 'Computer Engineer',
        company: 'Alsun Computers',
        period: 'Jan 2013 – Mar 2014',
        description: 'Focus on records management, maintenance, and systems troubleshooting.',
    },
];
