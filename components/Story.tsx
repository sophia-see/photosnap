"use client"

import Image from 'next/image';
import React from 'react'
import Button from './Button';
import Divider from './Divider';

interface StoryProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  author: string;
  date?: string;
  isHomePage?: boolean;
}

export default function Story(props: StoryProps) {
  const {
    imgSrc,
    imgAlt,
    name,
    author,
    date,
    isHomePage = false
  } = props;

  return (
    <div 
      className={`
        relative
        h-[375px] md:h-[500px]
        w-full md:w-1/2 lg:w-1/4
        transition duration-300
        lg:hover:translate-y-[-10%]
        cursor-pointer
      `}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full object-cover object-center'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,.6612)]'>

      </div>
      <div
        className={`
          absolute bottom-0 left-0 right-0
          ${isHomePage ? "mb-10 mx-[33px]" : ""}
          text-white
        `}
      >
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-[18px] leading-[25px]'>{name}</div> 
          <div className='text-[13px]'>by {author}</div> 
        </div>
        <Divider className='mt-[16px] mb-[20px]'/>
        <Button variant='secondary' mode='dark' className='w-full justify-between'>Read Story</Button>
      </div>
    </div>
  )
}
