import React, { Component } from 'react';
import photoOneSmall from '../assets/photo-1.png';
import photoOneMedium from '../assets/photo-1@2x.png';
import photoOneLarge from '../assets/photo-1@3x.png';
import photoTwoSmall from '../assets/photo-2.png';
import photoTwoMedium from '../assets/photo-2@2x.png';
import photoTwoLarge from '../assets/photo-2@3x.png';

class Solutions extends Component {
  render() {
    return (
    <div className="Solutions full-width">
        <div class="solution-container">
            <img src={photoOneSmall} srcset={`${photoOneSmall} 300w, ${photoOneMedium} 768w, ${photoOneLarge} 1280w`} alt="bookkeping"/>
            <div class="solution-content">
                <p class="solution-emphasis" >50<span>%</span></p>
                <p>Saved in bookkeeping costs</p>
            </div>
        </div>
        <div class="solution-container">
            <img src={photoTwoSmall} srcset={`${photoTwoSmall} 300w, ${photoTwoMedium} 768w, ${photoTwoLarge} 1280w`} alt="bookkeping"/>
            <div class="solution-content">
                <p class="solution-emphasis" >100<span>h</span></p>
                <p>And more saved in bookkeeping time</p>
            </div>
        </div>
        <div class="solution-container">
            <img src={photoOneSmall} srcset={`${photoOneSmall} 300w, ${photoOneMedium} 768w, ${photoOneLarge} 1280w`} alt="bookkeping"/>
            <div class="solution-content">
                <p class="solution-emphasis" >25<span>%</span></p>
                <p>Decrease in food costs</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Solutions;
