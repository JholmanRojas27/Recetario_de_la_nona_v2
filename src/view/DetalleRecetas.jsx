import '../styles/DetalleRecetas.css';
import React from "react";
import { useNavigate,useParams } from 'react-router-dom';
import CompHeader from '../component/CompHeader';
import CompNav from '../component/CompNav';

const DetalleRecetas =({recetas}) =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const receta = recetas.find(p => p.id === parseInt(id));

    const onAtras = (e) => {
        e.preventDefault();
        navigate('/');
    };
    return (
        <div className="producto-detalle">
            <CompHeader/>
            <CompNav/>
            <div>
                <h3>{receta.nombre}</h3>
                <p><strong>Categoría:</strong> {receta.categoria}</p>
                <p><strong>Tiempo:</strong> {receta.tiempo}</p>
                <p><strong>Dificultad:</strong> {receta.dificultad}</p>
                <p><strong>Ingredientes:</strong> {receta.ingredientes.join(', ')}</p>
                <p><strong>Preparación:</strong> {receta.preparacion}</p>
                <button onClick={onAtras} className='boton-atras'>ATRAS</button>
            </div>
        </div>
    );

}

export default DetalleRecetas