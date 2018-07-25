import React, { Component } from 'react';

import small1 from '../assets/intro-img-1.png';
import medium1 from '../assets/intro-img-1@2x.png';
import large1 from '../assets/intro-img-1@3x.png';

import small2 from '../assets/intro-img-2.png';
import medium2 from '../assets/intro-img-2@2x.png';
import large2 from '../assets/intro-img-2@3x.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight);

class Features extends Component {
  render() {
    return (
    <div className="About content bg-white">
        <div class="wrapper wrapper-double-padding full-height">
            <div class="cols col-40">
                <div class="rows-50">
                    <h3 class="title-emphasis">
                        Bellotero.io is the digital solution that gives you fast, accurate, automated accounts payable and smart, businness-transforming insights.
                    </h3>
                </div>
                <div class="rows-50">
                    <h3>Get the full picture.<br />In half the time</h3>
                    <p>
                        Threads keep all your conversations clearly separated by topic so replies won’t get buried in an endless stream of group chat.
                    </p>
                    <p>
                        <a href="#LearnMore" class="link-blue"> Learn more <FontAwesomeIcon icon="arrow-right" /></a>
                    </p>
                </div>
            </div>
            <div class="cols col-60 content-image">
                    <img src={small1} srcSet={`${small1} 300w, ${medium1} 768w, ${large1} 1280w`} alt="Features"/>
            </div>
        </div>
        <div class="wrapper full-height inverse-resp">
            <div class="cols col-60 content-image">
                <img src={small2} srcSet={`${small2} 300w, ${medium2} 768w, ${large2} 1280w`} alt="Features"/>
            </div>
            <div class="cols col-40">
                <div>
                    <h3>Timesaving,<br /> moneymaking.</h3>
                    <p>
                        Bellotero.io automatically turns your threaded conversations into a searchable catalog of topics.
                    </p>
                    <p>
                        <a href="#LearnMore" class="link-blue"> Learn more <FontAwesomeIcon icon="arrow-right" /> </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Features;
