import { Outlet } from "react-router-dom"
import AccountNavigation from "./AccountNavigation"

export default function Account(props) {
    const { onLogout } = props

    return (
        <main className="account">
            <h1 className="account__title">
                Minha conta
            </h1>

            <div className="account__container">
                <AccountNavigation onLogout={onLogout} />

                <div className="account__content">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}