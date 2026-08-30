import { useState, useEffect } from 'react'
import Header from './Header/Header'
import {Route, Routes} from 'react-router-dom'
import Main from './Main/Main'
import { products } from '../utils/products'
import CurrentCartContext from '../contexts/CurrentCartContext'
import About from './About/About'
import Footer from './Footer/Footer'
import Catalog from './Catalog/Catalog'
function App() {
  const [selectedCategories, setSelectedCategories] = useState("Todos")
  const [sideBar, setSideBar] = useState(null)
  const [popup, setPopup] = useState(null)
  const [productQuantity, setProductQuantity] = useState(1)
  const categories = ['Todos', ...[...new Set(products.map((product) => product.category))].sort((a,b) => a.localeCompare(b, 'pt-BR'))]
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : [];
  })
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCloseSideBar = () => {
    setSideBar(null)
  }
  const handleOpenSideBar = (sidebar) => {
    setSideBar(sidebar)
  }
  const handleOpenPopup = (popup) => {
    setPopup(popup)
  }
  const handleCLosePopup = () => {
    setPopup(null)
    setProductQuantity(1);
  }
  function applyDiscount(cart) {
    const fruitPopsicleQuantity = cart
      .filter((item) => item.category === "Picolé Fruta")
      .reduce((total, item) => total + item.quantity, 0);

    return cart.map((item) => {
      if (item.category === "Picolé Fruta") {
        return {
          ...item,
          currentPrice:
            fruitPopsicleQuantity >= 5
              ? item.promotionalPrice
              : item.price
        };
      }

      return {
        ...item,
        currentPrice: item.price
      };
    });
  }
  function addToCart(product, Quantity) {
    setCart((currentCart) => {
      const productInCart = currentCart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (productInCart) {
        updatedCart = currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + Quantity
              }
            : item
        );
      } else {
        updatedCart = [
          ...currentCart,
          {
            ...product,
            quantity: Quantity,
            currentPrice: product.price
          }
        ];
      }
      setProductQuantity(1)
      setPopup(null)
      return applyDiscount(updatedCart);
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const updatedCart = currentCart.filter(
        (item) => item.id !== productId
      );

      return applyDiscount(updatedCart);
    });
  }

  function increaseQuantity(productId) {
    setCart((currentCart) => {
      const updatedCart = currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      return applyDiscount(updatedCart);
    });
  }


  function decreaseQuantity(productId) {
    setCart((currentCart) => {
      const updatedCart = currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      return applyDiscount(updatedCart);
    });
  }

  return (
    <>
      <CurrentCartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, productQuantity, setProductQuantity}}>
        <div className="page">
          <Header onOpenSideBar={handleOpenSideBar} onCloseSideBar={handleCloseSideBar} sideBar={sideBar} />
          <Routes>
            <Route path="/" element={
              <Main />
            } />
            <Route path="/about" element={<About />} />
            <Route path='/catalog' element={
              <Catalog
                popup={popup}
                onOpenPopup={handleOpenPopup}
                onClosePopup={handleCLosePopup}
                categories={categories} 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
              />}
            />

          </Routes>
          <Footer />
        </div>
      </CurrentCartContext.Provider>
    </>
  )
}

export default App
