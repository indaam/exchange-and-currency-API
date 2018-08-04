import React, { Component } from 'react';

export default class Modals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let modalClassName = this.props.modals.show ? "modal fade show" : "modal fade";
        let modalInlineStyle = this.props.modals.show ? {display: "block"} : {display: "none"};
        let modalMessage = this.props.modals.mesagge ? this.props.modals.mesagge : "";
        return (
            <div className={modalClassName} style={modalInlineStyle} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                            <button onClick={this.props.onCloseModals} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {modalMessage}
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.props.onCloseModals} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
