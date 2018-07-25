import React, { Component } from 'react';
import bannerSmall from '../assets/hero-mockup.png';
import bannerMedium from '../assets/hero-mockup@2x.png';
import bannerLarge from '../assets/hero-mockup@3x.png';

import partner1small from '../assets/logo-1.png';
import partner1medium from '../assets/logo-1@2x.png';
import partner1large from '../assets/logo-1@3x.png';

import partner2small from '../assets/logo-2.png';
import partner2medium from '../assets/logo-2@2x.png';
import partner2large from '../assets/logo-2@3x.png';

import partner3small from '../assets/logo-3.png';
import partner3medium from '../assets/logo-3@2x.png';
import partner3large from '../assets/logo-3@3x.png';

import partner4small from '../assets/logo-4.png';
import partner4medium from '../assets/logo-4@2x.png';
import partner4large from '../assets/logo-4@3x.png';

import partner5small from '../assets/logo-5.png';
import partner5medium from '../assets/logo-5@2x.png';
import partner5large from '../assets/logo-5@3x.png';

import partner6small from '../assets/logo-6.png';
import partner6medium from '../assets/logo-6@2x.png';
import partner6large from '../assets/logo-6@3x.png';

import RequestForm from './elements/RequestForm';
import '../styles/components/MainBanner.sass';

class MainBanner extends Component {
  render() {
     const partnerLink="https://google.com"
    return (
    <div>
        <div className="MainBanner">
            <div class="wrapper clearfix full-height">
                <div class="cols col-50">
                    <div class="bannerContent">
                        <h2><b>Digitalize your invoices</b> and create your own shopping cart.</h2>
                        <RequestForm color="dark"/>
                    </div>
                </div>
                <div class="cols col-50">
                    <img  className="main-banner-image" src={bannerSmall} srcSet={`${bannerSmall} 300w, ${bannerMedium} 768w, ${bannerLarge} 1280w`} alt="Banner"/>
                </div>
            </div>
        </div>

        <div class="sponsors">
            <div class="wrapper">
                <ul>
                    <li><a href={partnerLink} ><img  src={partner1small} srcSet={`${partner1small} 300w, ${partner1medium} 768w, ${partner1large} 1280w`} alt="Sponsor"/></a></li>
                    <li><a href={partnerLink} ><img  src={partner2small} srcSet={`${partner2small} 300w, ${partner2medium} 768w, ${partner2large} 1280w`} alt="Sponsor"/></a></li>
                    <li><a href={partnerLink} ><img  src={partner3small} srcSet={`${partner3small} 300w, ${partner3medium} 768w, ${partner3large} 1280w`} alt="Sponsor"/></a></li>
                    <li><a href={partnerLink} ><img  src={partner4small} srcSet={`${partner4small} 300w, ${partner4medium} 768w, ${partner4large} 1280w`} alt="Sponsor"/></a></li>
                    <li><a href={partnerLink} ><img  src={partner5small} srcSet={`${partner5small} 300w, ${partner5medium} 768w, ${partner5large} 1280w`} alt="Sponsor"/></a></li>
                     <li><a href={partnerLink} ><img  src={partner6small} srcSet={`${partner6small} 300w, ${partner6medium} 768w, ${partner6large} 1280w`} alt="Sponsor"/></a></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default MainBanner;
