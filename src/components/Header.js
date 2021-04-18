import React from 'react';
import './Header.css'

class Header extends React.Component {

    render() {
        return (
            <header>
                <div onClick={() => {this.props.changeView("simulator-view")}}>
                    Simulator
                </div>
                <div className="header-dropdown-container">
                    <span>Calculators</span>
                    <ul className="header-dropdown">
                        <li>Short Term Rental Deal Analysis</li>
                        <li>Long Term Rental Deal Analysis</li>
                        <li>Loan Calculator</li>
                        <li>Mortgage Calculator</li>
                        <li>Investment Calculator</li>
                    </ul>
                </div>
                <div>
                    Constants
                </div>
            </header>
        );
    }
}

export default Header;