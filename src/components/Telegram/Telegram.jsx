'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import telegram from "../../../public/Gallery/telegram.png" 

export default function Telegram() {
  return (
    <>
      <div className="fixed bottom-40 right-10 w-14 border-blue-400 rounded-full z-50">
        <Link href="https://t.me/niloydx01951600545">
          <Image className='border-blue-400 rounded-full' src={telegram} alt='Telegram'></Image>
        </Link>
      </div>
    </>
  )
}