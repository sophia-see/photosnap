"use client"

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Logo() {
  return (
    <Image
      src={"/assets/shared/logo.svg"}
      width={0}
      height={0}
      sizes='100vw'
      className='w-auto h-auto'
      alt='Photosnap logo'
      priority
      onClick={() => {
        redirect("/")
      }}
    />
  )
}
