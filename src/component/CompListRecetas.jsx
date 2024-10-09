import '../styles/CompListRecetas.css';
import {useNavigate} from 'react-router-dom';

const CompListRecetas = ({receta,EliminarRecetas}) =>{
    const navigate = useNavigate();

    return(
        <form style={{padding:'20px'}} className='comp-list-recetas'>
            <h2 className='comp-list-recetas-nombre'>{receta.nombre}</h2>
            <div style={{display:'flex', alignItems:'center'}}>
                <button 
                    onClick={() => navigate(`/editar-receta/${receta.id}`)} 
                    className='comp-list-recetas-editbtn'>
                        EDITAR
                </button>
                <button
                    onClick={() => EliminarRecetas(receta.id)}
                    className='comp-list-recetas-eliminarbtn'
                >
                    ELIMINAR
                </button>
            </div>
        </form>
    );
};

export default CompListRecetas;