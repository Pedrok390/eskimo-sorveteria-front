
import { useEffect, useState } from "react"
import AddressSearchPopup from "./AddressSearchPopup"
import Popup from "../../Catalog/components/Popup/Popup"

const emptyAddress = {
    label: "Casa",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
    reference: ""
}

const fields = [
    {
        name: "label",
        label: "Identificação",
        required: true
    },
    {
        name: "street",
        label: "Rua",
        required: true
    },
    {
        name: "number",
        label: "Número",
        required: true
    },
    {
        name: "complement",
        label: "Complemento"
    },
    {
        name: "neighborhood",
        label: "Bairro",
        required: true
    },
    {
        name: "city",
        label: "Cidade",
        required: true
    },
    {
        name: "state",
        label: "Estado (UF)",
        required: true
    },
    {
        name: "zipCode",
        label: "CEP",
        required: true
    },
    {
        name: "reference",
        label: "Ponto de referência"
    }
]

export default function AccountAddressForm(props) {
    const {
        address,
        onSearch,
        onSave,
        onCancel,
        loading,
        error
    } = props

    const [form, setForm] = useState({
        ...emptyAddress,
        ...address
    })

    const [selected, setSelected] = useState(Boolean(address))
    const [isSearchOpen, setIsSearchOpen] = useState(!address)

    useEffect(() => {
        setForm({
            ...emptyAddress,
            ...address
        })

        setSelected(Boolean(address))
        setIsSearchOpen(!address)
    }, [address])

    function handleSelectAddress(result) {
        const stateCode = (result.stateCode || "")
            .split("-")
            .pop()
            .toUpperCase()

        const state = /^[A-Z]{2}$/.test(stateCode)
            ? stateCode
            : result.state === "Rio de Janeiro"
                ? "RJ"
                : ""

        setForm((current) => ({
            ...current,
            street: result.street || "",
            number: result.number || "",
            complement: "",
            neighborhood: result.neighborhood || "",
            city: result.city || "",
            state,
            zipCode: (result.zipCode || "")
                .replace(/\D/g, "")
                .slice(0, 8),
            reference: ""
        }))

        setSelected(true)
        setIsSearchOpen(false)
    }

    function handleCloseSearch() {
        setIsSearchOpen(false)

        if (!selected) {
            onCancel()
        }
    }

    function handleChange(e) {
        const { name, value } = e.target

        let newValue = value

        if (name === "zipCode") {
            newValue = value
                .replace(/\D/g, "")
                .slice(0, 8)
        }

        if (name === "state") {
            newValue = value
                .toUpperCase()
                .slice(0, 2)
        }

        setForm((current) => ({
            ...current,
            [name]: newValue
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!selected || loading) {
            return
        }

        onSave(form)
    }

    
  return (
      <>
          {selected && !isSearchOpen && (
              <Popup
                  onClose={() => {
                      if (!loading) {
                          onCancel()
                      }
                  }}
                  containerClassName="popup__container--address-form"
                  popup={{
                      title: address
                          ? "Editar endereço"
                          : "Novo endereço",

                      children: (
                          <form
                              className="account-page__form account-address-form"
                              onSubmit={handleSubmit}
                          >
                              <p className="account-page__description">
                                  Confira as informações do endereço
                                  antes de salvar.
                              </p>

                              <div className="account-address-form__selected">

                                  <div className="account-address-form__info">
                                      <strong>{form.street}</strong>

                                      <p>
                                          {form.neighborhood}, {form.city}/{form.state}
                                      </p>
                                  </div>

                                  <button
                                      className="account-page__button-secondary"
                                      type="button"
                                      onClick={() => setIsSearchOpen(true)}
                                      disabled={loading}
                                  >
                                      Alterar endereço
                                  </button>

                              </div>

                              <div className="account-page__fields">

                                  {fields.map((field) => (
                                      <div
                                          className="account-page__field"
                                          key={field.name}
                                      >
                                          <label
                                              className="account-page__label"
                                              htmlFor={`address-${field.name}`}
                                          >
                                              {field.label}
                                          </label>

                                          <input
                                              className="account-page__input"
                                              id={`address-${field.name}`}
                                              name={field.name}
                                              type="text"
                                              value={form[field.name] || ""}
                                              onChange={handleChange}
                                              required={Boolean(field.required)}
                                              disabled={loading}
                                              inputMode={
                                                  field.name === "zipCode"
                                                      ? "numeric"
                                                      : "text"
                                              }
                                              pattern={
                                                  field.name === "zipCode"
                                                      ? "[0-9]{8}"
                                                      : field.name === "state"
                                                          ? "[A-Z]{2}"
                                                          : undefined
                                              }
                                              maxLength={
                                                  field.name === "zipCode"
                                                      ? 8
                                                      : field.name === "state"
                                                          ? 2
                                                          : undefined
                                              }
                                          />
                                      </div>
                                  ))}

                              </div>

                              {error && (
                                  <p
                                      className="account-page__error"
                                      role="alert"
                                  >
                                      {error}
                                  </p>
                              )}

                              <div className="account-page__actions">
                                  <button
                                      className="account-page__button-secondary"
                                      type="button"
                                      onClick={onCancel}
                                      disabled={loading}
                                  >
                                      Cancelar
                                  </button>
                                  <button
                                      className="account-page__button"
                                      type="submit"
                                      disabled={loading}
                                  >
                                      {loading
                                          ? "Salvando..."
                                          : address
                                              ? "Salvar alterações"
                                              : "Salvar endereço"}
                                  </button>

                                  

                              </div>

                          </form>
                      )
                  }}
              />
          )}

          {isSearchOpen && (
              <AddressSearchPopup
                  onSearch={onSearch}
                  onSelect={handleSelectAddress}
                  onClose={handleCloseSearch}
              />
          )}
      </>
  )
}
