import { NavLink, useNavigate } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
export default function AccountMenu(props) {
  const {
    currentClient,
    onCloseSideBar,
    onLogout
  } = props

  const navigate = useNavigate()

  function handleLogout() {
    onCloseSideBar()
    onLogout()
    navigate("/")
  }

  const links = [
    { path: "/minha-conta/dados", label: "Meus dados", icon: <CiUser className="account-menu__link-icon" /> },
    { path: "/minha-conta/enderecos", label: "Meus endereços", icon: <IoLocationOutline className="account-menu__link-icon" /> },
    { path: "/minha-conta/pedidos", label: "Meus pedidos", icon: <IoCubeOutline className="account-menu__link-icon" />}
  ]

  return (
    <div className="account-menu">
      <div className="account-menu__header">
        <div>
          <h2 className="account-menu__title">
            Minha conta
          </h2>

            <div className="account-menu__name-container">
                <p className="account-menu__initial">{currentClient?.name[0]}</p>
                <p className="account-menu__name">
                    {currentClient?.name}
                </p>
            </div>
          
        </div>

        <button
          className="account-menu__close"
          type="button"
          onClick={onCloseSideBar}
          aria-label="Fechar menu"
        >
          ×
        </button>
      </div>

      <nav className="account-menu__nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `account-menu__link ${
                isActive ? "account-menu__link--active" : ""
              }`
            }
            onClick={onCloseSideBar}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="account-menu__logout"
        type="button"
        onClick={handleLogout}
      >
        <MdLogout />
        Sair
      </button>
    </div>
  )
}