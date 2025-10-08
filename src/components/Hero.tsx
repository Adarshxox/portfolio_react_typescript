import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-inner">
        <div className="hero-avatar" aria-hidden="true">
          <img src="/avatar.png" alt="Portrait" loading="eager" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm <span className="accent">Adarsh B</span></h1>
          <p className="subtitle">
            <span>I am a Python Full Stack Developer</span>
            <span>Django, React & REST APIs</span>
            <span>Passionate About Building Scalable Web Applications</span>
          </p>
          <p className="subtitle">
            <span>I build scalable, modern web applications using Python, Django, and React.</span>
            <span>I specialize in RESTful APIs and Docker-based deployments, turning ideas into efficient, user-friendly digital solutions.</span>
          </p>
          <div className="cta" style={{ justifyContent: 'center' }}>
            <a className="btn primary" href="/Adarsh_B_Resume.pdf" target="_blank" rel="noreferrer noopener" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
