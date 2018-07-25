import React, { Component } from 'react';
import RequestForm from './elements/RequestForm';

class About extends Component {
  render() {
    return (
    <div className="contact-form bg-bluegreen">
        <div className="wrapper">
            <div className="cols col-50">
                <h2>
                    Ready to get started with Bellotero<span>.io</span>?
                </h2>
            </div>
            <div className="cols col-50">
                <div>
                    <h3 className="white-80-title">No more manual data entry.<br/> Hands off. Thumbs up.</h3>
                    <RequestForm color="bluegreen"/>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default About;
