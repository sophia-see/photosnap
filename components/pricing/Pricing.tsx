"use client"

import React from 'react'
import PricingControls from './PricingControls';
import PricingCards from './PricingCards';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <div
      className={`
        mx-[30px] my-[64px] md:my-[112px] lg:mt-[120px] lg:mb-[160px]
        flex flex-col gap-10
      `}
    >
      <PricingControls isMonthly={isMonthly} setIsMonthly={setIsMonthly}/>
      <PricingCards isMonthly={isMonthly}/>
    </div>
  )
}
