
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import CurrentCartContext from "../../../contexts/CurrentCartContext"

export default function AccountRoute() {
  const {
    isLoggedIn,
    isCheckingAuth
  } = useContext(CurrentCartContext)

  if (isCheckingAuth) {
    return <p>Verificando sua sessão...</p>
  }

  if (!isLoggedIn) {
    if (localStorage.getItem("customerToken")) {
      return (
        <p>
          Não foi possível validar sua sessão.
          Verifique sua conexão e atualize a página.
        </p>
      )
    }

    return <Navigate to="/sign" replace />
  }

  return <Outlet />
}
