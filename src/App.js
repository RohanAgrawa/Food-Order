import {useState } from "react";
import Cart from "./Components/Cart/Cart.js";
import Header from './Components/Layout/Header.js';
import Meal from './Components/Meals/Meal'
import CartProvider from "./Components/Store/CartProvider.js";

function App() {

  const [isCardShow, setIsCardShown] = useState(false);
  
  const cardShow = () => {
    setIsCardShown(true);
  }

  const hideCardShow = () => {
    
    setIsCardShown(false);
  }

  return (
    <CartProvider>
      {isCardShow && <Cart onClose = {hideCardShow} />}
      <Header onCardButton= { cardShow } />
      <Meal/>
    </CartProvider>
  );
}

export default App;
