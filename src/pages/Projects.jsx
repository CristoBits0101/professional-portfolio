import Application from "../components/application/Application";

const Projects = () => {
  const content = {
    name: "Arrímate",
    description: "Social network with e-commerce that encourages participation in events and the sale of community products among people with similar interests.",
    backgroundImage: "",
    links: {
      demo: "",
      video: "https://www.youtube.com/watch?v=q88j897x4kQ",
      code: "https://github.com/CristoBits0101",
      docs: "https://github.com/cristobits0101/arrimate/wiki"
    }
  };
  return (
    <div className="projects-container">
      <Application content={content} />
    </div>
  );
};

export default Projects;
