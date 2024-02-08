import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting='¡Explora nuestra colección de sneakers y accesorios urbanos!'/>
    </BrowserRouter>
  )
}

export default App
