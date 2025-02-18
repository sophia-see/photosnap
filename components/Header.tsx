"use client"

import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='w-full px-6 py-[28px] flex justify-between items-center'>
      <Logo />
      <Image
        src={"/assets/shared/mobile/menu.svg"}
        width={20}
        height={6}
        alt='burger icon'
        priority
      />
    </div>
  )
}
