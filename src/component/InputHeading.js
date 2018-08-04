import React, { Component } from 'react';

export default class InputHeading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label>USD - United State Dollars</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">USD - $</span>
                    </div>
                    <input type="text" placeholder="Type Number" className="form-control" value={this.props.inputValue} onChange={this.props.onInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
            </div>
        );
    }
}
