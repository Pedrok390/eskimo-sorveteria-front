import { useContext } from "react"
import CurrentCartContext from "../../../../contexts/CurrentCartContext"

export default function SideBarItems({cart}) {
    const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CurrentCartContext)
    return(
        <>
            <div className="sidebarItem">
                <div className="sidebarItem__image-container">
                    <img className="sidebarItem__image" src={cart.image} />
                </div>
                <div className="sidebarItem__info">
                    <h3 className="sidebarItem__name">{cart.name}</h3>
                    <p className="sidebarItem__price">{(cart.currentPrice * cart.quantity).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
                    <div className="sidebarItem__selector">
                        <button className="sidebarItem__change" onClick={() => decreaseQuantity(cart.id)}>-</button>
                        <p className="sidebarItem__quantity">{cart.quantity}</p>
                        <button className="sidebarItem__change" onClick={() => increaseQuantity(cart.id)}>+</button>
                    </div>
                </div>
                <button className="sidebarItem__remove" onClick={() => removeFromCart(cart.id)}>Remover</button>
            </div>
        </>
    )
}