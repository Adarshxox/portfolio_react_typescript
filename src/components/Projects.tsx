import React from 'react';

type Project = {
  title: string;
  description: string;
  link: string;
  tech: string[];
};

const projects: Project[] = [
  { 
    title: 'URL Shortener', 
    description: 'Django MVT web app to transform long URLs into short links with validation, minimal UI, and Dockerized deployment.', 
    link: 'Not available',
    tech: ['Django', 'Python', 'SQLite', 'Docker']
  },
  { 
    title: 'Weather App', 
    description: 'Django MVT app consuming a third‑party weather API with responsive UI and robust error handling.', 
    link: 'https://...',
    tech: ['Django', 'Requests', 'HTML/CSS']
  },
  { 
    title: 'LEADapi', 
    description: 'Full‑stack lead management app (React + Django REST, JWT). User auth and CRUD over REST APIs.', 
    link: 'https://...',
    tech: ['React', 'Django REST', 'JWT', 'PostgreSQL']
  },
  { 
    title: 'CartNest', 
    description: 'Customizable e‑commerce platform with product listings, search, cart, checkout, and auth (Django + Tailwind).', 
    link: 'https://...',
    tech: ['Django', 'Tailwind CSS', 'Stripe (optional)']
  },
  { 
    title: 'Taskly', 
    description: 'Lightweight task manager with categories, due dates, status tracking, and auth (Django + SQLite).', 
    link: 'https://...',
    tech: ['Django', 'SQLite', 'Auth']
  },
];

const Projects: React.FC = () => {
  const getBadgeClass = (t: string) => {
    const s = t.toLowerCase();
    if (/(react|django|tailwind|html|css|rest)/.test(s)) return 'badge--fw';
    if (/(postgres|sqlite|docker|jwt|stripe|requests)/.test(s)) return 'badge--tools';
    return 'badge--lang';
  };
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p, i) => {
            const url = p.link && p.link !== 'Not available' ? p.link : undefined;
            return (
              <a
                key={p.title}
                className="card project reveal"
                href={url || '#'}
                {...(url ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                style={{ ['--reveal-delay' as any]: `${i * 80}ms` }}
              >
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.tech?.length ? (
                  <div className="badges" aria-label="Featured Tech">
                    {p.tech.map((t) => (
                      <span key={t} className={`badge ${getBadgeClass(t)}`}>{t}</span>
                    ))}
                  </div>
                ) : null}
                <span className="arrow">{url ? '→' : '⧉'}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
