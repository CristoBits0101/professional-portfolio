import Application from "../components/application/Application";
import arrimate from "../data/arrimateData";
import bearBread from "../data/bearBreadData";
import participatePortal from "../data/participatePortalData";

const Projects = () => {
  return (
    <div className="projects-container">
      <Application content={participatePortal} />
      <Application content={arrimate} />
      <Application content={bearBread} />
    </div>
  );
};

export default Projects;
