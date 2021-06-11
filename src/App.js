import React from 'react';
import './App.css';
import Planner from "./components/Planner";
import Header from "./components/Header";
import LoanCalculator from "./components/Calculators/LoanCalculator";
import LongTermRentalCalculator from "./components/Calculators/LongTermRentalCalculator";
import MortgageCalculator from "./components/Calculators/MortgageCalculator";
import ShortTermRentalCalculator from "./components/Calculators/ShortTermRentalCalculator";
import InvestmentCalculator from "./components/Calculators/InvestmentCalculator";
import Learn from "./components/Learn/Learn";

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          view: "planner-view"
      }

      this.changeView = this.changeView.bind(this);
      this.determineVisibility = this.determineVisibility.bind(this);
  }

  determineVisibility(viewName) {
      if (this.state.view === viewName) {
          return true;
      } else {
          return false;
      }
  }

  changeView(viewName) {
      this.setState({view: viewName});
  }

  render() {
        return (
          <div className={this.state.view}>
              <Header changeView={this.changeView} />
              <Planner visible={this.determineVisibility("planner-view")} />
              <Learn visible={this.determineVisibility("learn-view")} />
              <InvestmentCalculator visible={this.determineVisibility("investment-calculator-view")} />
              <LoanCalculator visible={this.determineVisibility("loan-calculator-view")} />
              <LongTermRentalCalculator visible={this.determineVisibility("long-term-rental-calculator-view")} />
              <MortgageCalculator visible={this.determineVisibility("mortgage-calculator-view")} />
              <ShortTermRentalCalculator visible={this.determineVisibility("short-term-rental-calculator-view")} />
          </div>
      );
  }
}

export default App;
