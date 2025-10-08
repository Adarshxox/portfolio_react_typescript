import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>

        <div className="cert-block">
          <h3>Bangalore University — Bangalore, Karnataka, India</h3>
          <p className="muted">Master of Computer Applications, CGPA: 6.87 — Dec 2021 - Dec 2023</p>
          <p className="muted">
            Relevant Courses: Data Structures, Algorithms, Operating Systems, Machine Learning, Web Development, Computer Networks
          </p>
        </div>

        <div className="cert-block">
          <h3>Bharathiyar University — Coimbatore, Tamilnadu, India</h3>
          <p className="muted">Bachelor of Computer Applications, CGPA: 7.20 — July 2018 - June 2021</p>
          <p className="muted">
            Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
