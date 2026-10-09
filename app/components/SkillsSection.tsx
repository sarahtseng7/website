import { SKILLS } from '@/app/config';

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="section-header">
        <span className="section-label">Technical skills</span>
      </div>
      <div className="edu-list">
        {SKILLS.map((group) => (
          <div key={group.label} className="edu-card">
            <p className="edu-school">{group.label}</p>
            <div className="tech-pill-row">
              {group.items.map((skill) => (
                <span key={skill} className="tech-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
