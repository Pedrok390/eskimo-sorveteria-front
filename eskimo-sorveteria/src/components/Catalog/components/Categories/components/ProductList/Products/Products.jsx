import { useContext } from 'react'
import cartIcon from '../../../../../../../images/cart-icon.png'
import CurrentCartContext from '../../../../../../../contexts/CurrentCartContext'

export default function Product(props){
    const { addToCart } = useContext(CurrentCartContext)
    const {product} = props

    return(
        <>
            <div className="product">
                <div className="product__image-container">
                    <img className="product__image" src={product.image} alt={product.name}/>
                </div>
                <div className="product__info">
                    <p className="product__name">{product.name}</p>
                    <div className='product__price-container'>
                        <p className="product__price">{product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
                        <button className='product__button' onClick={() => addToCart(product)}><img src={cartIcon} className='product__button-icon' alt='Icone de Carrinho'></img> Adicionar ao Carrinho</button>
                
                    </div>
                </div>
            </div>
        </>
    )
}