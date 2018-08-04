import axios from 'axios';

const Api = function(){
    let services = {};

    services.getInitData = function(data){
        return new Promise((resolve, reject) => {
            axios.get(data.REST_EXCHANGERATES, {
                params: {
                    base: "USD",
                    symbols: data.DEFAULT_LIST
                }
            })
            .then( response => {
                resolve(response);
            })
            .catch( error => {
                reject(error);
            });
        });

    }

    services.getCountryList = function(data){
        return new Promise((resolve, reject) => {
            axios.get(data.REST_COUNTRIES_CURRENCIES, {
                params: {
                    fields: "name;currencies",
                }
            })
            .then( response => {
                resolve(response);
            })
            .catch( error => {
                reject(error);
            });
        });
    }

    services.getUpdateData = function(data){
        return new Promise((resolve, reject) => {
            axios.get(data.REST_EXCHANGERATES, {
                params: {
                    base: "USD",
                    symbols: data.CurrencyId
                }
            })
            .then( response => {
                resolve(response);
            })
            .catch( error => {
                reject(error);
            });
        });

    }

    return services;
}

export default Api()
