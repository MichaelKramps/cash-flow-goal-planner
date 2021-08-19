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
import PlannerQueries from "./graphql/PlannerQueries";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Modal from "./components/Shared/Modal";
import LoginForm from "./Authentication/LoginForm";
import SignUpForm from "./Authentication/SignUpForm";
import PaymentForm from "./Authentication/PaymentForm";
Amplify.configure(awsconfig);

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          view: "planner-view",
          userLoggedIn: false,
          userEmail: "",
          plannerState: {},
          plannerId: ""
      }

      this.changeView = this.changeView.bind(this);
      this.updateApp = this.updateApp.bind(this);
      this.updateEmail = this.updateEmail.bind(this);
      this.determineVisibility = this.determineVisibility.bind(this);
      this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);

  }

  determineVisibility(viewName) {
      if (this.state.view === viewName) {
          return true;
      } else {
          return false;
      }
  }

  updateApp(state) {
      let newState = {};
      newState.view = this.state.view;
      let plannerState = {
          highlights: state.highlights,
          currentAssets: state.currentAssets,
          futureAssets: state.futureAssets
      };
      newState.plannerState = plannerState;
      newState.loggedIn = this.state.loggedIn;
      newState.plannerId = this.state.plannerId;
      this.setState(newState, async () => {
          let queryResult = await PlannerQueries.updatePlannerState(this.state.plannerId, JSON.stringify(plannerState));
      });
  }

  updateEmail(email) {
      this.setState({userEmail: email});
  }

  changeView(viewName) {
      this.setState({view: viewName});
  }

  async updateUserLoggedIn(user, email) {
      let loggedIn = user ? true : false;
      this.setState({userLoggedIn: loggedIn}, async () => {
          try {
              let queryResult = await PlannerQueries.findPlannerByUser(email);
              let planners = queryResult.data.listPlanners.items;
              if (planners.length === 0) {
                  await PlannerQueries.createPlanner(this.state.plannerState, email, "never");
              } else {
                  let planner = planners[0];
                  this.setState({
                      view: this.state.view,
                      loggedIn: this.state.loggedIn,
                      plannerState: JSON.parse(planner.state),
                      plannerId: planner.id
                  });
              }
          } catch (error) {
              console.log(error)
          }
      });
  }

  isSigningUp() {
      let url = window.location.href;
      if (/signup/.test(url)) {
          return true;
      } else {
          return false;
      }
  }

  isPayment() {
      let url = window.location.href;
      if (/payment/.test(url)) {
          return true;
      } else {
          return false;
      }
  }

  render() {
      return (
          <div className={this.state.view}>
              <Header changeView={this.changeView} />
              <Planner
                  visible={this.determineVisibility("planner-view")}
                  highlights={this.state.plannerState.highlights}
                  currentAssets={this.state.plannerState.currentAssets}
                  futureAssets={this.state.plannerState.futureAssets}
                  updateApp={this.updateApp}/>
              <GenericInvestmentCalculator visible={this.determineVisibility("investment-calculator-view")} />
              <LoanCalculator visible={this.determineVisibility("loan-calculator-view")} />
              <LongTermRentalCalculator visible={this.determineVisibility("long-term-rental-calculator-view")} />
              <MortgageCalculator visible={this.determineVisibility("mortgage-calculator-view")} />
              <ShortTermRentalCalculator visible={this.determineVisibility("short-term-rental-calculator-view")} />
              <NextSteps visible={this.determineVisibility("next-steps-view")} {...this.state.plannerState} />
              <Modal visible={!this.state.userLoggedIn}>
                    <LoginForm visible={!this.state.userLoggedIn} updateUserLoggedIn={this.updateUserLoggedIn} />
              </Modal>
              <SignUpForm visible={this.isSigningUp()} updateEmail={this.updateEmail} />
              <PaymentForm visible={this.isPayment()} emailAddress={this.state.userEmail} />
          </div>
      );
  }
}

export default App;
