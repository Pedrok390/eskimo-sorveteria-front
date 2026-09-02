import { useContext } from "react"
import CurrentCartContext from "../../../../../contexts/CurrentCartContext"
import eskimoLogo from '../../../../../images/eskimo-logo.png'
export default function CartItems({cart}) {
    const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CurrentCartContext)
    return(
        <>
            <div className="cartItem">
                <div className="cartItem__image-container">
                    <img className="cartItem__image" src={cart.image?.url || eskimoLogo} />
                </div>
                <div className="cartItem__info">
                    <h3 className="cartItem__name">{cart.name}</h3>
                    <p className="cartItem__price">{(cart.currentPrice * cart.quantity).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
                    <div className="cartItem__selector">
                        <button className="cartItem__change cartItem--minus" onClick={() => decreaseQuantity(cart.id)}>-</button>
                        <p className="cartItem__quantity">{cart.quantity}</p>
                        <button className="cartItem__change cartItem--plus" onClick={() => increaseQuantity(cart.id)}>+</button>
                    </div>
                </div>
                <button className="cartItem__remove" onClick={() => removeFromCart(cart.id)}>Remover</button>
            </div>
        </>
    )
}