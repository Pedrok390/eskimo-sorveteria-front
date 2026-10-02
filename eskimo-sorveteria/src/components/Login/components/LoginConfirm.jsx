export default function LoginConfirm(props){
    const {handleSendEmail, setState, maskEmail, maskPhone} = props

    const handleEmail = () => {

        handleSendEmail()
    }
    return(
        <>
            <button onClick={handleSendEmail}>E-mail: {maskEmail}</button>
            <button onClick={handleSendEmail}>Telefone: {maskPhone}</button>
        </>
    )
}