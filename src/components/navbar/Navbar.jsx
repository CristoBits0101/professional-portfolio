import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='flicker' to='/'>
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink className='flicker' to='/Projects'>
            Proyectos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
