import React from 'react';
import './App.css';
import Planner from "./components/Planner";
import Header from "./components/Header";
import LoanCalculator from "./components/Calculators/LoanCalculator";
import MortgageCalculator from "./components/Calculators/MortgageCalculator";
import ShortTermRentalCalculator from "./components/Calculators/ShortTermRentalCalculator";
import LongTermRentalCalculator from "./components/Calculators/LongTermRentalCalculator";
import GenericInvestmentCalculator from "./components/Calculators/GenericInvestmentCalculator";
import NextSteps from "./components/NextSteps/NextSteps";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Modal from "./components/Shared/Modal";
import LoginForm from "./Authentication/LoginForm";
Amplify.configure(awsconfig);

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          view: "planner-view"
      }

      this.changeView = this.changeView.bind(this);
      this.updateApp = this.updateApp.bind(this);
      this.determineVisibility = this.determineVisibility.bind(this);

  }

  determineVisibility(viewName) {
      if (this.state.view === viewName) {
          return true;
      } else {
          return false;
      }
  }

  updateApp(state) {
      state.view = this.state.view
      this.setState(state);
  }

  changeView(viewName) {
      this.setState({view: viewName});
  }

  render() {
        return (
          <div className={this.state.view}>
              <Header changeView={this.changeView} />
              <Planner visible={this.determineVisibility("planner-view")} updateApp={this.updateApp}/>
              <GenericInvestmentCalculator visible={this.determineVisibility("investment-calculator-view")} />
              <LoanCalculator visible={this.determineVisibility("loan-calculator-view")} />
              <LongTermRentalCalculator visible={this.determineVisibility("long-term-rental-calculator-view")} />
              <MortgageCalculator visible={this.determineVisibility("mortgage-calculator-view")} />
              <ShortTermRentalCalculator visible={this.determineVisibility("short-term-rental-calculator-view")} />
              <NextSteps visible={this.determineVisibility("next-steps-view")} {...this.state} />
              <Modal visible={true}>
                    <LoginForm />
              </Modal>
          </div>
      );
  }
}

export default App;
