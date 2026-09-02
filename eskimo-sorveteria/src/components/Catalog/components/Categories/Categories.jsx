import { useState, useEffect, useRef, useContext } from 'react'
import CurrentCartContext from '../../../../contexts/CurrentCartContext'
import ProductList from '../Categories/components/ProductList/ProductList'
export default function Categories(props){
    const {categories, selectedCategories, setSelectedCategories, onOpen} = props
    const {products} = useContext(CurrentCartContext)
    const [dropdown, setDropdown] = useState(false)
    const filteredCategories = selectedCategories === 'Todos' ? [...[...new Set(products.map((product) => product.category))].sort((a,b) => a.localeCompare(b, 'pt-BR'))] : [selectedCategories]

    const handleCloseDropdown = (category) => {
        setSelectedCategories(category);
        setDropdown(false);
    }
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        // Verifica se a ref existe e se o clique ocorreu fora do elemento container
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
        }
        }

        // Adiciona o evento quando o componente é montado
        document.addEventListener('mousedown', handleClickOutside);
        
        // Limpa o evento quando o componente é desmontado
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return(
        <>
            <div className="categories">
                <div className='categories__title-container'>
                    <h1 className="categories__title">Nossos Produtos</h1>
                </div>
                {filteredCategories.map((category) => (
                    <ProductList key={category} onOpen={onOpen} category={category} />
                ))}
            </div>
        </>
    )
}