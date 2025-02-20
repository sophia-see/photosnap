import React from 'react'

interface PricingControlsProps {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PricingControls({isMonthly, setIsMonthly}: PricingControlsProps) {
  return (
    <div className='flex items-center gap-[32px] place-self-center'>
      <span className={`font-bold text-[18px] leading-[25px] ${isMonthly ? "" : "opacity-50"}`}>Monthly</span>
      <div className={`cursor-pointer relative w-[64px] h-[32px] rounded-[16px] ${isMonthly ? "bg-light-grey" : "bg-black"}`} onClick={() => setIsMonthly(curr => !curr)}>
        <div className={`absolute top-0 bottom-0 ${isMonthly ? "left-0 bg-black" : "right-0 bg-white"} mx-[4px] my-[4px] w-[24px] h-[24px] rounded-full`}>
        </div>
      </div>
      <span className={`font-bold text-[18px] leading-[25px] ${isMonthly ? "opacity-50" : ""}`}>Yearly</span>
    </div>
  )
}
