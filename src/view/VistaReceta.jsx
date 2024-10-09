import { useEffect, useState } from 'react';
import '../styles/VistaReceta.css';
import { useNavigate, useParams } from 'react-router-dom';
import CompNav from '../component/CompNav';
import CompHeader from '../component/CompHeader';
import { FiPlus } from 'react-icons/fi';

const VistaReceta = ({recetas, agregarReceta,editarReceta}) =>{
    const navigate = useNavigate();

    const [newReceta, setNewReceta] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ingredientes, setIngredientes] = useState(['']);
    const [tiempo, setTiempo] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [preparacion, setPreparacion] = useState('');
    const {id} = useParams();

    // Manejo de múltiples ingredientes
    const handleIngredienteChange = (index, value) => {
        const newIngredientes = [...ingredientes];
        newIngredientes[index] = value;
        setIngredientes(newIngredientes);
    };

    const addIngredienteField = () => {
        setIngredientes([...ingredientes, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevaReceta = {
            id: Date.now(),
            nombre: newReceta,
            categoria: categoria,
            ingredientes: ingredientes,
            tiempo: tiempo,
            dificultad: dificultad,
            preparacion: preparacion,
        };

        // Guardar la receta en localStorage
        agregarReceta(nuevaReceta);
        console.log('Receta agregada:', nuevaReceta);
        navigate('/');
    };

    const onAtras = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <CompHeader/>
            <CompNav/>
            <h2>REGISTRAR RECETA</h2>
            <div className='vista-receta'>
                <input
                    type='text'
                    placeholder='Nombre receta'
                    value={newReceta}
                    onChange={(e) => setNewReceta(e.target.value)}
                    required
                />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="">..seleccione..</option>
                    <option value="breakfast">Desayuno</option>
                    <option value="lunch">Almuerzo</option>
                    <option value="dinner">Cena</option>
                </select>

                <div className='ingredientes-list'>
                    {ingredientes.map((ingrediente, index) => (
                        <input
                            key={index}
                            type='text'
                            placeholder={`Ingrediente ${index + 1}`}
                            value={ingrediente}
                            onChange={(e) => handleIngredienteChange(index, e.target.value)}
                            required
                        />
                    ))}
                    <button type="button" onClick={addIngredienteField}>
                        <FiPlus size={20}/>
                    </button>
                </div>

                <input
                    type='text'
                    placeholder='Tiempo de preparación'
                    value={tiempo}
                    onChange={(e) => setTiempo(e.target.value)}
                    required
                />

                <select value={dificultad} onChange={(e) => setDificultad(e.target.value)} required>
                    <option value="">..seleccione..</option>
                    <option value="easy">Fácil</option>
                    <option value="intermediate">Intermedio</option>
                    <option value="hard">Difícil</option>
                </select>

                <textarea
                    cols='30'
                    rows='5'
                    placeholder='Preparación'
                    value={preparacion}
                    onChange={(e) => setPreparacion(e.target.value)}
                    className='vista-recetas-text'
                    required
                />

                <button type='submit' className='btn-insert'>
                    AGREGAR
                </button>
                <button type='button' className='btn-prew' onClick={onAtras}>
                    ATRÁS
                </button>
            </div>
        </form>
    );
};

export default VistaReceta;