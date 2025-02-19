"use client"

import Image from 'next/image';
import React from 'react'
import SectionTitle from '../SectionTitle';
import SectionDescription from '../SectionDescription';
import Button from '../Button';
import useDeviceSize from '@/hooks/use-device-size';

interface FeatureSectionProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  imgFirst?: boolean;
}

function AboutSection ({imgSrc, imgAlt, title, description, imgFirst = true}: FeatureSectionProps) {
  return (
    <div
      className={`
        flex flex-col 
      `}
    >
      <Image
        alt={imgAlt}
        src={imgSrc}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full h-auto'
      />
      <div 
        className={`
          w-full 
          bg-white text-pure-black 
          py-[72px] px-[33px]
          flex flex-col items-start
        `}
      >
        <SectionTitle 
          text={title} 
        />
        <SectionDescription 
          text={description} 
          className='mt-[16px] mb-[23px]'
        />
        <Button variant='secondary' mode='light'>View the stories</Button>
      </div>
    </div>
  )
}

export default function About() {
  const {currSize} = useDeviceSize();

  return (
    <div className='w-full flex flex-col'>
      <AboutSection
        imgSrc={`/assets/home/${currSize}/beautiful-stories.jpg`}
        imgAlt='laptop with an edited beautiful photo'
        title='Beautiful Stories Every Time'
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      />
      <AboutSection
        imgSrc={`/assets/home/${currSize}/designed-for-everyone.jpg`}
        imgAlt='man holding a powerful camera'
        title='Designed for everyone'
        description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      />
    </div>
  )
}
