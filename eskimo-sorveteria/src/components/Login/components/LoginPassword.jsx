import { useState } from "react"

export default function LoginPassword(props) {
  const {
    email,
    handlePasswordLogin,
    loading
  } = props

  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (!password || loading) {
      return
    }

    handlePasswordLogin(password)
  }

  return (
    <form
      className="login__check"
      onSubmit={handleSubmit}
    >
      <h2 className="login__check-title">
        Entrar com senha
      </h2>

      <p className="login__check-description">
        {email}
      </p>

      <label
        className="login__check-label"
        htmlFor="login-password"
      >
        Senha
      </label>

      <input
        id="login-password"
        className="login__check-input"
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label className="login__check-visibility">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => setShowPassword(e.target.checked)}
        />

        Mostrar senha
      </label>

      <button
        className="login__check-button"
        type="submit"
        disabled={loading || !password}
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  )
}