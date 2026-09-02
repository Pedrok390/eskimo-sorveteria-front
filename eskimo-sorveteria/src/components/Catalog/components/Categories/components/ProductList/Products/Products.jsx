import { useContext } from 'react'
import cartIcon from '../../../../../../../images/cart-icon.png'
import CurrentCartContext from '../../../../../../../contexts/CurrentCartContext'
import ProductCard from '../../../../Popup/components/ProductCard'
import eskimoLogo from '../../../../../../../images/eskimo-logo.png'
export default function Product(props){
    const { addToCart } = useContext(CurrentCartContext)
    const {product, onOpen} = props
    console.log(product)
    const productPopup = {children: <ProductCard addToCart={addToCart} product={product} />}
    return(
        <>
            <div className="product">
                <div className="product__image-container">
                    <img className="product__image" src={product.image?.url || eskimoLogo } alt={product.name}/>
                </div>
                <div className="product__info">
                    <p className="product__name">{product.name}</p>
                    <div className='product__price-container'>
                        <p className="product__price">{product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
                        <button className='product__button' onClick={() => onOpen(productPopup)}><img src={cartIcon} className='product__button-icon' alt='Icone de Carrinho'></img> Adicionar ao Carrinho</button>
                
                    </div>
                </div>
            </div>
        </>
    )
}