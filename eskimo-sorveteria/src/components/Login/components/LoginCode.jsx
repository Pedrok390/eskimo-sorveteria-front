import { useState } from "react"

export default function LoginCode(props) {
  const {
    email,
    handleVerifyCode,
    handleSendEmail,
    loading
  } = props

  const [code, setCode] = useState("")

  function handleChange(e) {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6)

    setCode(value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (code.length !== 6 || loading) {
      return
    }

    handleVerifyCode(code)
  }

  function handleResendCode() {
    if (loading) {
      return
    }

    setCode("")
    handleSendEmail()
  }

  return (
    <form className="login__check" onSubmit={handleSubmit}>
      <h2 className="login__check-title">Verificação por e-mail</h2>
      <p className="login__check-description">Digite o código de 6 dígitos enviado para {email}.</p>

      <label className="login__check-label" htmlFor="login-code">Código de verificação</label>

      <input id="login-code" className="login__check-input" type="text" inputMode="numeric" autoComplete="one-time-code" placeholder="000000" maxLength={6} value={code} onChange={handleChange} required/>

      <button
        className="login__check-button"
        type="submit"
        disabled={loading || code.length !== 6}
      >
        {loading ? "Verificando..." : "Entrar"}
      </button>

      <button
        className="login__check-resend"
        type="button"
        onClick={handleResendCode}
        disabled={loading}
      >
        Reenviar código
      </button>
    </form>
  )
}