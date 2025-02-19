"use client"

import React from 'react'
import Button from './Button'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'

const SOCIALS = [
  "facebook",
  "youtube",
  "twitter",
  "pinterest",
  "instagram"
]

function SocialMediaLinks () {
  return (
    <ul className='flex gap-[13px] mt-[32px] mb-[49px] md:order-last md:mb-0'>
      {SOCIALS.map(social => (
        <li key={social}>
          <Image
            src={`/assets/shared/${social}.svg`}
            alt={`${social} icon`}
            width={20}
            height={20}
            className="cursor-pointer filter invert brightness-0 transition duration-300 hover:filter-none"
          />
        </li>
      ))}
    </ul>
  )
}

const LINKS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Stories",
    path: "/stories"
  },
  {
    name: "Features",
    path: "/features"
  },
  {
    name: "Pricing",
    path: "/pricing"
  },
]

function NavLinks ({className}: {className?: string}) {
  return (
    <ul className={`flex flex-col justify-center items-center md:flex-row md:gap-[26px] md:my-[32px] ${className || ""}`}>
      {LINKS.map(link => (
        <Link href={link.path} className='py-[10px] lg:py-0'>
          <li className='uppercase font-bold text-[12px] tracking-[2px]'>
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <div className='w-full h-full py-[56px] px-[32px] md:py-[64px] md:px-[40px] lg:px-[80px] xl:px-[120px] bg-black text-white flex flex-col items-center gap-[120px] md:gap-0 md:flex-row md:justify-between md:items-stretch'>
      <div className='flex gap-[110px]'>
        <div className='w-fit flex flex-col items-center justify-center md:items-start lg:justify-between'>
          <Logo isDarkMode={true}/>
          <SocialMediaLinks />
          <NavLinks className={`lg:hidden`}/>
        </div>
          <NavLinks className={`hidden lg:my-0 lg:flex lg:flex-col lg:gap-[20px] lg:items-start`}/>
      </div>

      <div className='w-full md:flex-1 flex flex-col gap-9 justify-center items-center md:justify-between md:items-end'>
        <Button variant='secondary' mode='dark'>Get an invite</Button>
        <div className='text-white opacity-[50.25%] text-[15px]'>
          Copyright 2019. All Rights Reserved
        </div>
      </div>
    </div>
  )
}
