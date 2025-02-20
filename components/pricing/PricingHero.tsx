"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import SectionDescription from '../SectionDescription';
import AccentLine from '../AccentLine';

export default function PricingHero() {
  const {currSize} = useDeviceSize();

  return (
    <div
      className={`
        flex flex-col md:flex-row
      `}
    >
      <Image
        alt='man standing in front of a lake holding a camera'
        src={`/assets/pricing/${currSize}/hero.jpg`}
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
        <AccentLine className={`absolute top-0 md:w-[6px] md:h-[144px] md:left-0 md:top-1/2 md:-translate-y-1/2`}/>
        <SectionTitle 
          text='Pricing' 
        />
        <SectionDescription 
          text='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.' 
          className='mt-[16px] md:mt-[21px]'
        />
      </div>
    </div>
  )
}
