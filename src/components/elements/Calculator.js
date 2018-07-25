import React, { Component } from 'react';
import InputRange from './InputRange';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
                food_saving:0.0,
                annual_savings:0.0,
                ingredient_spending:10.0,
                employees:1,
        }
        this.calculateSavings.bind(this);
    }

    calculateSavings(){
        /*
        Estimated Food Cost Saving = Monthly ingredient spending * 0.3
        Your estimated annual savings = Full-Time Employees * 1337 + Estimated Food Cost Saving
         */
        let food_cost=parseFloat(this.state.ingredient_spending)*0.3;
        let annual_saved=parseFloat(this.state.employees)*1337.0 + food_cost;
        this.setState({food_saving: food_cost.toFixed(2), annual_savings:annual_saved.toFixed(2)});
    }

    updateIngredient(value){
        this.setState({ingredient_spending: value});
        this.calculateSavings();
    }

    updateEmployees(value){
        this.setState({employees: value});
        this.calculateSavings();
    }

    render() {
        return (
        <div className="calculator wrapper" id="calculator">
            <div className="cols calculator-container">
                <div className="cols calculator-in-container">
                    <div class="calculator-input-container">
                        <p>Monthly ingredient spending</p>
                        <div className="calculator-input">
                            <p className="pre-dollar">{this.state.ingredient_spending}</p>
                            <InputRange min="9.9" max="100.4" step="0.1" update={this.updateIngredient.bind(this)} value="0" />
                        </div>
                    </div>
                    <div class="calculator-input-container">
                        <p>Full-time employees that process invoices</p>
                        <div className="calculator-input">
                            <p>{this.state.employees}</p>
                            <InputRange min="0" max="11" step="1" update={this.updateEmployees.bind(this)} value="0"/>
                        </div>
                    </div>
                </div>
                <div className="cols full-height calculator-out-container" >
                    <div className="output-results ">
                        <div className="cols col-50">
                                <p className="title">Your estimated annual savings</p>
                                <p className="story-emphasis"><span>$</span>{this.state.annual_savings}</p>
                        </div>
                        <div className="cols col-50">
                            <p className="title">Estimated food costs savings</p>
                            <p className="story-emphasis"><span>$</span>{this.state.food_saving}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Calculator;
