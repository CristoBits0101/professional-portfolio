import "./Networks.css";
import credly from "../../assets/icons/credly.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Networks = () => {
  return (
    <ul>
      <li>
        <a
          className="grow"
          href="https://github.com/CristoBits0101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Cristo Suárez" />
        </a>
      </li>
      <li>
        <a
          className="grow"
          href="https://www.credly.com/users/cristo-ruben-perez-suarez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={credly} alt="Cristo Suárez" />
        </a>
      </li>
      <li>
        <a
          className="grow"
          href="https://www.linkedin.com/in/cristo-su%C3%A1rez-773a96214"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Cristo Suárez" />
        </a>
      </li>
    </ul>
  );
};

export default Networks;
