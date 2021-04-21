import React from 'react';
import './App.css';
import Simulator from "./components/Simulator";
import Header from "./components/Header";
import LoanCalculator from "./components/Calculators/LoanCalculator";
import LongTermRentalCalculator from "./components/Calculators/LongTermRentalCalculator";
import MortgageCalculator from "./components/Calculators/MortgageCalculator";
import ShortTermRentalCalculator from "./components/Calculators/ShortTermRentalCalculator";
import InvestmentCalculator from "./components/Calculators/InvestmentCalculator";
import InvestingConstants from "./components/InvestingConstants/InvestingConstants";

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          view: "simulator-view"
      }

      this.changeView = this.changeView.bind(this);
  }

  changeView(viewName) {
      this.setState({view: viewName});
  }

  render() {
        return (
          <div className={this.state.view}>
              <Header changeView={this.changeView} />
              <Simulator />
              <InvestingConstants />
              <InvestmentCalculator />
              <LoanCalculator />
              <LongTermRentalCalculator />
              <MortgageCalculator />
              <ShortTermRentalCalculator />
          </div>
      );
  }
}

export default App;
