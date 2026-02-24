import React from 'react';

type Project = {
  title: string;
  description: string;
  link: string;
  tech: string[];
  videoLink?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
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
    link: 'Not available',
    tech: ['Django', 'Requests', 'HTML/CSS']
  },
  { 
    title: 'LEADapi', 
    description: 'Full‑stack lead management app (React + Django REST, JWT). User auth and CRUD over REST APIs.', 
    link: 'Not available',
    tech: ['React', 'Django REST', 'JWT', 'PostgreSQL']
  },
  { 
    title: 'CartNest', 
    description: 'Customizable e‑commerce platform with product listings, search, cart, checkout, and auth (Django + Tailwind).', 
    link: 'Not available',
    tech: ['Django', 'Tailwind CSS', 'Stripe (optional)']
  },
  { 
    title: 'Taskly', 
    description: 'Lightweight task manager with categories, due dates, status tracking, and auth (Django + SQLite).', 
    link: 'https://todo-django-scwh.onrender.com',
    tech: ['Django', 'SQLite', 'Auth']
  },
];

const videoEditingProjects: Project[] = [
  { 
    title: 'Marvel Tamil Anthem By AR Rahman', 
    description: 'Electrifying Marvel Anthem in Tamil with fresh musical twist and epic visuals.', 
    link: 'https://youtu.be/odCkJAcT9l4?si=McGCt912j6fYuLKh',
    videoLink: 'https://youtu.be/odCkJAcT9l4?si=McGCt912j6fYuLKh',
    thumbnailUrl: 'https://img.youtube.com/vi/odCkJAcT9l4/hqdefault.jpg',
    tech: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve']
  },
  { 
    title: 'Singapenne Bigil movie women Athem', 
    description: 'Motivational Tamil anthem celebrating women strength and resilience.', 
    link: 'https://youtu.be/PyJf_qghv9U?si=NQAyL4JWeShXmpip',
    videoLink: 'https://youtu.be/PyJf_qghv9U?si=NQAyL4JWeShXmpip',
    thumbnailUrl: 'https://img.youtube.com/vi/PyJf_qghv9U/hqdefault.jpg',
    tech: ['After Effects', 'Cinema 4D', 'Adobe Animate']
  },
];

const graphicsDesignProjects: Project[] = [
  { 
    title: 'Sports Poster Graphic Design – Visual Storytelling in Action', 
    description: 'Vibrant sports poster design capturing energy and visual impact through bold typography.', 
    link: 'https://www.behance.net/gallery/207692987/Sports-Poster/modules/1179541015',
    imageUrl: '/p1.png',
    tech: ['Adobe Creative Suite', 'Adobe Photoshop']
  },
  { 
    title: 'Sneaker Promotion — Social Media Design', 
    description: 'Dynamic social media graphic combining bold visuals and strategic composition for sneaker promotion.', 
    link: 'https://www.behance.net/gallery/208587693/Social-Media-Post-for-Sneaker-Promotion',
    imageUrl: '/p2.png',
    tech: ['Adobe Creative Suite', 'Adobe Photoshop']
  },
  { 
    title: 'Porsche 911 – Automotive Poster Design', 
    description: 'Stylized automotive poster design inspired by iconic Porsche 911 with elegant typography.', 
    link: 'https://www.behance.net/gallery/210089785/Porsche-911',
    imageUrl: '/p3.jpg',
    tech: ['Adobe Creative Suite', 'Adobe Photoshop']
  },
];

const Projects: React.FC = () => {
  const getBadgeClass = (t: string) => {
    const s = t.toLowerCase();
    if (/(react|django|tailwind|html|css|rest)/.test(s)) return 'badge--fw';
    if (/(postgres|sqlite|docker|jwt|stripe|requests|adobe|premiere|after effects|davinci|illustrator|photoshop|figma|canva|cinema 4d|animate)/.test(s)) return 'badge--tools';
    return 'badge--lang';
  };
  const renderProjectCard = (project: Project, index: number) => {
    const url = project.link && project.link !== 'Not available' ? project.link : undefined;
    const hasVideo = project.videoLink && project.videoLink !== 'Not available';
    const hasThumbnail = project.thumbnailUrl;
    const hasImage = project.imageUrl;
    
    return (
      <div
        key={project.title}
        className="card project reveal"
        style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
      >
        {hasVideo && hasThumbnail && (
          <div className="video-container">
            <img
              className="video-thumbnail"
              src={project.thumbnailUrl}
              alt={`${project.title} thumbnail`}
              onClick={() => window.open(project.videoLink, '_blank')}
            />
            <div className="play-button-overlay">
              <div className="play-button">▶</div>
            </div>
          </div>
        )}
        {hasImage && !hasVideo && (
          <div className="image-container">
            <img
              className="project-image"
              src={project.imageUrl}
              alt={`${project.title} image`}
              onError={(e) => {
                console.error('Image failed to load:', project.imageUrl);
                e.currentTarget.src = 'https://via.placeholder.com/160x160?text=Image+Not+Found';
              }}
              onClick={() => window.open(project.link, '_blank')}
            />
          </div>
        )}
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.tech?.length ? (
            <div className="badges" aria-label="Featured Tech">
              {project.tech.map((t) => (
                <span key={t} className={`badge ${getBadgeClass(t)}`}>{t}</span>
              ))}
            </div>
          ) : null}
        </div>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="project-link"
          >
            →
          </a>
        ) : (
          <span className="arrow">⧉</span>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        
        {/* Coding Projects */}
        <div className="project-category">
          <h3 className="category-title">💻 Coding Projects</h3>
          <div className="grid">
            {projects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Video Editing Projects */}
        <div className="project-category">
          <h3 className="category-title">🎬 Video Editing Projects</h3>
          <div className="video-editing-grid">
            {videoEditingProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Graphics Design Projects */}
        <div className="project-category">
          <h3 className="category-title">🎨 Graphics Design Projects</h3>
          <div className="grid">
            {graphicsDesignProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
