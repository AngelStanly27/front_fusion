
import { NavLink } from 'react-router-dom';
import menuItems from './../constants/menuItems';

const Navbar = () => {

  return (
    <nav className="nav-bar">
    <ul className="nav-bar__nav-list">

      {menuItems.map( item => (
        <li className="nav-bar__nav-item" key={item.id}>
          <NavLink to={item.ruta} className="nav-bar__nav-link">{item.nombre}</NavLink>

        </li>
        
      ))}
      
    </ul>
   </nav>
  )
}

export default Navbar