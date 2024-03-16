import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';
import CartProvider from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<>
            <Hero title="¡Bienvenido a SneakHeaven!"
              description="Descubre la mejor selección de zapatillas urbanas." />
            <ItemListContainer />
          </>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/nuevos-lanzamientos/:category' element={<ItemListContainer />} />
          <Route path='/cart/' element={<CartContainer />} />
          <Route path='/cart/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;