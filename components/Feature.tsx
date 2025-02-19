"use client"

import Image from 'next/image';
import React from 'react'
import Button from './Button';
import Divider from './Divider';

interface FeatureProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
}

export default function Feature(props: FeatureProps) {
  const {
    imgSrc,
    imgAlt,
    name,
    description,
  } = props;

  return (
    <div 
      className={`
        w-full
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
