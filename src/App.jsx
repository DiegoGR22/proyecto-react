// import NavBar from './components/NavBar/NavBar'
// import './App.css'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hero from './components/Hero/Hero';

// function App() {

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<>
//           <Hero title="¡Bienvenido a SneakHeaven!"
//             description="Descubre la mejor selección de zapatillas urbanas." />
//           <ItemListContainer/>
//         </>}/>
//         <Route path='/nuevos-lanzamientos/:categoryId' element={<ItemListContainer categoryId="new"/>}/>

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<>
          <Hero title="¡Bienvenido a SneakHeaven!"
            description="Descubre la mejor selección de zapatillas urbanas." />
          <ItemListContainer/>
        </>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='/nuevos-lanzamientos/:categoryid' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
