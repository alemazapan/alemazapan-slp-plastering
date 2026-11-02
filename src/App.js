import { siteContent } from './data/siteContent.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { MetricsRibbon, About } from './components/About.js';
import { Services } from './components/Services.js';
import { WhyChooseUs } from './components/WhyChooseUs.js';
import { Gallery } from './components/Gallery.js';
import { CtaBanner } from './components/CtaBanner.js';
import { Lightbox } from './components/Lightbox.js';
import { FAQ } from './components/FAQ.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

export function App() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedService, setSelectedService] = React.useState(null);

  // Manage Lightbox navigation
  const currentIndex = selectedProject
    ? siteContent.projects.findIndex(p => p.id === selectedProject.id)
    : -1;

  const handleNextProject = () => {
    if (currentIndex >= 0 && currentIndex < siteContent.projects.length - 1) {
      setSelectedProject(siteContent.projects[currentIndex + 1]);
    }
  };

  const handlePrevProject = () => {
    if (currentIndex > 0) {
      setSelectedProject(siteContent.projects[currentIndex - 1]);
    }
  };

  const handleSelectServiceFromCard = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return html`
    <div class="site-root">
      <${Navbar} 
        company=${siteContent.company} 
      />

      <main role="main">
        <${Hero} 
          company=${siteContent.company} 
          heroReview=${siteContent.heroReview}
          onSelectProject=${(p) => setSelectedProject(p)}
        />

        <${MetricsRibbon} 
          metrics=${siteContent.metrics} 
        />

        <${About} 
          company=${siteContent.company} 
        />

        <${Services} 
          services=${siteContent.services} 
          onSelectService=${handleSelectServiceFromCard}
        />

        <${WhyChooseUs} 
          pillars=${siteContent.pillars} 
        />

        <${Gallery} 
          projects=${siteContent.projects} 
          categories=${siteContent.galleryCategories}
          onOpenLightbox=${(p) => setSelectedProject(p)}
        />

        <${CtaBanner} 
          company=${siteContent.company} 
        />

        <${FAQ} 
          faqs=${siteContent.faqs} 
        />

        <${Contact} 
          company=${siteContent.company} 
          contactInfo=${siteContent.contact}
          selectedService=${selectedService}
        />
      </main>

      <${Footer} 
        company=${siteContent.company} 
      />

      ${selectedProject && html`
        <${Lightbox} 
          project=${selectedProject}
          onClose=${() => setSelectedProject(null)}
          onNext=${handleNextProject}
          onPrev=${handlePrevProject}
          hasNext=${currentIndex < siteContent.projects.length - 1}
          hasPrev=${currentIndex > 0}
        />
      `}
    </div>
  `;
}
