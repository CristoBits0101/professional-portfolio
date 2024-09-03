import "./Application.css";
import PropTypes from "prop-types";

export default function Application({ content }) {
  const { name, state, description, video, links, desing } = content;

  return (
    <article className="application-main-article">
      <section className="application-main-article-section-one">
        {video ? (
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>⚠️ The video is not available</p>
        )}
      </section>
      <section className="application-main-article-section-two">
        <h2 className="application-main-article-h2">
          {!desing ? "💾 " : "🎨 "}
          {name}
        </h2>
        <p className="application-main-article-section-two-p">{description}</p>
        <p className="application-main-article-section-two-p">{state}</p>
        <table className="application-main-article-section-two-table">
          <tbody>
            <tr className="application-main-article-section-two-table-tbody-tr">
              <td className="application-main-article-section-two-table-tbody-td">
              </td>
              <td className="application-main-article-section-two-table-tbody-td">
              </td>
            </tr>
          </tbody>
        </table>
        <div className="application-main-article-section-two-div">
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {links.docs && (
            <a href={links.docs} target="_blank" rel="noopener noreferrer">
              Docs
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

Application.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.string,
    links: PropTypes.shape({
      demo: PropTypes.string,
      code: PropTypes.string,
      docs: PropTypes.string,
    }).isRequired,
    desing: PropTypes.bool,
  }).isRequired,
};
