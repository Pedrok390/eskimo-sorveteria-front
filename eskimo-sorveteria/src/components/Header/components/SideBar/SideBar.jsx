import { useContext } from "react";
import CurrentCartContext from "../../../../contexts/CurrentCartContext";
import SideBarItems from "./SideBarItems";

export default function SideBar({ onCloseSideBar }) {
    const {cart, addToCart} = useContext(CurrentCartContext)
    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onCloseSideBar();
        }
    }
    const total = cart.reduce((total, item) => {
        return total + item.currentPrice * item.quantity;
    }, 0);

    function handleCheckout() {
        const phone = "5521966219711";

        const itemsMessage = cart
            .map((item) => {
            const subtotal = item.currentPrice * item.quantity;

            return `${item.quantity}x ${item.name} - ${subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}`;
            })
            .join("\n");

        const message = `
            Olá! Gostaria de fazer um pedido:

            ${itemsMessage}

            Total: ${total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
            `;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        }
    return (
        <>
            <div className="sidebar" onClick={handleOverlayClick}>
                <div className="sidebar__container">
                    <div className="sidebar__header">
                        <h2 className="sidebar__header-title">Seu carrinho</h2>
                        <button className="sidebar__button-close" onClick={() => onCloseSideBar()}>X</button>
                    </div>
                    <div className="sidebar__cart">
                        {cart.map((cart) => (
                            <SideBarItems key={cart.id} cart={cart} />
                        ))}
                    </div>
                    <div className="sidebar__finish">
                        <p className="sidebar__total">Total: <span>{total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span></p>
                        <button className="sidebar__finish-button" onClick={handleCheckout} disabled={cart.length === 0}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </>
    )
}