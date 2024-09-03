import Application from "../components/application/Application";
import arrimate from "../data/arrimateData";
import bearBread from "../data/bearBreadData";

const Projects = () => {
  return (
    <div className="projects-container">
      <Application content={arrimate} />
      <Application content={bearBread} />
    </div>
  );
};

export default Projects;
