"use client"

import useDeviceSize from '@/hooks/use-device-size'
import Image from 'next/image';
import React from 'react'
import AccentLine from './AccentLine';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Action() {
  const { currSize } = useDeviceSize();
  return (
    <div className='relative w-full h-[288px] md:h-[280px]'>
      <Image
        src={`/assets/shared/${currSize}/bg-beta.jpg`}
        alt={"background"}
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full object-cover object-center'
      />

      <AccentLine className='absolute top-0 bottom-0 mx-[33px] md:mx-0 md:w-[6px] md:h-full' />
      <div className='absolute top-0 bottom-0 left-0 right-0 mx-[33px] md:mx-[40px] lg:mx-[80px] xl:mx-[120px] my-[64px] md:my-[68px] text-white flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'>
        <SectionTitle text='We’re in beta. Get your invite today!' className='md:max-w-[400px]'/>
        <Button mode='dark' variant='secondary'>Get an invite</Button>
      </div>
    </div>
  )
}
