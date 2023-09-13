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

