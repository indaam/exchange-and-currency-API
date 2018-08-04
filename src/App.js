import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
        REST_COUNTRIES_CURRENCIES,
        REST_EXCHANGERATES,
        DEFAULT_LIST
} from './CONSTANT';


import Api from './utils/Api';
import Helper from './utils/Helper';

import InputHeading from './component/InputHeading';
import RatesList from './component/RatesList';
import ChangeRates from './component/ChangeRates';
import Modals from './component/Modals';
import Loading from './component/Loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appName : 'USD Currency',
            network : true,
            modals : {
                show : false,
                mesagge : ""
            },
            inputValue : 1,
            selectValue : "0",
            countryList : [],
            ratesList : []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSelectSubmit = this.onSelectSubmit.bind(this);
        this.onCloseModals = this.onCloseModals.bind(this);
        this.onListClick = this.onListClick.bind(this);
    }

    handleError(error){
        if ( error.response ) {
            this.setState({
                modals: {
                    show: true,
                    mesagge : error.response.data.error
            }});            
        }else{
            this.setState({
                network : false,
                modals: {
                    show: true,
                    mesagge : "Error: Network Error"
            }});
        }

    }

    handleDefaultList(response){
        this.setState({
            rates : Helper.objToArray(response.data.rates)
        });

        Api.getCountryList({
            REST_COUNTRIES_CURRENCIES : REST_COUNTRIES_CURRENCIES
        }).then( response => {
            this.handleContryList(response)
        }, error => {
            this.handleError(error);
        });
    }

    handleContryList(response){
        this.setState({
            ratesList : Helper.mergeData(this.state.rates, response.data),
            countryList : response.data
        });
    }

    getDefaultList(){
        Api.getInitData({
            REST_EXCHANGERATES : REST_EXCHANGERATES,
            DEFAULT_LIST : DEFAULT_LIST,
        }).then( response => {
            this.handleDefaultList(response)
        }, error => {
            this.handleError(error);
        });
    }

    initData() {
        this.getDefaultList();
    }

    handleUpdateData(response){
        let newRates = Helper.objToArray(response.data.rates);
        let newRatesData = Helper.mergeData(newRates, this.state.countryList);

        this.setState({
            ratesList : this.state.ratesList.concat(newRatesData)
        });
    }

    updateData(CurrencyId){
        if ( CurrencyId ) {
            Api.getUpdateData({
                REST_EXCHANGERATES : REST_EXCHANGERATES,
                CurrencyId : CurrencyId
            }).then(response => {
                this.handleUpdateData(response);
            }, error => {
                this.handleError(error);
            });
        }
    }

    componentDidMount() {
        this.initData();
    }

    onInputChange(e){
        this.setState({ inputValue: e.target.value });
    }

    onSelectChange(e){
        this.setState({ selectValue: e.target.value });
    }

    onSelectSubmit(){
        this.updateData(this.state.selectValue);
    }

    onCloseModals(){
        this.setState({
            modals: {
                show: false,
                mesagge : ""
        }});
    }

    onListClick(e){
        this.setState({ratesList: this.state.ratesList.filter(function(data) { 
            return data.code !== e.target.dataset.value
        })});
    }

    handleLoading(){
        if ( this.state.countryList.length || this.state.network === false ) {
            return true;
        }else{
            return false
        }
    }

    render() {
        return (
            <div className="app-wrapper">
                <div className="container-fluid">
                    <h2 className="app-title">{this.state.appName}</h2>
                    <div className="App" >
                        <InputHeading inputValue={this.state.inputValue} onInputChange={this.onInputChange}/>
                        <RatesList onListClick={this.onListClick} inputValue={this.state.inputValue} listData={this.state.ratesList}/>
                        <ChangeRates selectValue={this.state.selectValue} onSelectChange={this.onSelectChange} onSelectSubmit={this.onSelectSubmit} countryList={this.state.countryList} ratesList={this.state.ratesList}/>
                    </div>
                </div>
                <Modals onCloseModals={this.onCloseModals} modals={this.state.modals}/>
                <Loading removeLoading={this.handleLoading()} countryList={this.state.countryList} ratesList={this.state.ratesList}/>
            </div>
        );
    }
}

export default App;
