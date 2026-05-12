import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaTools,FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  if (!project) return null;

  return (
    <div className="details-page-wrapper">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-to-home">
          <FaArrowLeft /> Back to Portfolio
        </button>

        <div className="details-main-content">
          <div className="details-hero-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="details-header">
            <h1 className="details-title">{project.title}</h1>
            <div className="details-action-buttons">
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-btn live">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-btn github">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="details-grid">
            <div className="details-info-section">
              <h3><FaInfoCircle /> Description</h3>
              <p>{project.description}</p>
              
              <h3><FaTools /> Challenges Faced</h3>
              <p>{project.challenges || "No challenges listed."}</p>

              <h3><FaLightbulb /> Future Improvements</h3>
              <p>{project.improvements || "No improvements listed."}</p>
            </div>

            <div className="details-sidebar">
              <h3>Technologies Used</h3>
              <div className="tech-tags-list">
                {project.technologies.map((t, i) => (
                  <span key={i} className="tech-item">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;