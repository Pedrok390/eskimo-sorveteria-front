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
}
const api = new Api({
    baseUrl:
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000"
})

export default api