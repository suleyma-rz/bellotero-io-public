import React, { Component } from 'react';

class StoryItem extends Component {
    constructor(props) {
      super(props);
    }

    render(){

        return (
            <div class="item story-item">
                <div class="cols col-50 story-content">
                    <p>{this.props.children}</p>
                </div>
                <div class="cols col-50 col-sm-40 story-info">
                    <p class="story-author">{this.props.title}</p>
                    <p class="story-ocupation">{this.props.subtitle}</p>
                </div>
            </div>
        );
    }
}

export default StoryItem;
