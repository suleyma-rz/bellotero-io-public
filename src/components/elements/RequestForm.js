import React, { Component } from 'react';

class RequestForm extends Component {
  render() {
    return (
    <div >
        <form class="in-line-form">
            <input type="email" placeholder="Your email address" className={this.props.color}/>
            <button class="btn btn-mid-size btn-bluegreen" type="button">Request a demo</button>
        </form>
    </div>
    );
  }
}

export default RequestForm;
