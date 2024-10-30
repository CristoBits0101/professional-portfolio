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
        <h2>👋 ¡Saludos y bienvenid@!</h2>
        <h1>Cristo Suárez</h1>
        <div className='details'>
          <p>💻 Desarrollador Front-end Junior</p>
          <p>🎨 Diseñador UX/UI Junior</p>
          <p>✉️ cristobits0101@gmail.com</p>
        </div>
        <CV />
        <Networks />
      </article>
    </section>
  )
}

export default About
