import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import StoryItem from './elements/StoryItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import quoteSmall from '../assets/quotation-marks.png';
import quoteMedium from '../assets/quotation-marks@2x.png';
import quoteLarge from '../assets/quotation-marks@3x.png';



class Stories extends Component {
    render() {
    return (
    <div className="Stories">
        <div class="wrapper full-height">
            <h3 class="title-emphasis">Our customers love us</h3>
            <div class="carousel-container">
                <img  className="quote-mark" src={quoteSmall} srcSet={`${quoteSmall} 300w, ${quoteMedium} 768w, ${quoteLarge} 1280w`} alt="quote"/>
                <OwlCarousel  className="owl-theme"  margin={1}  items={1} >
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                    <StoryItem title="Molly O’Keefe" subtitle="American Author">It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail.</StoryItem>
                </OwlCarousel>
            </div>
        </div>
    </div>
    );
  }
}

export default Stories;
