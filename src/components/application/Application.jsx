import "./Application.css";
import PropTypes from "prop-types";

export default function Application({
  name = "Undefined name",
  backgroundImage = "",
  description = "Undefined description",
}) {
  return (
    <article className="application-main-article">
      <h2 className="application-main-article-h2">
        {"</>"} {name}
      </h2>
      <section
        className="application-main-article-section-one"
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        {!backgroundImage && (
          <p className="background-image-placeholder">{backgroundImage}</p>
        )}
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
          <a href="" target="_blank">
            Demo
          </a>
          <a href="" target="_blank">
            Video
          </a>
          <a href="" target="_blank">
            Code
          </a>
          <a href="" target="_blank">
            Docs
          </a>
        </div>
      </section>
    </article>
  );
}

Application.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
};
