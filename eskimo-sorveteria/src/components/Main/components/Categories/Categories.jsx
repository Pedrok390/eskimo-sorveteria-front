import { products } from '../../../../utils/products'
import ProductList from '../Categories/components/ProductList/ProductList'
export default function Categories(props){

    const {categories, selectedCategories, setSelectedCategories} = props
    const filteredCategories = selectedCategories === 'Todos' ? [...new Set(products.map((product) => product.category))] : [selectedCategories]

    return(
        <>
            <div className="categories">
                <div className='categories__title-container'>
                    <h1 className="categories__title">Nossos Produtos</h1>
                </div>
                {filteredCategories.map((category) => (
                    <ProductList key={category} category={category} />
                ))}
            </div>
        </>
    )
}