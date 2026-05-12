import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaExternalLinkAlt, 
  FaInfoCircle, 
  FaPlus, 
  FaMinus 
} from 'react-icons/fa';
import projectsRaw from '../data/projects.json';
import { resolveProjectImage } from '../utils/projectImages';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(() => projectsRaw.map((p) => ({
    ...p,
    image: resolveProjectImage(p.image)
  })), []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleDetails = (project) => {
    const slug = project.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project/${slug}`, { state: { project } });
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        
        <div className="projects-grid-3-col">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card-dark">
              <div className="card-image-box">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title-text">{project.title}</h3>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-pill">
                    Live <FaExternalLinkAlt size={10} />
                  </a>
                </div>

                <p className="card-description-text">{project.subtitle}</p>

                <div className="card-tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag-pill">{tech}</span>
                  ))}
                </div>

                <button className="view-details-btn" onClick={() => handleDetails(project)}>
                  <FaInfoCircle /> Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="view-more-container">
            <button className="main-view-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <><FaMinus /> Show Less</>
              ) : (
                <><FaPlus /> View More Projects</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;