import CV from '../components/cv/CV'
import Networks from '../components/networks/Networks'
import personalImage from '../assets/images/cristo.png'

const About = () => {
  return (
    <section className='about-me-container'>
      <article className='personal-image-container'>
        <img src={personalImage} alt='Cristo Suárez' />
      </article>
      <article className='personal-information-container'>
        <h2>👋 Hello and welcome!</h2>
        <h1>Cristo Suárez</h1>
        <div className='details'>
          <p>💻 Junior Front-end Developer</p>
          <p>🎨 Beginner UX/UI Designer</p>
          <p>✉️ cristobits0101@gmail.com</p>
        </div>
        <CV />
        <Networks />
      </article>
    </section>
  )
}

export default About
