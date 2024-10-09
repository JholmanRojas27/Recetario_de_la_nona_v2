import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/CompList.css'
import StarRating from "./StarRating";

const CompList = ({receta}) =>{
    const navigate = useNavigate();
    return(
        <div className="comp-list">
            <h2>{receta.nombre}</h2>
            <p>Categoria: {receta.categoria}</p>
            <p>Tiempo: {receta.tiempo}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <StarRating 
                rating={receta.rating} 
                setRating={(newRating) => updateRating(index, newRating)} 
                />
            <button onClick={() => navigate(`/recetas/${receta.id}`)}>
                Detalles
            </button>
        </div>
    );
};

export default CompList;