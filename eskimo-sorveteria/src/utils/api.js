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
    
    getCurrentClient(token) {
        return fetch(`${this._baseUrl}/clients/me`, {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => this._checkResponse(res));
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

    loginWithPassword(email, password) {
        return fetch(`${this._baseUrl}/clients/login/password`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            email,
            password
            })
        })
        .then((res) => this._checkResponse(res))
    }
    getMyOrders(token) {
        return fetch(`${this._baseUrl}/orders/my`, {
            headers: {
            "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => this._checkResponse(res))
    }
    updateMyData(token, data) {
        return fetch(`${this._baseUrl}/clients/me`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then((res) => this._checkResponse(res));
    }
    searchAddresses(token, text) {
        return fetch(
            `${this._baseUrl}/clients/addresses/search?text=${encodeURIComponent(text)}`,
            {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
            }
        )
        .then((res) => this._checkResponse(res));
    }
    addMyAddress(token, data) {
        return fetch(`${this._baseUrl}/clients/me/addresses`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then((res) => this._checkResponse(res));
        }

    updateMyAddress(token, addressId, data) {
        return fetch(
            `${this._baseUrl}/clients/me/addresses/${addressId}`,
            {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
            }
        )
        .then((res) => this._checkResponse(res));
        }

    deleteMyAddress(token, addressId) {
        return fetch(
            `${this._baseUrl}/clients/me/addresses/${addressId}`,
            {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
            }
        )
        .then((res) => this._checkResponse(res));
    }
}
const api = new Api({
    baseUrl:
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000"
})

export default api