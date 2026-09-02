import cartIcon from '../../../../../images/cart-icon.png'
import CurrentCartContext from '../../../../../contexts/CurrentCartContext'
import { useContext } from 'react'
import eskimoLogo from '../../../../../images/eskimo-logo.png'
export default function ProductCard(props){
    const {product} = props
    const {addToCart, productQuantity, setProductQuantity} = useContext(CurrentCartContext)
    return (<>
        <div className="product-card">
            <div className="product-card__image-container">
                <img className="product-card__image" src={product.image?.url || eskimoLogo } alt={product.name} />
            </div>
            <div className="product-card__info">
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__description">{product.description}</p>
                <p className="product-card__ingredients">Ingredientes: {product.ingredients}</p>
                <p className="product-card__allergy">Alérgicos: {product.allergy.map((allergen, index) => index !== product.allergy.length -1 ? `${allergen}, ` : `${allergen}.`)}</p>
            </div> 
            <div className='product-card__container'>
                <div className='product-card__selector'>
                    <button className="product-card__change product-card--minus" onClick={() => setProductQuantity(productQuantity => productQuantity - 1)}>-</button>
                    <p className="product-card__quantity">{productQuantity}</p>
                    <button className="product-card__change product-card--plus" onClick={() => setProductQuantity(productQuantity => productQuantity + 1)}>+</button>
                </div>
                <button className='product-card__button' onClick={() => addToCart(product, productQuantity)}><img src={cartIcon} className='product-card__button-icon' alt='Icone de Carrinho'></img> Adicionar ao Carrinho</button>
            </div>
        </div>
    </>)
}