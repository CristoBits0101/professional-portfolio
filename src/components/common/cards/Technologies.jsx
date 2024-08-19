import React from "react";
import "./Technologies.css";

const SkillsCard = ({ title, technologies, className }) => {
  return (
    <article className={className}>
      <h3>{title}</h3>
      <div className="skills">
        {technologies.map((tech, index) => (
          <div className={`box-${index + 1}`} key={index}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillsCard;
