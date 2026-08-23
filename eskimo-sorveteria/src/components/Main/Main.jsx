import Categories from './components/Categories/Categories.jsx'
import Hero from './components/Hero/Hero.jsx'

export default function Main(props) {
    const {categories, selectedCategories, setSelectedCategories} = props
    return (
        <>
            <main className="main">
                <Hero />
                <Categories categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
            </main>
        </>
    )
}