import React from 'react';
import './App.css';
import Simulator from "./components/Simulator";
import Header from "./components/Header";

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          view: "simulator-view"
      }

      this.changeView = this.changeView.bind(this);
  }

  changeView(viewName) {
      console.log(viewName)
      this.setState({view: viewName});
  }

  render() {
        return (
          <div className={this.state.view}>
              <Header changeView={this.changeView} />
              <Simulator />
          </div>
      );
  }
}

export default App;
