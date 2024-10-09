import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './view/HomePage';
import DetalleRecetas from './view/DetalleRecetas';
import ListaRecetas from './view/ListasRecetas';
import VistaReceta from './view/VistaReceta';

const App = () =>{

  const inicialRecetas = [
    {
      id:1,
      nombre: "Tortilla de papas",
      categoria: "cena",
      ingredientes: ["Papas", "Huevos", "Cebolla", "Aceite"],
      tiempo: "30 min",
      dificultad: "facil",
      preparacion: "Pelar las papas, cortarlas en rodajas y freírlas. Batir los huevos y mezclar con las papas fritas. Cocinar todo en una sartén hasta dorar.",
      rating: 0 
    },
    {
      id:2,
      nombre: "Ensalada César",
      categoria: "almuerzo",
      ingredientes: ["Lechuga", "Pollo", "Queso parmesano", "Croutones", "Aderezo César"],
      tiempo: "20 min",
      dificultad: "facil",
      preparacion: "Cortar la lechuga y el pollo a tiras. Mezclar con el aderezo y añadir croutones y queso parmesano.",
      rating: 0 
    },
    {
      id:3,
      nombre: "Panqueques",
      categoria: "desayuno",
      ingredientes: ["Harina", "Leche", "Huevos", "Azúcar", "Mantequilla"],
      tiempo: "15 min",
      dificultad: "facil",
      preparacion: "Mezclar la harina, huevos, leche y azúcar. Cocinar en sartén con mantequilla hasta dorar por ambos lados.",
      rating: 0 
    },
  ];
  const [recetas, setRecetas] = useState(inicialRecetas);
  const agregarReceta = (receta) =>{
    setRecetas([...recetas,receta])
  };

  const editarReceta = (receta) =>{
    console.log(receta)
    setRecetas(prevRecetas =>
      prevRecetas.map(item =>
        item.id == receta.id ? {...receta} : item
      )
    );
  };

  const eliminarReceta = (recetaId) => {
    const nuevasRecetas = recetas.filter(item => item.id !== recetaId);
    if(nuevasRecetas !== -1) setRecetas(nuevasRecetas);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element ={
          <HomePage
            recetas={recetas}
          />
        }/>
        <Route path='/recetas/:id' element={<DetalleRecetas recetas={recetas}/>} />
        <Route path='/registrar-receta' element ={<VistaReceta agregarReceta={agregarReceta}/>}/>
        <Route path='/editar-receta/:id' element ={<VistaReceta recetas ={recetas} editarReceta={editarReceta}/>}/>
        <Route path='/lista-recetas' element={<ListaRecetas recetas={recetas} eliminarReceta={eliminarReceta}/>} />
      </Routes>
    </Router>
  )
}

export default App
