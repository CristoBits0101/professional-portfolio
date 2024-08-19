import CV from "../components/cv/CV";
import Networks from "../components/networks/Networks";
import personalImage from "../assets/images/personal.webp";

const About = () => {
  return (
    <section className="about-me-container">
      <article className="personal-image-container">
        <img src={personalImage} alt="Cristo Suárez" />
      </article>
      <article className="personal-information-container">
        <h2>👋 Greetings and welcome to my portfolio!</h2>
        <h1>Cristo Suárez</h1>
        <p>💻 Skilled React and Spring Developer</p>
        <p>✉️ cristobits0101@gmail.com</p>
        <CV />
        <Networks />
      </article>
    </section>
  );
};

export default About;
