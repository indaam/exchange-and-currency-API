import React, { Component } from 'react';
import Helper from '../utils/Helper';

export default class ChangeRates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: null
        };
    }

    renderList(){
        if ( this.props.ratesList ) {
            let showList = Helper.objectToArray(this.props.ratesList);
            return this.props.countryList.map((data, index) => {
                if ( !showList.includes(data.currencies[0].code)) {
                    return (<option key={index} value={data.currencies[0].code}>{data.currencies[0].code} - {data.currencies[0].name}</option>)
                }

            });
        }
    }

    render() {
        let listOptions = this.renderList();
        return (
            <div className="input-group">
                <select defaultValue={this.props.selectValue} className="custom-select" onChange={this.props.onSelectChange}>
                    <option value="-1">Add More Currency...</option>
                    { listOptions }
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={this.props.onSelectSubmit}>Submit</button>
                </div>
            </div>

        );
    }
}
