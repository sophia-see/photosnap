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
    <ul className='flex gap-[13px] mt-[32px] mb-[49px]'>
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

function NavLinks () {
  return (
    <ul className='flex flex-col justify-center items-center'>
      {LINKS.map(link => (
        <Link href={link.path} className='py-[10px]'>
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
    <div className='w-full py-[56px] px-[32px] bg-black text-white flex flex-col items-center gap-[120px] md:flex-row md:justify-between'>
      <div className='w-full flex flex-col items-center justify-center'>
        <Logo isDarkMode={true}/>
        <SocialMediaLinks />
        <NavLinks />
      </div>

      <div className='w-full flex flex-col md:justify-between gap-9 justify-center items-center'>
        <Button variant='secondary' mode='dark'>Get an invite</Button>
        <div className='text-white opacity-[50.25%] text-[15px]'>
          Copyright 2019. All Rights Reserved
        </div>
      </div>
    </div>
  )
}
