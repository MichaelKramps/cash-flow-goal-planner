import React from 'react';
import './App.css';
import Simulator from "./components/Simulator";

class App extends React.Component {

  render() {
        return (
          <div className="App">
              <header className="header">header</header>
              <Simulator />
          </div>
      );
  }
}

export default App;
