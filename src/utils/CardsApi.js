import { apiCardsUrl, apiClientId } from '../constants/constants';

class CardsApi {
    constructor(options ){
        this._options = options;
        this._baseUrl = options.baseUrl;
        this._headers = {headers: options.headers};
        this._headersGet ={
            method: 'GET',
            headers: options.headers
        };
        this._headersPatch ={
            method: 'PATCH',
            headers: options.headers
        };
        this._headersPost ={
            method: 'POST',
            headers: options.headers
        };
        this._headersPut ={
            method: 'PUT',
            headers: options.headers
        };
        this._headersDelete ={
            method: 'DELETE',
            headers: options.headers
        };
    }

    resCheck(res){
        return res.ok ? res.json() : Promise.reject(res);
    }

    getInitialCards(){
        return fetch(this._baseUrl + '/?client_id=' + apiClientId, this._headersGet)
            .then(res => {
                return this.resCheck(res);
            });
    }
    
}

const apiCards = new CardsApi({
    baseUrl: apiCardsUrl,
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default apiCards;
