import React, { Component } from 'react';
import Calculator from './elements/Calculator'

class Partners extends Component {
    render() {
        return (
        <div className="Partners">
            <div className="wrapper">
                <h3 className="title-emphasis">Calculator</h3>
                <p className="cols col-50">
                    With Bellotero.io you save time and money make real-time
                    decisions that boost your business and your bottom line.
                    Get less wrongfully blocked payments, save time on bookkeeping
                    and no need to worry about safety.
                </p>
            </div>
            <Calculator/>
        </div>
    );
  }
}

export default Partners;
