import { useEffect, useState } from "react"
import Popup from "../../Catalog/components/Popup/Popup"
import { IoLocationOutline } from "react-icons/io5";
export default function AddressSearchPopup(props) {
    const {
        onSearch,
        onSelect,
        onClose
    } = props

    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const text = query.trim()

        if (text.length < 4) {
            setSuggestions([])
            setLoading(false)
            setError("")
            return
        }

        let active = true

        setLoading(true)
        setSuggestions([])
        setError("")

        const timeout = setTimeout(() => {
            onSearch(text)
                .then((results) => {
                    if (active) {
                        setSuggestions(results)
                    }
                })
                .catch((err) => {
                    if (active) {
                        setError(err.message)
                    }
                })
                .finally(() => {
                    if (active) {
                        setLoading(false)
                    }
                })
        }, 450)

        return () => {
            active = false
            clearTimeout(timeout)
        }
    }, [query, onSearch])

    function handleChange(e) {
        setQuery(e.target.value)
        setSuggestions([])
        setError("")
        setLoading(e.target.value.trim().length >= 4)
    }

    function handleSelect(address) {
        onSelect(address)
    }

    return (
        <Popup
            onClose={onClose}
            containerClassName="popup__container--address"
            popup={{
                title: "Encontre seu endereço",
                children: (
                    <div className="address-search">

                        <p className="address-search__description">
                            Informe o endereço onde deseja receber
                            seus pedidos.
                        </p>

                        <input
                            className="address-search__input"
                            type="search"
                            placeholder="Digite rua, número ou CEP"
                            aria-label="Pesquisar endereço"
                            autoComplete="off"
                            autoFocus
                            value={query}
                            onChange={handleChange}
                        />

                        {loading && (
                            <p className="address-search__loading">
                                Pesquisando endereços...
                            </p>
                        )}

                        {error && (
                            <p
                                className="address-search__error"
                                role="alert"
                            >
                                {error}
                            </p>
                        )}

                        <div className="address-search__results">
                            {!loading && suggestions.map((address) => {
                                const stateCode = (address.stateCode || "")
                                    .split("-")
                                    .pop()
                                    .toUpperCase()

                                const street = address.street
                                    ? `${address.street}${address.number
                                        ? `, ${address.number}`
                                        : ""}`
                                    : address.formatted

                                const city = [
                                    address.neighborhood,
                                    address.city
                                ].filter(Boolean).join(", ")

                                const location = [
                                    city,
                                    stateCode || address.state
                                ].filter(Boolean).join(" — ")

                                return (
                                    <button
                                        className="address-search__result"
                                        key={address.id}
                                        type="button"
                                        onClick={() => handleSelect(address)}
                                    >
                                        <IoLocationOutline
                                            className="address-search__location-icon"
                                        />

                                        <div className="address-search__info">
                                            <span className="address-search__street">
                                                {street}
                                            </span>

                                            {location && (
                                                <span className="address-search__location">
                                                    {location}
                                                </span>
                                            )}
                                        </div>

                                        <span className="address-search__arrow">{'>'}</span>
                                    </button>
                                )
                            })}
                        </div>

                        {!loading &&
                            !error &&
                            query.trim().length >= 4 &&
                            suggestions.length === 0 && (
                                <p className="address-search__empty">
                                    Nenhum endereço encontrado.
                                </p>
                            )
                        }

                        <p className="address-search__attribution">
                            Busca por{" "}
                            <a
                                href="https://www.geoapify.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Geoapify
                            </a>
                            {" · Dados © "}
                            <a
                                href="https://www.openstreetmap.org/copyright"
                                target="_blank"
                                rel="noreferrer"
                            >
                                OpenStreetMap
                            </a>
                        </p>

                    </div>
                )
            }}
        />
    )
}