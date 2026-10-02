import { useState } from "react"
import LoginConfirm from "./components/LoginConfirm"
import Register from "./components/Register"
import Popup from "../Catalog/components/Popup/Popup"

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [maskEmail, setMaskEmail] = useState('')
    const [maskPhone, setMaskPhone] = useState('')
    const [step, setStep] = useState('check')
    const { handleCheckEmail, handleRegister, handleSendEmail, popup, onOpenPopup, onClosePopup } = props
    function handleCheckSubmit(e){
        e.preventDefault()

        handleCheckEmail(email)
        .then((res) => {
            console.log(res)
            if(res.exists){
                setStep('method')
                setMaskEmail(res.customer.email)
                setMaskPhone(res.customer.phone)
            }
            else{
                setStep('register')
            }
        })
    }
    return(
        <>
            <div className="login" >
                {step === 'check' &&
                    <form className="login__check" onSubmit={handleCheckSubmit}>
                        <label className="login__check-label">Insira seu email para continuar</label>
                        <input className="login__check-input" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="submit" value="Continuar"></input>
                    </form>
                }
                {step === 'method' && <LoginConfirm setStep={setStep} handleSendEmail={() => handleSendEmail(email)} maskEmail={maskEmail} maskPhone={maskPhone} onOpenPopup={onOpenPopup} /> } 
                {step === 'register' && <Register setStep={setStep} handleRegister={handleRegister} email={email}/>}
                {popup && <Popup />}
            </div>
        </>
    )
}