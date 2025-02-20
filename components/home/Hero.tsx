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
        flex flex-col md:flex-row
      `}
    >
      <Image
        alt='man standing in front of a lake holding a camera'
        src={`/assets/home/${currSize}/create-and-share.jpg`}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-auto object-cover object-center md:max-h-[650px]'
        priority
      />
      <div 
        className={`
          md:order-first md:flex-shrink-0
          relative
          w-full md:w-[495px] lg:w-[565px] xl:w-[610px] 2xl:w-[40%]
          md:max-h-[650px]
          bg-pure-black text-white 
          py-[72px] px-[33px] md:py-[173px] md:px-[54px] lg:px-[72px] xl:px-[112px]
          flex flex-col items-start
        `}
      >
        <AccentLine className={`absolute top-0 md:w-[6px] md:h-[304px] md:left-0 md:translate-y-1/2`}/>
        <SectionTitle 
          text='Create and share your photo stories.' 
        />
        <SectionDescription 
          text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.' 
          className='mt-[16px] mb-[23px] md:mt-[21px] md:mb-[48px]'
        />
        <Button variant='secondary' mode='dark'>Get an invite</Button>
      </div>
    </div>
  )
}
