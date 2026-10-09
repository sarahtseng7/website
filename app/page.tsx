import { Header }           from '@/app/components/Header';
import { Footer }           from '@/app/components/Footer';
import { HeroSection }      from '@/app/components/HeroSection';
import { EducationSection } from '@/app/components/EducationSection';
import { ExperienceSection } from '@/app/components/ExperienceSection';
import { ProjectsSection }  from '@/app/components/ProjectsSection';
import { ContactSection }   from '@/app/components/ContactSection';

import { SkillsSection } from '@/app/components/SkillsSection';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <HeroSection />

      <main className="main-content">
        <div className="content-container">
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
