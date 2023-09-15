'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsappAPK() {

  return (
      <FloatingWhatsApp 
      phoneNumber="+880-01752710189"
      accountName="AirAssists"
      avatar="https://i.ibb.co/4PHQVY8/heart.png"
      placeholder="text your Massage"
      style={{ backgroundColor: 'green', color: 'black' }}
      />
  )
}

// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import whatsapp from "../../../public/Gallery/whats-appgif.gif"


// export default function WhatsAppOthersContact() {

//   return (
//       <>
//       <div className="fixed  bottom-20 right-10 w-12 border-green-400 rounded-full z-50">
//         <Link href="https://wa.me/88001951600545"> 
//          <Image className='border-green-400 rounded-full' src={whatsapp} alt='pic not found'></Image>
//         </Link>
//       </div>
//       </>
    
//   )
// }