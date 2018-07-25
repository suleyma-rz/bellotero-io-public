import React, { Component } from 'react';

class InputRange extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value:parseFloat(this.props.min)
        }
    }
    getInitialState() {
        this.props.update(this.state.value);
        return {value: parseFloat(this.props.min)}
    }

    handleChange(e){
        this.setState({value: e.target.value});
        this.props.update(this.state.value);
    }
    render() {
    return (
        <div class="form-group range-slider">
            <input
               id={this.props.id_input}
               class="form-control-range"
               type="range"
               min={isNaN(parseFloat(this.props.min)) ? 0 : parseFloat(this.props.min)}
               max={isNaN(parseFloat(this.props.max)) ? 100 : parseFloat(this.props.max)}
               value={parseFloat(this.state.value)}
               onChange={this.handleChange.bind(this)}
               step={this.props.step} />
        </div>
    );
  }
}
export default InputRange;
