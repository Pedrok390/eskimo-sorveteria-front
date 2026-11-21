import { useEffect, useState } from "react"

export default function AccountData(props) {
  const { client, onSave } = props

  const [form, setForm] = useState({
    name: client?.name || "",
    phone: client?.phone || ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    setForm({
      name: client?.name || "",
      phone: client?.phone || ""
    })
  }, [client?.name, client?.phone])

  function handleChange(e) {
    const { name, value } = e.target

    const newValue = name === "phone"
      ? value.replace(/\D/g, "").slice(0, 11)
      : value

    setForm((current) => ({
      ...current,
      [name]: newValue
    }))

    setError("")
    setSuccess("")
  }

  function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setError("")
    setSuccess("")

    onSave(form)
      .then(() => {
        setSuccess("Dados atualizados com sucesso!")
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <main className="account-page">
      <h1 className="account-page__title">
        Meus dados
      </h1>

      <div className="account-page__form-container">
        <h2 className="account-page__subtitle">Informações pessoais</h2>
        <form
          className="account-page__card account-page__form"
          onSubmit={handleSubmit}
        >
          <div className="account-page__card-container">
            <div className="account-page__field">
              <label htmlFor="client-name" className="account-page__label">
                Nome completo
              </label>

              <input
                className="account-page__input"
                id="client-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                minLength={3}
                required
              />
            </div>
            <div className="account-page__field">
              <label htmlFor="client-phone" className="account-page__label">
                Celular com DDD
              </label>

              <input
                className="account-page__input"
                id="client-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={form.phone}
                onChange={handleChange}
                maxLength={11}
                required
              />
            </div>
          </div>
          

          <label htmlFor="client-email" className="account-page__label">
            E-mail
          </label>

          <input
            className="account-page__input"
            id="client-email"
            type="email"
            value={client?.email || ""}
            readOnly
          />

          

          {error && (
            <p className="account-page__error" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p className="account-page__success" role="status">
              {success}
            </p>
          )}

          <button
            className="account-page__button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar alterações"}
          </button>
        </form>
      </div>
    </main>
  )
}