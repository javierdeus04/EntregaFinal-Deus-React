import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { CartContextProvider } from "./contexts/CartContext";
import { Checkout } from "./components/Checkout"


function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/categories/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
