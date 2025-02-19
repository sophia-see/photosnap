"use client"

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Logo({isDarkMode = false}: {isDarkMode?: boolean}) {
  return (
    <Image
      src={`/assets/shared/${isDarkMode ? "dark-" : ""}logo.svg`}
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
