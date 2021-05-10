import React from 'react';
import ShortTermRentalCalculator from "../../Calculators/ShortTermRentalCalculator";

class ShortTermRentalAsset extends React.Component {


    render () {
        return (
            <div className='short-term-rental-asset'>
                <ShortTermRentalCalculator />
            </div>
        )
    }
}

export default ShortTermRentalAsset;