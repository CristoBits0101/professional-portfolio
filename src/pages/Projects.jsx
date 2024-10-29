import Application from "../components/application/Application";
import arrimate from "../data/arrimateData";
import smartEcoSchool from "../data/smartEcoSchool";
import bearBread from "../data/bearBreadData";

const Projects = () => {
  return (
    <div className="projects-container">
      <Application content={arrimate} />
      <Application content={smartEcoSchool} />
      <Application content={bearBread} />
    </div>
  );
};

export default Projects;
