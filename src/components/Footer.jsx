import menuItems from '../constants/menuItems'
import './Footer.scss'
import { NavLink, Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
    <nav className="food">
      <div className="food__logotipo">
      <img src="/img/logo.png" alt="aire acondicionado el angel" className="food__logo" /> 
      </div>
     
      <div className="food__inicio">
        
        {menuItems.map( item => (
          <ul key={item.id}>
            <Link to={item.ruta} className="food__link" target='_parent'>{item.nombre}</Link>
          </ul>
        ))

        }
      </div>
      
      <div className="food__nota">
      <p>En nuestra tienda Aire Acondicionado El Angel tenemos en cuenta toda la confidencialidad de los datos del Usuario. De conformidad con lo dispuesto por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales. </p>
      </div>
      
      <div className="food__avisos">
        <ul><NavLink to="#" className="food__link">Aviso legal</NavLink></ul>
        <ul><NavLink to="#" className="food__link">Términos y condiciones</NavLink></ul>
        <ul><NavLink to="#" className="food__link">Política de privacidad</NavLink></ul>
        <ul><NavLink to="#" className="food__link">Política cookies</NavLink></ul>
      </div>

      </nav>
    </footer>
  )
}

export default Footer