import React from 'react';
import './App.css';
import Simulator from "./components/Simulator";
import Header from "./components/Header";

class App extends React.Component {

  render() {
        return (
          <div className="App">
              <Header />
              <Simulator />
          </div>
      );
  }
}

export default App;
