
export default function AccountOrders(props) {
  const {
    orders,
    loading,
    error
  } = props

  const statusLabels = {
    pending: "Pendente",
    confirmed: "Confirmado",
    preparing: "Em preparo",
    out_for_delivery: "Saiu para entrega",
    completed: "Concluído",
    cancelled: "Cancelado"
  }

  function formatPrice(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value)
  }

  return (
    <main className="account-page">
      <h1 className="account-page__title">
        Meus pedidos
      </h1>

      {loading && (
        <p>Carregando pedidos...</p>
      )}

      {error && (
        <p
          className="account-page__error"
          role="alert"
        >
          {error}
        </p>
      )}

      {!loading && !error && orders.length === 0 && (
        <p>
          Você ainda não possui pedidos online.
        </p>
      )}

      {!loading && !error && orders.map((order) => (
        <div
          className="account-page__card"
          key={order._id}
        >
          <h2>
            Pedido #{order._id.slice(-6).toUpperCase()}
          </h2>

          <p>
            Data: {new Date(order.createdAt)
              .toLocaleDateString("pt-BR")}
          </p>

          <p>
            Status: {
              statusLabels[order.status] || order.status
            }
          </p>

          <p>
            Total: {formatPrice(order.total)}
          </p>

          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.quantity}x {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
