export default function LoginConfirm(props) {
  const {
    maskEmail,
    handleSendEmail,
    handleUsePassword,
    loading
  } = props

  return (
    <div className="login__confirm">
      <h2>Como deseja entrar?</h2>

      <p>
        Escolha uma das opções para acessar sua conta.
      </p>

      <p>{maskEmail}</p>

      <button
        className="login__confirm-button"
        type="button"
        onClick={handleSendEmail}
        disabled={loading}
      >
        Receber código por e-mail
      </button>

      <button
        className="login__confirm-button"
        type="button"
        onClick={handleUsePassword}
        disabled={loading}
      >
        Entrar com senha
      </button>
    </div>
  )
}