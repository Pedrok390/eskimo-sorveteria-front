import { useContext } from "react";
import CurrentCartContext from "../../../../contexts/CurrentCartContext";

export default function SideBar(props) {
    const {onCloseSideBar, children, variant } = props
    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onCloseSideBar();
        }
    }
    return (
        <>
            <div className="sidebar" onClick={handleOverlayClick}>
                <div className={`sidebar__container ${variant === "account" ? "sidebar__container--account" : ""}`}>
                    {children}
                </div>
            </div>
        </>
    )
}