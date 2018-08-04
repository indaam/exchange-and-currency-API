import React, {
    Component
} from 'react';

import loading from '../assets/loading.svg';

export default class Loading extends Component {

    render() {
        let LoadingClass = this.props.removeLoading ? "wrap-loading hide" : "wrap-loading";
        return (
            <div className={LoadingClass}>
                <img src={loading} className="loading" alt="loading" />
            </div>
        )
    }
}
