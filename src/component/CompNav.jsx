import {Link,useLocation} from 'react-router-dom'
import '../styles/CompNav.css';

const CompNav = () =>{
    const location = useLocation();
    return(
        <nav className='comp-nav'>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to='/'>INICIO</Link>
                </li>
                <li className={location.pathname === '/registrar-receta' ? 'active' : ''}>
                    <Link to ='/registrar-receta'>CREAR RECETA</Link>
                </li>
                <li className={location.pathname === '/lista-recetas' ? 'active' : ''}>
                    <Link to ='/lista-recetas'>LISTA DE RECETAS</Link>
                </li>
            </ul>
        </nav>
    );
};

export default CompNav; 