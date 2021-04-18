import React from 'react';
import './Header.css'

class Header extends React.Component {

    render() {
        return (
            <header>
                <div>
                    Calculators
                </div>
                <div>
                    Constants
                </div>
                <div>
                    About This Tool
                </div>
            </header>
        );
    }
}

export default Header;