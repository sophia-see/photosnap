import React from 'react'
import Divider from '../Divider'
import Check from './Check'

const FEATURES = [
  {
    name: "Unlimited story posting",
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: "Unlimited photo upload",
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: "Embedding custom content",
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: "Customize metadata",
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: "Advanced metrics",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "Photo downloads",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "Search engine indexing",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "Custom analytics",
    basic: false,
    pro: false,
    business: true,
  },
]

function Label({text, className}: {text: string, className?: string}) {
  return (
    <div className={`uppercase font-bold text-[12px] tracking-[2px] ${className || ""}`}>{text}</div>
  )
}

export default function PricingComparison() {
  return (
    <div className='flex flex-col gap-[64px] mb-[64px] md:mb-[112px] lg:mb-[160px]'>
      <div className='hidden md:block uppercase font-bold text-[40px] leading-[48px] tracking-[4.17px] text-center'>Compare</div>
      <div className='flex flex-col gap-[23px] mx-[28px] md:ml-[40px] lg:max-w-[731px] lg:mx-auto'>
        <div className='flex flex-row justify-between md:mx-[24px]'>
          <Label text='The Features' />
          <div className='hidden md:flex'>
            <Label text='Basic' className='w-[140px] text-center'/>
            <Label text='Pro' className='w-[140px] text-center'/>
            <Label text='Business' className='w-[140px] text-center'/>  
          </div>
        </div>
        <Divider className='bg-black'/>
        <div className='flex flex-col gap-[23.5px]'>
          {FEATURES.map((feature) => {
            return (
              <div className='flex flex-col gap-6' key={feature.name}>
                <div className='flex flex-col gap-4 md:flex-row md:justify-between md:ml-[24px]'>
                  <Label text={feature.name} />
                  <div className='flex gap-[68px] md:hidden'>
                    <div className='flex flex-col gap-2'>
                      <Label text="Basic" className='opacity-50'/>
                      {feature.basic && <Check />}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Label text="Pro" className='opacity-50'/>
                      {feature.pro && <Check />}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Label text="Business" className='opacity-50'/>
                      {feature.business && <Check />}
                    </div>
                  </div>
                  <div className='hidden md:flex justify-center'>
                    {feature.basic ? <Check className='w-[140px] place-items-center'/> : <></>}
                    {feature.pro ? <Check className='w-[140px] place-items-center'/> : <></>}
                    {feature.business ? <Check className='w-[140px] place-items-center'/> : <></>}
                  </div>
                </div>
                <Divider className='bg-light-grey'/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
