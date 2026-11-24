import { useContext } from "react"

import Categories from "./components/Categories/Categories"
import Popup from "./components/Popup/Popup"

import CurrentCartContext from "../../contexts/CurrentCartContext"

export default function Catalog(props) {
    const {
        categories,
        selectedCategories,
        setSelectedCategories,
        onOpenPopup,
        onClosePopup,
        popup
    } = props

    const {
        products,
        productsLoading,
        productsError
    } = useContext(CurrentCartContext)

    return (
        <>
            <div className="catalog">

                <div className="catalog__selector">

                    <h3 className="catalog__selector-title">
                        Categorias
                    </h3>

                    <div className="catalog__selector-container">

                        {categories.map((category) => (
                            <button
                                key={category}
                                className={
                                    category === selectedCategories
                                        ? "catalog__button catalog__button--selected"
                                        : "catalog__button"
                                }
                                onClick={() => setSelectedCategories(category)}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                </div>

                {productsLoading ? (
                    <p className="catalog__loading">
                        Carregando produtos...
                    </p>
                ) : productsError ? (
                    <p className="catalog__error" role="alert">
                        {productsError}
                    </p>
                ) : products.length === 0 ? (
                    <p className="catalog__empty">
                        Nenhum produto disponível no momento.
                    </p>
                ) : (
                    <Categories
                        categories={categories}
                        selectedCategories={
                            categories.includes(selectedCategories)
                                ? selectedCategories
                                : "Todos"
                        }
                        setSelectedCategories={setSelectedCategories}
                        onOpen={onOpenPopup}
                    />
                )}

            </div>

            {popup && (
                <Popup
                    popup={popup}
                    onClose={onClosePopup}
                />
            )}
        </>
    )
}