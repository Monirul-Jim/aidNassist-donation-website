import React from 'react';
import DonateTabMoney from './DonateTabMoney';

const DonateChildren = ({item, onPriceClick}) => {
    return (
        <div className="grid grid-cols-3">
        {
            item.map(product=><DonateTabMoney key={product._id}  onPriceClick={onPriceClick} product={product}></DonateTabMoney>)
        }
    </div>
    );
};

export default DonateChildren;