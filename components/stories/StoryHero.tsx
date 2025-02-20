"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import SectionDescription from '../SectionDescription';

interface StoryDetailsProps {
  date: string;
  author: string;
}

function StoryDetails({date, author}: StoryDetailsProps) {
  return (
    <div className='flex items-center gap-[9px] text-white text-[13px]'>
      <span className='opacity-75'>{date}</span>
      <span className=''>by {author}</span>
    </div>
  )
}

export default function StoryHero() {
  const {currSize} = useDeviceSize();

  return (
    <div
      className={`
        relative
        w-full md:h-[650px]
        flex flex-col md:flex-row
      `}
    >
      <Image
        alt='mountain under the moon'
        src={`/assets/stories/${currSize}/moon-of-appalacia.jpg`}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-auto object-cover object-center md:max-h-[650px]'
        priority
      />
      <div 
        className={`
          md:absolute
          md:order-first md:flex-shrink-0
          w-full md:w-[387px] 2xl:w-[40%]
          md:max-h-[650px]
          bg-pure-black text-white md:bg-transparent
          py-[48px] px-[28px] md:px-0 md:py-[122px] md:mx-[39px] lg:mx-[112px]
          flex flex-col items-start
        `}
      >
        <div className='uppercase font-bold text-[12px] tracking-[2px] mb-[16px] md:mb-[24px]'>Last month's featured story</div>
        <SectionTitle 
          text='Hazy Full Moon of Appalachia' 
          className='mb-[56px] md:mb-[16px]'
        />
        <StoryDetails date='March 2nd 2020' author='John Appleseed' />
        <SectionDescription 
          text='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.' 
          className='my-[24px] md:mt-[21px] md:mb-[48px]'
        />
        <Button variant='secondary' mode='dark' className='group'>
          Read the story
          <div 
            className={`
              opacity-0
              lg:group-hover:opacity-50 
              transition duration-300
              absolute bottom-0 lg:left-[-112px] lg:w-[720px] lg:h-[650px] 
              bg-[radial-gradient(circle_at_0%_100%,_rgba(255,197,147,0.6)_0%,_rgba(188,113,152,0.2)_50%,_rgba(90,119,255,0)_80%)] 
              pointer-events-none
            `}
            >
          </div>
        </Button>
      </div>
    </div>
  )
}
