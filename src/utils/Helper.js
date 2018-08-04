let Helper = function(){
    let services = {};
    services.objToArray = function(data){
        let _data = [];
        for (let i in data) {
            _data.push({
                [i]: data[i]
            });
        }
        return _data;
    }

    services.mergeData = function(rates, countryLis){
        for (let i in rates) {
            for (let j in countryLis) {
                if (Object.keys(rates[i])[0] === countryLis[j].currencies[0].code) {
                    rates[i]["code"] = countryLis[j].currencies[0].code;
                    rates[i]["name"] = countryLis[j].currencies[0].name;
                    rates[i]["symbol"] = countryLis[j].currencies[0].symbol;
                }
            }
        }

        if ( rates.length === 1) {
            return rates[0]
        }

        return rates;

    }

    services.calculateCurrency = function(currency, inputValue){
        return currency * Number(inputValue);
    }

    services.strtingToArray = function(string){
        return string.split(",");
    }

    services.objectToArray = function(obj){
        let newArray = [];
        for( let i in obj){
            newArray.push(obj[i].code)
        }
        return newArray;
    }

    services.filterCountryList = function(object, arr){
        return object.filter(function(data) {
            return !arr.includes(data.currencies[0].code);
        });
    }

    return services;
}

export default Helper()
