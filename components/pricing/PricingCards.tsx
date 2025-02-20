import React from 'react'
import Button from '../Button';
import AccentLine from '../AccentLine';

const PRICING = [
  {
    name: "Basic",
    description: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: 19,
  },
  {
    name: "Pro",
    description: "More advanced features available. Recommended for photography veterans and professionals.",
    price: 39,
  },
  {
    name: "Business",
    description: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: 99,
  },
]

interface CardProps {
  name: string;
  description: string;
  price: number;
  isHighlighted: boolean;
  isMonthly: boolean;
}

function Card({name, description, price, isHighlighted, isMonthly}: CardProps) {
  return (
    <div 
      className={`
        relative
        ${isHighlighted ? "bg-black text-white" : " bg-[#F5F5F5] text-black"}
    
      `}
    >
      {isHighlighted && (
        <AccentLine className='w-full'/>
      )}
      <div 
        className={`
          pt-[56px] pb-[40px] px-[22px] md:max-md:p-10 ${isHighlighted ? "lg:pt-[88px] lg:pb-[71px]" : "lg:pt-[56px]"}
          flex flex-col gap-10 items-center
        `}
      >
        <div className='w-full flex flex-row justify-between'>
          <div className='flex flex-col gap-10 items-center md:max-md:items-start md:max-md:gap-[32px] md:max-md:max-w-[270px]'>
            <div className='flex flex-col text-center md:max-md:text-start gap-[18px]'>
              <div className='font-bold text-[24px] leading-[25px]'>{name}</div>
              <div className='opacity-60 text-[15px] leading-[25px]'>{description}</div>
            </div>
            <div className='flex flex-col text-center md:max-md:hidden'>
              <div className='font-bold text-[40px] leading-[48px] tracking-[4.17px]'>${(isMonthly ? price : price * 10).toFixed(2)}</div>
              <div className='opacity-60 text-[15px] leading-[25px]'>per {isMonthly ? "month" : "year"}</div>
            </div>
            <Button mode={isHighlighted ? "dark" : "light"} className='w-full'>Pick Plan</Button>
          </div>
          <div className='hidden md:max-md:flex flex-col text-end'>
            <div className='font-bold text-[40px] leading-[48px] tracking-[4.17px]'>${(isMonthly ? price : price * 10).toFixed(2)}</div>
            <div className='opacity-60 text-[15px] leading-[25px]'>per {isMonthly ? "month" : "year"}</div>
          </div>
        </div>
      </div>

    </div>
  )
}

interface PricingCardsProps {
  isMonthly: boolean;
}

export default function PricingCards({isMonthly}: PricingCardsProps) {
  return (
    <div className='w-full flex flex-col gap-6 lg:flex-row lg:gap-[30px] lg:items-center lg:max-w-[1100px] lg:mx-auto'>
      {PRICING.map(item => {
        const isHighlighted = item.name == "Pro"
        return (
          <Card 
            name={item.name}
            description={item.description}
            price={item.price}
            isMonthly={isMonthly}
            isHighlighted={isHighlighted}
            key={item.name}
          />
        )
      })}
    </div>
  )
}
