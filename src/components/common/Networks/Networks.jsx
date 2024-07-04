import credly from "../../../assets/icons/credly.svg";
import github from "../../../assets/icons/github.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import "./Networks.css";

const Networks = () => {
  return (
    <ul>
      <li>
        <a
          className="grow"
          href="https://github.com/CristoBits0101?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Cristo Suárez" />
        </a>
      </li>
      <li>
        <a
          className="grow"
          href="https://www.credly.com/users/cristo-ruben-perez-suarez/badges"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={credly} alt="Cristo Suárez" />
        </a>
      </li>
      <li>
        <a
          className="grow"
          href="https://bit.ly/45ytMCt"
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
