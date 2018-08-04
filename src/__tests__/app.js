import React, { Component } from 'react';

import {
        REST_COUNTRIES_CURRENCIES,
        REST_EXCHANGERATES,
        DEFAULT_LIST
} from '../CONSTANT';

import Api from '../utils/Api';

describe('API TEST', ()=> {

    it('Should api getInitData have response', ()=> {

        return Api.getInitData({
            REST_EXCHANGERATES : REST_EXCHANGERATES,
            DEFAULT_LIST : DEFAULT_LIST,
        }).then( response => {
            expect(response).toHaveProperty('data');
            expect(response).toHaveProperty('status', 200);
        });

    });

    it('Should api getCountryList have response', ()=> {

        return Api.getCountryList({
            REST_COUNTRIES_CURRENCIES : REST_COUNTRIES_CURRENCIES
        }).then( response => {
            expect(response).toHaveProperty('data');
            expect(response).toHaveProperty('status', 200);
        });

    });

    it('Should api getUpdateData have response', ()=> {

        return Api.getUpdateData({
            REST_EXCHANGERATES : REST_EXCHANGERATES,
            CurrencyId : 'IDR'
        }).then(response => {
            expect(response).toHaveProperty('data');
            expect(response).toHaveProperty('status', 200);
        });

    });

});
