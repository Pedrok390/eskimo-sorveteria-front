import { useState } from "react"
import { useNavigate } from "react-router-dom"

import LoginConfirm from "./components/LoginConfirm"
import LoginCode from "./components/LoginCode"
import Register from "./components/Register"

export default function Login(props) {
  const {
    handleCheckEmail,
    handleRegister,
    handleSendEmail,
    handleVerifyCode,
    handleLoginPassword
  } = props

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [maskEmail, setMaskEmail] = useState("")
  const [step, setStep] = useState("check")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleCheckSubmit(e) {
    e.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()

    setError("")
    setLoading(true)

    handleCheckEmail(normalizedEmail)
      .then((res) => {
        setEmail(normalizedEmail)

        if (res?.exists === true) {
          setMaskEmail(res.customer?.email || normalizedEmail)
          setStep("method")
        } else {
          setStep("register")
        }
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleSendCode() {
    setError("")
    setLoading(true)

    return handleSendEmail(email)
      .then(() => {
        setStep("code")
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleConfirmCode(code) {
    setError("")
    setLoading(true)

    return handleVerifyCode(email, code)
      .then(() => {
        navigate("/", { replace: true })
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleRegisterSubmit(data) {
    setError("")
    setLoading(true)

    return handleRegister(data)
      .then(() => {
        const normalizedEmail = data.email.trim().toLowerCase()

        setEmail(normalizedEmail)
        setMaskEmail(normalizedEmail)
        setStep("method")
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="login">
      {step === "check" && (
        <form
          className="login__check"
          onSubmit={handleCheckSubmit}
        >
          <h2>Entre na sua conta Eskimó</h2>

          <label
            className="login__check-label"
            htmlFor="login-email"
          >
            E-mail
          </label>

          <input
            id="login-email"
            className="login__check-input"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="login__check-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Verificando..." : "Continuar"}
          </button>
        </form>
      )}

        {step === "method" && (
            <LoginConfirm
                maskEmail={maskEmail}
                handleSendEmail={handleSendCode}
                handleUsePassword={() => setStep("password")}
                loading={loading}
            />
        )}
        {step === "password" && (
            <LoginPassword
                email={email}
                handleLoginPassword={handleLoginPassword}
                loading={loading}
            />
        )}

      {step === "code" && (
        <LoginCode
          email={email}
          handleVerifyCode={handleConfirmCode}
          handleSendEmail={handleSendCode}
          loading={loading}
        />
      )}

      {step === "register" && (
        <Register
          email={email}
          handleRegister={handleRegisterSubmit}
          setStep={setStep}
          loading={loading}
        />
      )}

      {error && (
        <p className="login__check-error" role="alert">
          {error}
        </p>
      )}

      {step !== "check" && (
        <button
          type="button"
          onClick={() => {
            setStep("check")
            setError("")
          }}
        >
          Voltar
        </button>
      )}
    </div>
  )
}