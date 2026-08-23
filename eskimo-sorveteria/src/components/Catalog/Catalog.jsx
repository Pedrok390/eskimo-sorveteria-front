import Categories from './components/Categories/Categories'

export default function Catalog(props) {
    const {categories, selectedCategories, setSelectedCategories} = props
    return (
        <>
        <div className="catalog">
            <Categories categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
        </div>
        </>
    )
}