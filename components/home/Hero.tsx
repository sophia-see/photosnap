"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import SectionDescription from '../SectionDescription';
import AccentLine from '../AccentLine';

export default function Hero() {
  const {currSize} = useDeviceSize();

  return (
    <div
      className={`
        flex flex-col 
      `}
    >
      <Image
        alt='man standing in front of a lake holding a camera'
        src={`/assets/home/${currSize}/create-and-share.jpg`}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-auto'
      />
      <div 
        className={`
          relative 
          w-full 
          bg-pure-black text-white 
          py-[72px] px-[33px]
          flex flex-col items-start
        `}
      >
        <AccentLine />
        <SectionTitle 
          text='Create and share your photo stories.' 
        />
        <SectionDescription 
          text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.' 
          className='mt-[16px] mb-[23px]'
        />
        <Button variant='secondary' mode='dark'>Get an invite</Button>
      </div>
    </div>
  )
}
