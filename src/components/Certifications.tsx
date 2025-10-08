import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>🏅 Certifications</h2>

        <div className="cert-block">
          <h3>Integrated Corporate Solution Engineer (ICSE) — Kerala, India</h3>
          <p className="muted">Hardware & Laptop Servicing Practical Training — Mar 2020</p>
          <ul>
            <li>Laptop Hardware Repair & Servicing: Gained hands-on experience in disassembling, repairing, and reassembling laptops across multiple brands and models.</li>
            <li>Soldering & Circuit Board Maintenance: Performed precision soldering/desoldering of components on motherboards and other PCB assemblies.</li>
            <li>BIOS Configuration & Troubleshooting: Configured BIOS settings, performed firmware updates, and resolved hardware-related boot issues.</li>
            <li>Diagnostics & Fault Isolation: Used professional diagnostic tools to identify, troubleshoot, and repair hardware failures efficiently.</li>
          </ul>
        </div>

        <div className="cert-block">
          <h3>Office Management System (Microsoft Office, Tally, Peachtree) — Kerala, India</h3>
          <p className="muted">Office & Accounting Software Training — Mar 2020</p>
          <ul>
            <li>Microsoft Office Proficiency: Gained expertise in Word, Excel, PowerPoint, and Access for professional documentation and data management.</li>
            <li>Tally ERP & Accounting Systems: Learned financial accounting, ledger management, and report generation using Tally ERP software.</li>
            <li>Peachtree Accounting: Acquired practical experience in maintaining books, generating invoices, and managing transactions.</li>
            <li>Administrative Efficiency: Developed strong office management, documentation, and digital organization skills for workplace productivity.</li>
          </ul>
        </div>

        <div className="cert-block">
          <h3>Graphics and Multimedia Design (Ray Animations) — Kerala, India</h3>
          <p className="muted">Creative Design & Multimedia Editing Training — May 2020</p>
          <ul>
            <li>Graphic Design Fundamentals: Created professional designs using Adobe Photoshop and Illustrator, focusing on branding and visual identity.</li>
            <li>Video Editing & Post-Production: Edited high-quality videos using Adobe Premiere Pro with smooth transitions, effects, and audio synchronization.</li>
            <li>Motion Graphics & Animation: Designed engaging animations and visual effects in Adobe After Effects for promotional and creative projects.</li>
            <li>Creative Workflow Optimization: Developed efficient design and editing workflows to meet project deadlines with consistent quality.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
