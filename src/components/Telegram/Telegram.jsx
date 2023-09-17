


import React from 'react';
import telegram from '../../../public/Gallery/telegram.png';
import Image from 'next/image';

export default function Telegram() {
  return (
    <>
      <div className="fixed bottom-40 right-10 w-14 border-blue-400 rounded-full z-50">
        <a href="https://t.me/niloydx01951600545" target="_blank" rel="noopener noreferrer">
          <Image className="border-blue-400 rounded-full" src={telegram} alt="Telegram" />
        </a>
      </div>
    </>
  );
}
