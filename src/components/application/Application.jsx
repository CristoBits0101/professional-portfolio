import './Application.css'
import PropTypes from 'prop-types'
import docs from '../../assets/icons/docs.svg'
import folder from '../../assets/icons/folder.svg'

export default function Application({ content }) {
  const { name, state, description, video, links, buttonText, desing } = content

  return (
    <article className='application-main-article'>
      <section className='application-main-article-section-one'>
        {video ? (
          video.includes('youtube') ? (
            <iframe
              width='100%'
              height='100%'
              src={video.replace('watch?v=', 'embed/')}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          ) : (
            <video controls>
              <source src={video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <p>⚠️ The video is not available</p>
        )}
      </section>
      <section className='application-main-article-section-two'>
        <h2 className='application-main-article-h2'>
          {!desing ? '💾 ' : '🎨 '}
          {name}
        </h2>
        <p className='application-main-article-section-two-p'>{description}</p>
        <p className='application-main-article-section-two-p'>{state}</p>
        <table className='application-main-article-section-two-table'>
          <tbody>
            <tr className='application-main-article-section-two-table-tbody-tr'>
              <td className='application-main-article-section-two-table-tbody-td'></td>
              <td className='application-main-article-section-two-table-tbody-td'></td>
            </tr>
          </tbody>
        </table>
        <div className='application-main-article-section-two-div'>
          {links.demo && (
            <a href={links.demo} target='_blank' rel='noopener noreferrer'>
              Demo
            </a>
          )}
          {links.frontendCode && buttonText.frontendTechnology && (
            <a
              href={links.frontendCode}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={folder} alt='Icon folder' />
              {buttonText.frontendTechnology}
            </a>
          )}
          {links.backendCode && buttonText.backendTechnology && (
            <a
              href={links.backendCode}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={folder} />
              {buttonText.backendTechnology}
            </a>
          )}
          {links.docs && (
            <a href={links.docs} target='_blank' rel='noopener noreferrer'>
              <img src={docs} alt='Icon docs' />
              Docs
            </a>
          )}
        </div>
      </section>
    </article>
  )
}

Application.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.string,
    links: PropTypes.shape({
      demo: PropTypes.string,
      frontendCode: PropTypes.string,
      backendCode: PropTypes.string,
      docs: PropTypes.string,
    }).isRequired,
    buttonText: PropTypes.shape({
      frontendTechnology: PropTypes.string,
      backendTechnology: PropTypes.string,
    }),
    desing: PropTypes.bool,
  }).isRequired,
}
