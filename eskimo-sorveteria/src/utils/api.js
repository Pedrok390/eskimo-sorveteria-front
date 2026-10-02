class Api{
    constructor(options){
        this._baseUrl = options.baseUrl;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        
        }

        return res.json().then((error) => {
        return Promise.reject(
            new Error(
            error.message ||
            "Erro na requisição"
            )
        );
        });
    }

    getProducts(){
        return fetch(`${this._baseUrl}/products`)
        .then((res) => this._checkResponse(res));
    }

    checkEmail(email){
        return fetch(`${this._baseUrl}/clients`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then((res) => this._checkResponse(res))
    }

    signup(data){
        console.log(data)
        return fetch(`${this._baseUrl}/clients/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.tel,
            })
        })
        .then((res) => this._checkResponse(res))
    }

    sendEmailCode(email) {
        return fetch(`${this._baseUrl}/clients/login/email/send-code`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        }).then((res) => this._checkResponse(res));
    }

    verifyEmailCode(email, code) {
        return fetch(`${this._baseUrl}/clients/login/email/verify-code`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                code: code
            })
        }).then((res) => this._checkResponse(res));
    }
}
const api = new Api({
    baseUrl:
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000"
})

export default api