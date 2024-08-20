import "./Application.css";
import PropTypes from "prop-types";

export default function Application({ content }) {
  const { name, description, backgroundImage, links } = content;
  return (
    <article className="application-main-article">
      <h2 className="application-main-article-h2">
        {"</>"} {name}
      </h2>
      <section
        className="application-main-article-section-one"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
        {!backgroundImage && (<p className="background-image-placeholder">No background image</p>)}
      </section>
      <section className="application-main-article-section-two">
        <p className="application-main-article-section-two-p">{description}</p>
        <table className="application-main-article-section-two-table">
          <tbody>
            <tr className="application-main-article-section-two-table-tbody-tr">
              <td className="application-main-article-section-two-table-tbody-td">Skill 1</td>
              <td className="application-main-article-section-two-table-tbody-td">Skill 2</td>
            </tr>
          </tbody>
        </table>
        <div className="application-main-article-section-two-div">
          <a href={links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={links.video} target="_blank" rel="noopener noreferrer">
            Video
          </a>
          <a href={links.code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={links.docs} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
        </div>
      </section>
    </article>
  );
}

Application.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    links: PropTypes.shape({
      demo: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      docs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
