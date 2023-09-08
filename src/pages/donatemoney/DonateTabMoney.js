import React from 'react';

const DonateTabMoney = ({ product, onPriceClick }) => {
  if (!product) {
    return null; 
  }

  const { price } = product;
  console.log(price);

  return (
    <div className='py-4 px-8 mx-auto border border-slate-300'>
      <button onClick={() => onPriceClick(price)}>
        $<span>{price}</span>
      </button>
    </div>
  );
};

export default DonateTabMoney;