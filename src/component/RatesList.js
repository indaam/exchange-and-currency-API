import React, {
    Component
} from 'react';
import Helper from '../utils/Helper';

export default class RatesList extends Component {
    constructor(props) {
        super(props);
    }

    calculateCurrency(inputValue, curency){
        return inputValue * curency;
    }       

    renderData(){
        let inputValue = this.props.inputValue;

        return this.props.listData.map((data, index) => {
            let key = Object.keys(data)[0];
            let currency = Helper.calculateCurrency(data[key], inputValue);
            return (
                    <div key={index} className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{ key }</h5>
                            <span className="cur-value">{ currency }</span>
                            <button onClick={this.props.onListClick} type="button" className="close close-absolute" aria-label="Close">
                            <span aria-hidden="true" data-index={index} data-value={key}>&times;</span>
                            </button>
                        </div>
                        <p className="mb-1">{ key } - {data.name}</p>
                        <small>{ inputValue } USD = { key } { currency }</small>
                    </div>
                )
        });
    }

    render() {
        let listData = this.renderData();
        return <div className="list-group mb-3">{ listData }</div>

    }
}
