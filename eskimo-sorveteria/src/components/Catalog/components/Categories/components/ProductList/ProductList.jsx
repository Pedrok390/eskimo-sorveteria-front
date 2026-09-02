import { useContext } from "react"
import CurrentCartContext from "../../../../../../contexts/CurrentCartContext"
import Product from "./Products/Products"

export default function ProductList(props){
    const {category, onOpen} = props
    const {products} = useContext(CurrentCartContext)

    const filteredProducts = products.filter((product) => product.category === category)
    return(
        <>
            <div className="product__list">
                <h3 className="product__list-title">{category}</h3>
                <div className="product__list-container">
                    {filteredProducts.map((product, index) => (
                        <Product key={index} product={product} onOpen={onOpen} />
                    ))}
                </div>
            </div>
        </>
    )
}