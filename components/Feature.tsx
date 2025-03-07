"use client"

import Image from 'next/image';
import React from 'react'

interface FeatureProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
  isHomePage?: boolean;
}

export default function Feature(props: FeatureProps) {
  const {
    imgSrc,
    imgAlt,
    name,
    description,
    isHomePage = false
  } = props;

  return (
    <div 
      className={`
        w-full ${isHomePage ? "md:max-w-[457px] lg:max-w-[350px]" : "md:w-[340px] 2xl:w-[350px]"}
        flex flex-col gap-[48px] items-center justify-center
        
      `}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={0}
        height={0}
        sizes='100vw'
        className='w-auto h-auto'
      />
      <div className='flex flex-col gap-4 items-center justify-center text-black text-center'>
        <div className='font-bold text-[18px] leading-[25px]'>{name}</div>
        <div className='text-[15px] leading-[25px] opacity-60'>{description}</div>
      </div>
    </div>
  )
}
