import React from 'react';

const Skills: React.FC = () => {
  const languages = ['Python', 'JavaScript', 'SQL', 'Bash', 'HTML'];
  const frameworks = ['Django', 'Node.js', 'React.js', 'Tailwind CSS', 'Bootstrap'];
  const tools = ['Git', 'PostgreSQL', 'MySQL', 'SQLite', 'Postman', 'Docker', 'Linux', 'Windows', 'Web', 'AWS', 'Microsoft Office', 'Tally ERP', 'Peachtree', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects'];
  const soft = ['Problem Solving', 'Adaptability', 'Team Collaboration', 'Communication', 'Time Management', 'Creativity'];
  const training = ['Laptop Hardware Repair & Servicing', 'BIOS Configuration', 'Circuit Board Maintenance', 'Diagnostics', 'Video Editing', 'Motion Graphics', 'Creative Design'];

  const renderBadges = (items: string[], variant?: string) => (
    <div className="badges">
      {items.map((item) => (
        <span className={`badge${variant ? ' ' + variant : ''}`} key={item}>{item}</span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Training</h2>

        <div className="skills-grid">
          <div className="cert-block">
            <h3>Languages <span aria-hidden>🧩</span></h3>
            {renderBadges(languages, 'badge--lang')}
          </div>

          <div className="cert-block">
            <h3>Frameworks & Libraries <span aria-hidden>🧱</span></h3>
            {renderBadges(frameworks, 'badge--fw')}
          </div>

          <div className="cert-block">
            <h3>Tools & Platforms <span aria-hidden>🛠️</span></h3>
            {renderBadges(tools, 'badge--tools')}
          </div>

          <div className="cert-block">
            <h3>Soft Skills <span aria-hidden>🤝</span></h3>
            {renderBadges(soft, 'badge--soft')}
          </div>

          <div className="cert-block">
            <h3>Additional Technical Skills from Trainings <span aria-hidden>🎓</span></h3>
            {renderBadges(training, 'badge--train')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
