import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Homepage.css';
import CompList from '../component/CompList';
import CompNav from '../component/CompNav';
import CompHeader from '../component/CompHeader';
import '../styles/HomePage.css';

const HomePage = ({recetas}) =>{
    const [busqueda, setBusqueda] = useState('');

    const recetasFiltrados = recetas.filter(receta =>
        receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return(
        <form className='homepage'>
            <CompHeader/>
            <CompNav/>
            <div>
                <input
                    type='text'
                    placeholder='buscar receta...'
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className='homepage-buscador'
                />
            </div>
            <div>
                {recetasFiltrados.length > 0 ? recetasFiltrados.map((receta) => (
                    <CompList
                        key={receta.id}
                        receta={receta}
                    />

                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>
        </form>
    );
}

export default HomePage;