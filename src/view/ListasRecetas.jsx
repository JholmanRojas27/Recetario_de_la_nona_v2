import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ListaRecetas.css';
import CompNav from '../component/CompNav';
import CompListRecetas from '../component/CompListRecetas';
import CompHeader from '../component/CompHeader';

const ListaRecetas = ({recetas,eliminarReceta}) =>{
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const recetasFiltrados = recetas.filter(receta =>
        receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const onAtras = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return(
        <form className='lista-recetas'>
            <CompHeader/>
            <CompNav/>
            <div>
                <h1>LISTA DE RECETAS</h1>
                <input
                    type='text'
                    placeholder='buscar receta...'
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className='lista-recetas-buscador'
                />
            </div>
            <div className='lista-recetas-list'>
                {recetasFiltrados.length > 0 ? recetasFiltrados.map((receta) => (
                    <CompListRecetas
                        key={receta.id}
                        receta={receta}
                        EliminarRecetas = {eliminarReceta}
                    />

                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>
            <button onClick={onAtras} className='lista-recetas-prew'>ATRAS</button>
        </form>
    );
};

export default ListaRecetas;