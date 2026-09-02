import Categories from './components/Categories/Categories'
import Popup from './components/Popup/Popup'
export default function Catalog(props) {
    const {categories, selectedCategories, setSelectedCategories, onOpenPopup, onClosePopup, popup} = props

    
    return (
        <>
            <div className="catalog">
                <div className='catalog__selector'>
                    <h3 className='catalog__selector-title'>Categorias</h3>
                        <div className='catalog__selector-container'>
                        {categories.map((category, id) => (
                            <button className={category === selectedCategories ? 'catalog__button catalog__button--selected' : 'catalog__button'} key={id} onClick={() => setSelectedCategories(category)} >{category}</button>
                        ))}
                    </div>
                </div>
                <Categories categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} onOpen={onOpenPopup}/>
            </div>
            {popup && <Popup popup={popup} onClose={onClosePopup} />}
        </>
    )
}