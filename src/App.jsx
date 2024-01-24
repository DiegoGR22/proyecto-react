// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
        <NavBar />
        <ItemListContainer greeting='¡Explora nuestra colección de sneakers y accesorios urbanos!'/>
    </>
  )
}

export default App
