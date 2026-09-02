import { useState, useEffect } from 'react'
import Header from './Header/Header'
import {Route, Routes} from 'react-router-dom'
import Main from './Main/Main'
import CurrentCartContext from '../contexts/CurrentCartContext'
import About from './About/About'
import Footer from './Footer/Footer'
import Catalog from './Catalog/Catalog'
import api from '../utils/api'
function App() {
  const [selectedCategories, setSelectedCategories] = useState("Todos")
  const [sideBar, setSideBar] = useState(null)
  const [popup, setPopup] = useState(null)
  const [products, setProducts] = useState([])
  useEffect(() => {
    api.getProducts()
      .then((products) => setProducts(products))
  }, [])
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
    return cart.map((cartItem) => {
      if(cartItem.quantity >= cartItem.sale.quantity && cartItem.sale.quantity !== 0){
        return { ...cartItem, currentPrice: cartItem.sale.promotionalPrice}
      }
      else{
        return { ...cartItem, currentPrice: cartItem.price}
      }
    })
  }
  useEffect(() => {
    function loadProducts() {
      api.getProducts()
        .then((products) => {
          setProducts(products);
        })
        .catch(console.error);
    }

    loadProducts();

    const interval = setInterval(loadProducts, 10000);

    return () => clearInterval(interval);
  }, []);
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
      applyDiscount(updatedCart);
      return updatedCart;
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
      <CurrentCartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, productQuantity, setProductQuantity, products}}>
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
