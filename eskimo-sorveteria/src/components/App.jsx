import { useState, useEffect, useCallback } from 'react'
import Header from './Header/Header'
import {Route, Routes, useLocation} from 'react-router-dom'
import Main from './Main/Main'
import CurrentCartContext from '../contexts/CurrentCartContext'
import { Navigate } from "react-router-dom"
import Account from "./Account/components/Account"
import AccountRoute from "./Account/components/AccountRoute"
import AccountData from "./Account/components/AccountData"
import AccountAddresses from "./Account/components/AccountAddresses"
import AccountOrders from "./Account/components/AccountOrders"
import About from './About/About'
import Footer from './Footer/Footer'
import Catalog from './Catalog/Catalog'
import Login from './Login/Login'
import api from '../utils/api'

const cartStorageKey = `cart-v2:${storeId}`
const storeId = import.meta.env.VITE_STORE_ID

function App() {
  const [selectedCategories, setSelectedCategories] = useState("Todos")
  const [sideBar, setSideBar] = useState(null)
  const [popup, setPopup] = useState(null)
  const [products, setProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(true)
  const [productsError, setProductsError] = useState("")

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(
    () => Boolean(localStorage.getItem("customerToken"))
  );

  const [productQuantity, setProductQuantity] = useState(1)
  const categories = ['Todos', ...[...new Set(products.map((product) => product.category))].sort((a,b) => a.localeCompare(b, 'pt-BR'))]
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  })

  const location = useLocation()

  const [orders, setOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState("")

  useEffect(() => {
    let active = true
    let timeout

    function loadProducts() {
        api.getStoreCatalog(storeId)
            .then((data) => {
                if (!active) {
                    return
                }

                const products = data.map((product) => ({
                    ...product,

                    // Compatibilidade temporária
                    // com o carrinho antigo
                    id: product._id,

                    sale: {
                        quantity: 0,
                        promotionalPrice: null
                    }
                }))

                setProducts(products)
                setProductsError("")
            })
            .catch((err) => {
                if (active) {
                    setProductsError(err.message)
                }
            })
            .finally(() => {
                if (active) {
                    setProductsLoading(false)

                    timeout = setTimeout(
                        loadProducts,
                        60000
                    )
                }
            })
    }

    if (!storeId) {
        setProductsError("Loja não configurada")
        setProductsLoading(false)
        return
    }

    loadProducts()

    return () => {
        active = false
        clearTimeout(timeout)
    }
  }, [])
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const token = localStorage.getItem("customerToken");

    if (!token) {
      setIsCheckingAuth(false);
      return;
    }

    let cancelled = false;

    api.getCurrentClient(token)
      .then((client) => {
        if (
          cancelled ||
          localStorage.getItem("customerToken") !== token
        ) {
          return;
        }

        setCurrentClient(client);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        if (
          cancelled ||
          localStorage.getItem("customerToken") !== token
        ) {
          return;
        }

        if (error.status === 401 || error.status === 403) {
          localStorage.removeItem("customerToken");
        } else {
          console.error(
            "Não foi possível validar a sessão:",
            error
          );
        }

        setCurrentClient(null);
        setIsLoggedIn(false);
      })
      .finally(() => {
        if (!cancelled) {
          setIsCheckingAuth(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);
  const handleCloseSideBar = () => {
    setSideBar(null)
  }
  const handleOpenSideBar = (sidebar) => {
    setSideBar(sidebar)
  }
  const handleOpenPopup = (popup) => {
    setPopup(popup)
  }
  const handleClosePopup = () => {
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
    if (
      !isLoggedIn ||
      location.pathname !== "/minha-conta/pedidos"
    ) {
      return
    }

    const token = localStorage.getItem("customerToken")

    if (!token) {
      return
    }

    let cancelled = false

    setOrdersLoading(true)
    setOrdersError("")

    api.getMyOrders(token)
      .then((data) => {
        if (!cancelled) {
          setOrders(data)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setOrdersError(err.message)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setOrdersLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [isLoggedIn, location.pathname])

  function handleCustomerSession(response) {
    if (!response?.token) {
      throw new Error("Token não recebido do servidor");
    }

    const token = response.token;

    return api.getCurrentClient(token)
      .then((client) => {
        localStorage.setItem("customerToken", token);

        setCurrentClient(client);
        setIsLoggedIn(true);

        return client;
      });
  }
  function addToCart(product, quantity) {
      const productId = product._id

      if (
          !productId ||
          !Number.isInteger(quantity) ||
          quantity <= 0
      ) {
          return
      }

      setCart((currentCart) => {
          const existingItem = currentCart.find(
              (item) => item.productId === productId
          )

          if (existingItem) {
              return currentCart.map((item) =>
                  item.productId === productId
                      ? {
                          ...item,
                          quantity: item.quantity + quantity
                      }
                      : item
              )
          }

          return [
              ...currentCart,
              { productId, quantity }
          ]
      })

      setProductQuantity(1)
      setPopup(null)
  }

  function removeFromCart(productId) {
      setCart((currentCart) =>
          currentCart.filter(
              (item) => item.productId !== productId
          )
      )
  }

  function increaseQuantity(productId) {
      setCart((currentCart) =>
          currentCart.map((item) =>
              item.productId === productId
                  ? {
                      ...item,
                      quantity: item.quantity + 1
                  }
                  : item
          )
      )
  }

  function decreaseQuantity(productId) {
      setCart((currentCart) =>
          currentCart
              .map((item) =>
                  item.productId === productId
                      ? {
                          ...item,
                          quantity: item.quantity - 1
                      }
                      : item
              )
              .filter((item) => item.quantity > 0)
      )
  }
  function handleCheckEmail(email){
    return api.checkEmail(email)
  }
  function handleVerifyEmailCode(email, code){
    return api.verifyEmailCode(email, code)
      .then((user) => {

      })
  }
  function handleRegister(data){
    return api.signup(data)
  }
  function handleVerifyCode(email, code) {
    return api.verifyEmailCode(email, code)
      .then(handleCustomerSession)
  }

  function handleLoginPassword(email, password) {
    return api.loginWithPassword(email, password)
      .then(handleCustomerSession)
  }

  function handleClientMutation(request) {
    const token = localStorage.getItem("customerToken");

    if (!token) {
      return Promise.reject(
        new Error("Faça login novamente")
      );
    }

    return request(token)
      .then((updatedClient) => {
        if (localStorage.getItem("customerToken") !== token) {
          throw new Error("A sessão foi alterada");
        }

        setCurrentClient(updatedClient);

        return updatedClient;
      });
  }

  function handleUpdateMyData(data) {
    return handleClientMutation((token) =>
      api.updateMyData(token, data)
    );
  }

  function handleAddMyAddress(data) {
    return handleClientMutation((token) =>
      api.addMyAddress(token, data)
    );
  }

  function handleUpdateMyAddress(addressId, data) {
    return handleClientMutation((token) =>
      api.updateMyAddress(token, addressId, data)
    );
  }

  function handleDeleteMyAddress(addressId) {
    return handleClientMutation((token) =>
      api.deleteMyAddress(token, addressId)
    );
  }
  const handleSearchAddresses = useCallback((text) => {
    const token = localStorage.getItem("customerToken");

    if (!token) {
      return Promise.reject(
        new Error("Faça login para pesquisar endereços")
      );
    }

    return api.searchAddresses(token, text);
  }, []);
  function handleLogout() {
    localStorage.removeItem("customerToken")

    setCurrentClient(null)
    setIsLoggedIn(false)
    setIsCheckingAuth(false)

    setOrders([])
    setOrdersError("")
    setOrdersLoading(false)
  }
  function handleSendEmail(email){
    return api.sendEmailCode(email)
  }
  return (
    <>
      <CurrentCartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, productQuantity, setProductQuantity, products, productsLoading, productsError, storeId, isLoggedIn, currentClient, isCheckingAuth}}>
        <div className="page">
          <Header onOpenSideBar={handleOpenSideBar} onCloseSideBar={handleCloseSideBar} sideBar={sideBar} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={
              <Main />
            } />
            <Route path="/about" element={<About />} />
            <Route path='/catalog' element={
              <Catalog
                popup={popup}
                onOpenPopup={handleOpenPopup}
                onClosePopup={handleClosePopup}
                categories={categories} 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
              />}
            />
            <Route path='/sign' element={
              <Login 
                handleCheckEmail={handleCheckEmail} 
                handleRegister={handleRegister} 
                handleSendEmail={handleSendEmail}
                handleVerifyCode={handleVerifyCode}
                handleLoginPassword={handleLoginPassword}
                popup={popup}
                onOpenPopup={handleOpenPopup}
                onClosePopup={handleClosePopup}/>}
            />
            <Route path="/minha-conta" element={<AccountRoute />}>
              <Route element={<Account onLogout={handleLogout}/>} >
                <Route
                  index
                  element={<Navigate to="dados" replace />}
                />

                <Route
                  path="dados"
                  element={<AccountData 
                            client={currentClient}
                            onSave={handleUpdateMyData}/>}
                />

                <Route
                  path="enderecos"
                  element={<AccountAddresses addresses={currentClient?.addresses || []} onSearch={handleSearchAddresses} onAdd={handleAddMyAddress} onUpdate={handleUpdateMyAddress} onDelete={handleDeleteMyAddress}/>}
                />

                <Route
                  path="pedidos"
                  element={<AccountOrders
                              orders={orders}
                              loading={ordersLoading}
                              error={ordersError} />}
                />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </div>
      </CurrentCartContext.Provider>
    </>
  )
}

export default App
