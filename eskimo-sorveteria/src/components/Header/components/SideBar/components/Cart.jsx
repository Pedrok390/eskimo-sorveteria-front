import { useContext } from "react";
import CurrentCartContext from "../../../../../contexts/CurrentCartContext";
import CartItems from "./CartItems";

export default function Cart({onCloseSideBar}) {
    const {cart, addToCart} = useContext(CurrentCartContext)
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
            <div className="cart__header">
                <h2 className="cart__header-title">Seu carrinho</h2>
                <button className="cart__button-close" onClick={() => onCloseSideBar()}>X</button>
            </div>
            <div className="cart">
                {cart.map((cart) => (
                    <CartItems key={cart.id} cart={cart} />
                ))}
            </div>
            <div className="cart__finish">
                <p className="cart__total">Total: <span>{total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span></p>
                <button className="cart__finish-button" onClick={handleCheckout} disabled={cart.length === 0}>Finalizar Compra</button>
            </div>
        </>
    )
}