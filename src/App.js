import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Promociones  from './pages/promociones';
import  Layout  from './pages/Layout';
import  Productos  from './pages/productos';
import  Contacto  from './pages/contacto';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='promociones' element={<Promociones />}/>
        <Route path='/' element={<Home />}/>
        <Route path='productos' element={<Productos />}/>
        <Route path='contacto' element={<Contacto />}/>
        </Route>
      
      </Routes>
    </div>
  );
}

export default App;



