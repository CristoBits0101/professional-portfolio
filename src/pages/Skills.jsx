import Technologies from "../components/common/Card/Technologies";

import bootstrap from "../assets/icons/bootstrap.svg";
import css from "../assets/icons/css.svg";
import git from "../assets/icons/git.svg";
import github2 from "../assets/icons/github2.svg";
import html5 from "../assets/icons/html5.svg";
import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import php from "../assets/icons/php.svg";
import postgresql from "../assets/icons/postgresql.svg";
import react from "../assets/icons/react.svg";
import spring from "../assets/icons/spring.svg";
import sql from "../assets/icons/sql.svg";

const Skills = () => {
  const frontend = [
    { icon: html5, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: bootstrap, name: "Bootstrap" },
    { icon: javascript, name: "JavaScript" },
    { icon: react, name: "React" },
  ];

  const backend = [
    { icon: java, name: "Java" },
    { icon: spring, name: "Spring" },
    { icon: php, name: "PHP" },
    { icon: laravel, name: "Laravel" },
  ];

  const technologies = [
    { icon: sql, name: "SQL" },
    { icon: mysql, name: "MySQL" },
    { icon: postgresql, name: "PostgreSQL" },
    { icon: git, name: "Git" },
    { icon: github2, name: "GitHub" },
  ];

  return (
    <section className="skills-container">
      <Technologies
        title="Frontend"
        technologies={frontend}
        className="card card-1"
      />
      <Technologies
        title="Backend"
        technologies={backend}
        className="card card-2"
      />
      <Technologies
        title="Technologies"
        technologies={technologies}
        className="card card-3"
      />
    </section>
  );
};

export default Skills;
