import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<>
          <Hero title="¡Bienvenido a SneakHeaven!"
            description="Descubre la mejor selección de zapatillas urbanas." />
          <ItemListContainer greeting='¡Explora nuestra colección de sneakers y accesorios urbanos!' />
        </>}
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App
