import { useState, useEffect } from 'react'
import Header from './Header/Header'
import {Route, Routes} from 'react-router-dom'
import Main from './Main/Main'
import { products } from '../utils/products'
import CurrentCartContext from '../contexts/CurrentCartContext'
import About from './About/About'
import Footer from './Footer/Footer'
function App() {
  const [selectedCategories, setSelectedCategories] = useState("Todos")
  const [sideBar, setSideBar] = useState(false)
  const categories = ['Todos', ...new Set(products.map((product) => product.category))]
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : [];
  })
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCloseSideBar = () => {
    setSideBar(false)
  }
  const handleOpenSideBar = () => {
    setSideBar(true)
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
  function addToCart(product) {
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
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        updatedCart = [
          ...currentCart,
          {
            ...product,
            quantity: 1,
            currentPrice: product.price
          }
        ];
      }

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
      <CurrentCartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>
        <div className="page">
          <Header onOpenSideBar={handleOpenSideBar} onCloseSideBar={handleCloseSideBar} sideBar={sideBar} />
          <Routes>
            <Route path="/" element={
              <Main 
                categories={categories} 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
                />
            } />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </CurrentCartContext.Provider>
    </>
  )
}

export default App
