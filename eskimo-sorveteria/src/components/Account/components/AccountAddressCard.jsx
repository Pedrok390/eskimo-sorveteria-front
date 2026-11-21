export default function AccountAddressCard(props) {
    const {
        address,
        onEdit,
        onDelete,
        disabled
    } = props

    return (
        <div className="account-address-card">

            <div className="account-address-card__info">

                <h3 className="account-address-card__title">
                    {address.label || "Endereço"}
                </h3>

                <p className="account-address-card__street">
                    {address.street}, {address.number}
                    {address.complement
                        ? ` - ${address.complement}`
                        : ""}
                </p>

                <p className="account-address-card__location">
                    {address.neighborhood}, {address.city}/{address.state}
                </p>

                <p className="account-address-card__zipcode">
                    CEP: {address.zipCode}
                </p>

                {address.reference && (
                    <p className="account-address-card__reference">
                        Referência: {address.reference}
                    </p>
                )}

            </div>

            <div className="account-address-card__actions">

                <button
                    className="account-address-card__edit"
                    type="button"
                    onClick={() => onEdit(address)}
                    disabled={disabled}
                >
                    Editar
                </button>

                <button
                    className="account-address-card__delete"
                    type="button"
                    onClick={() => onDelete(address._id)}
                    disabled={disabled}
                >
                    Excluir
                </button>

            </div>

        </div>
    )
}