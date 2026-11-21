import { useState } from "react"

import AccountAddressForm from "./AccountAddressForm"
import AccountAddressCard from "./AccountAddressCard"

export default function AccountAddresses(props) {
    const {
        addresses = [],
        onSearch,
        onAdd,
        onUpdate,
        onDelete
    } = props

    const [showForm, setShowForm] = useState(false)
    const [editingAddress, setEditingAddress] = useState(null)
    const [saving, setSaving] = useState(false)
    const [deletingId, setDeletingId] = useState(null)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    function handleOpenAdd() {
        setEditingAddress(null)
        setShowForm(true)
        setError("")
        setSuccess("")
    }

    function handleOpenEdit(address) {
        setEditingAddress(address)
        setShowForm(true)
        setError("")
        setSuccess("")
    }

    function handleCancel() {
        setShowForm(false)
        setEditingAddress(null)
        setError("")
    }

    function handleSave(data) {
        if (saving) {
            return
        }

        setSaving(true)
        setError("")
        setSuccess("")

        const request = editingAddress
            ? onUpdate(editingAddress._id, data)
            : onAdd(data)

        return request
            .then(() => {
                setSuccess(
                    editingAddress
                        ? "Endereço atualizado com sucesso!"
                        : "Endereço cadastrado com sucesso!"
                )

                setEditingAddress(null)
                setShowForm(false)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setSaving(false)
            })
    }

    function handleDelete(addressId) {
        if (deletingId !== null || saving) {
            return
        }

        const confirmed = window.confirm(
            "Deseja excluir este endereço?"
        )

        if (!confirmed) {
            return
        }

        setDeletingId(addressId)
        setError("")
        setSuccess("")

        return onDelete(addressId)
            .then(() => {
                setSuccess("Endereço excluído com sucesso!")
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setDeletingId(null)
            })
    }

    return (
        <section className="account-page">

            <div className="account-page__header">

                <h2 className="account-page__title">
                    Meus endereços
                </h2>

                <p className="account-page__description">
                    Gerencie os endereços de entrega
                    que você utiliza nos seus pedidos.
                </p>

            </div>

            {error && !showForm && (
                <p
                    className="account-page__error"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {success && (
                <p
                    className="account-page__success"
                    role="status"
                >
                    {success}
                </p>
            )}

            <div className="account-page__actions">
                <button
                    className="account-page__button account-page__button--add"
                    type="button"
                    onClick={handleOpenAdd}
                    disabled={
                        showForm ||
                        saving ||
                        deletingId !== null
                    }
                >
                    + Adicionar endereço
                </button>
            </div>

            {showForm && (
                <AccountAddressForm
                    address={editingAddress}
                    onSearch={onSearch}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    loading={saving}
                    error={error}
                />
            )}

            <div className="account-page__list">

                {addresses.length === 0 && (
                    <div className="account-page__empty">
                        <p>
                            Você ainda não possui
                            endereços cadastrados.
                        </p>
                    </div>
                )}

                {addresses.map((address) => (
                    <AccountAddressCard
                        key={address._id}
                        address={address}
                        onEdit={handleOpenEdit}
                        onDelete={handleDelete}
                        disabled={
                            showForm ||
                            saving ||
                            deletingId !== null
                        }
                    />
                ))}

            </div>

        </section>
    )
}