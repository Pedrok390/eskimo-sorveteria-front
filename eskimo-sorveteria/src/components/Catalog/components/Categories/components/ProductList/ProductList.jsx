import { products } from "../../../../../../utils/products"
import Product from "./Products/Products"

export default function ProductList(props){
    const {category, onOpen} = props

    const filteredProducts = products.filter((product) => product.category === category)
    return(
        <>
            <div className="product__list">
                <h3 className="product__list-title">{category}</h3>
                <div className="product__list-container">
                    {filteredProducts.map((product) => (
                        <Product key={product.id} product={product} onOpen={onOpen} />
                    ))}
                </div>
            </div>
        </>
    )
}