import Application from "../components/application/Application";
import bearBreadDoc from "../../public/bear-bread-app.pdf";
import videoArrimate from "../assets/videos/arrimate.mp4";

const Projects = () => {
  const arrimate = {
    name: "Arrímate",
    description:
      "Social network with e-commerce that encourages participation in events and the sale of community products among people with similar interests.",
    state: "🛠️ In Progress",
    video: videoArrimate,
    links: {
      demo: "",
      code: "",
      docs: "",
    },
    desing: false,
  };

  const bearBread = {
    name: "Bear Bread",
    description:
      "UX/UI design created for an application to order food and make reservations at a location within an amusement park.",
    state: "✅ Completed",
    video: "",
    links: {
      demo: "",
      code: "",
      docs: bearBreadDoc,
    },
    desing: true,
  };

  return (
    <div className="projects-container">
      <Application content={arrimate} />
      <Application content={bearBread} />
    </div>
  );
};

export default Projects;
