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
                        <li onClick={() => {this.props.changeView("short-term-rental-calculator-view")}}>Short Term Rental Calculator</li>
                        <li onClick={() => {this.props.changeView("long-term-rental-calculator-view")}}>Long Term Rental Calculator</li>
                        <li onClick={() => {this.props.changeView("loan-calculator-view")}}>Loan Calculator</li>
                        <li onClick={() => {this.props.changeView("mortgage-calculator-view")}}>Mortgage Calculator</li>
                        <li onClick={() => {this.props.changeView("investment-calculator-view")}}>Investment Calculator</li>
                    </ul>
                </div>
                <div onClick={() => {this.props.changeView("investing-constants-view")}}>
                    Investing Constants
                </div>
            </header>
        );
    }
}

export default Header;