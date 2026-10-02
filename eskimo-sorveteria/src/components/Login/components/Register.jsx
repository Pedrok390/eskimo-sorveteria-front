import { useState } from "react"

export default function Register(props){
    const { handleRegister, setStep, email } = props
    const [form, setForm] = useState({
        name: '',
        email: email,
        password: '',
        tel: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        tel: ''
    })
    const [phone, setPhone] = useState('')


    function formatPhone(value) {
        const numbers = value
            .replace(/\D/g, "")
            .slice(0, 11);

        if (numbers.length === 0) {
            return "";
        }

        if (numbers.length <= 2) {
            return `(${numbers}`;
        }

        if (numbers.length <= 6) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        }

        if (numbers.length <= 10) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
        }
    const validateName = (name) =>{
        if(!name){
            return "Campo Obrigatório"
        }
        if(name.length < 5){
            return "É necessário escolher um nome com mais de 8 caractéres"
        }
        return ''
    }
    const validateEmail = (email) => {
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
            return "Insira um e-mail válido"
        }
        return ''
    }
    const validatePassword = (password) => {
        if (!password) {
            return "O campo de senha é obrigatório.";
        }
        if(password.length < 8){
            return "A senha precisa ter 8 dígitos ou mais";
        }

        return "";
    };
    function validateTelephone(tel) {
        if (!tel) {
        return "O campo de telefone é obrigatório";
        }

        const numbers = tel.replace(/\D/g, "");

        if (numbers.length !== 11) {
        return "Insira um celular válido";
        }

        return "";
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        if(name === 'tel'){
            setForm((prev) => ({
                ...prev,
                [name]: value
            }))
            setPhone(formatPhone(value))
        }
        else{
            setForm((prev) => ({
                ...prev,
                [name]: value
            }))
        }
        
        if(name === 'name'){
            setErrors((prev) => ({
                ...prev,
                [name]: validateName(value)
            }))
        }
        if(name === 'email'){
            setErrors((prev) => ({
                ...prev,
                [name]: validateEmail(value)
            }))
        }
        if(name === 'password'){
            setErrors((prev) => ({
                ...prev,
                [name]: validatePassword(value)
            }))
        }
        if(name === 'tel'){
            setErrors((prev) => ({
                ...prev,
                [name]: validateTelephone(value)
            }))
        }
        
    }
    const isFormValid = form.name && form.email && form.password && form.tel && !validateName(form.name) && !validateEmail(form.email) && !validatePassword(form.password) && !validateTelephone(form.tel);
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(isFormValid)
        console.log(validateName(form.name))
        console.log(validateEmail(form.email))
        console.log(validatePassword(form.password))
        console.log(validatePassword(form.tel))
        if(isFormValid){
            handleRegister(form)
        }
    }
    return(
        <>
            <form className="login__check" onSubmit={handleSubmit}>
                <label className="login__check-label">Nome de Usuário</label>
                <input className="login__check-input" name="name" type="text" value={form.name} onChange={handleChange} required></input>
                {errors.name && <p className="login__check-error">{errors.name}</p>}
                <label className="login__check-label">E-mail</label>
                <input className="login__check-input" name="email" type="email" value={form.email} onChange={handleChange} required></input>
                {errors.email && <p className="login__check-error">{errors.email}</p>}
                <label className="login__check-label">Senha</label>
                <input className="login__check-input" name="password" type="password" value={formatPhone.password} onChange={handleChange} required></input>
                {errors.password && <p className="login__check-error">{errors.password}</p>}
                <label className="login__check-label">Número de Telefone</label>
                <input className="login__check-input" name="tel" type="tel" value={phone} onChange={handleChange} required></input>
                {errors.tel && <p className="login__check-error">{errors.tel}</p>}
                <input className={`login__check-button ${!isFormValid && 'login__check-button--disabled'}`} type="submit" value='Registrar'></input>
            </form>
        </>
    )
}