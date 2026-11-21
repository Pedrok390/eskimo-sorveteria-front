import { NavLink, useNavigate } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
export default function AccountNavigation(props) {
    const { onLogout } = props
    const navigate = useNavigate()

    function handleLogout() {
        onLogout()
        navigate("/", { replace: true })
    }

    return (
        <nav className="account-navigation">
                <NavLink to="/minha-conta/dados" className={({ isActive }) => isActive ? "account-navigation__link account-navigation__link--active" : "account-navigation__link"}>
                    <CiUser className="account-navigation__link-icon"/> Meus dados
                </NavLink>
                <NavLink to="/minha-conta/enderecos" className={({ isActive }) => isActive ? "account-navigation__link account-navigation__link--active" : "account-navigation__link"}>
                    <IoLocationOutline className="account-navigation__link-icon"/> Meus endereços
                </NavLink>
                <NavLink to="/minha-conta/pedidos" className={({ isActive }) => isActive ? "account-navigation__link account-navigation__link--active" : "account-navigation__link"}>
                    <IoCubeOutline className="account-navigation__link-icon"/> Meus pedidos
                </NavLink>

            <button
                className="account-navigation__logout"
                type="button"
                onClick={handleLogout}
            >
                <MdLogout/> Sair
            </button>
        </nav>
    )
}