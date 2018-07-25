import React, { Component } from 'react';
import photoOneSmall from '../assets/photo-1.png';
import photoOneMedium from '../assets/photo-1@2x.png';
import photoOneLarge from '../assets/photo-1@3x.png';
import photoTwoSmall from '../assets/photo-2.png';
import photoTwoMedium from '../assets/photo-2@2x.png';
import photoTwoLarge from '../assets/photo-2@2x.png';

import '../sass/Stories.sass';

class Numbers extends Component {
  render() {
    return (
    <div className="Stories full-width">
        <div class="story-container">
            <img src={photoOne} alt="bookkeping"/>
            <div class="story-content">
                <p class="story-emphasis" >50<span>%</span></p>
                <p>Saved in bookkeeping costs</p>
            </div>
        </div>
        <div class="story-container">
            <img src={photoTwo} alt="bookkeping"/>
            <div class="story-content">
                <p class="story-emphasis" >100<span>h</span></p>
                <p>And more saved in bookkeeping time</p>
            </div>
        </div>
        <div class="story-container">
            <img src={photoOne} alt="bookkeping"/>
            <div class="story-content">
                <p class="story-emphasis" >25<span>%</span></p>
                <p>Decrease in food costs</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Customers;
