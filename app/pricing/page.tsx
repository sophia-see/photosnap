import Action from '@/components/Action'
import Pricing from '@/components/pricing/Pricing'
import PricingComparison from '@/components/pricing/PricingComparison'
import PricingHero from '@/components/pricing/PricingHero'
import React from 'react'

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <Pricing />
      <PricingComparison />
      <Action />
    </div>
  )
}
