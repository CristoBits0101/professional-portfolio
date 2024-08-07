import personalImage from "../assets/images/personal.webp";
import CV from "../components/common/CV/CV";
import Networks from "../components/common/Networks/Networks";

const About = () => {
  return (
    <section className="about-me-container">
      <article className="personal-image-container">
        <img src={personalImage} alt="Cristo Suárez" />
      </article>
      <article className="personal-information-container">
        <h2>Greetings and welcome to my portfolio!</h2>
        <h1>I am Cristo Suárez</h1>
        <p>💻 Junior Full-Stack Web Developer</p>
        <p>✉️ cristobits0101@gmail.com</p>
        <CV />
        <Networks />
      </article>
    </section>
  );
};

export default About;
