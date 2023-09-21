import React from 'react';

const DonateTabMoney = ({ product, onPriceClick }) => {
  if (!product) {
    return null;
  }

  const { price } = product;

  return (
    <div className='py-4 px-8  mx-auto border hover:bg-yellow-300 border-slate-300'>
      <button onClick={() => onPriceClick(price)}>
        $<span>{price}</span>
      </button>
    </div>
  );
};

export default DonateTabMoney;