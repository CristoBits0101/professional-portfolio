import personalImage from "../assets/images/personal.webp";

const About = () => {
  return (
    <section className="about-me-container">
      <article className="personal-image-container">
        <img src={personalImage} alt="Cristo Suárez" />
      </article>
      <article className="personal-information-container">
        <h2>Greetings and welcome to my portfolio!</h2>
        <h1>I am Cristo Suárez</h1>
        <p>
          💻 Junior Full Stack Web Developer 🎨 Beginner UX/UI Designer 🧑‍🏫
          Certified Scrum Master ✉️ cristobits0101@gmail.com
        </p>
      </article>
    </section>
  );
};

export default About;
