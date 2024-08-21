import Application from "../components/application/Application";

const Projects = () => {
  const arrimate = {
    name: "Arrímate",
    description: "Social network with e-commerce that encourages participation in events and the sale of community products among people with similar interests.",
    backgroundImage: "",
    links: {
      demo: "",
      video: "",
      code: "",
      docs: ""
    },
    desing: false
  };
  const bearBread = {
    name: "Bear Bread",
    description: "UX/UI design created for an application to order food and make reservations at a location within an amusement park.",
    backgroundImage: "",
    links: {
      demo: "",
      video: "",
      code: "",
      docs: ""
    },
    desing: true
  };
  return (
    <div className="projects-container">
      <Application content={arrimate} />
      <Application content={bearBread} />
    </div>
  );
};

export default Projects;
