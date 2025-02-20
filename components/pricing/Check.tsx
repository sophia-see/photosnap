"use client"

import Image from 'next/image'
import React from 'react'

export default function Check({className}: {className?: string}) {
  return (
    <div className={className || ""}>
      <Image
        src={`/assets/pricing/desktop/check.svg`}
        width={16}
        height={12}
        alt='check icon'
      />
    </div>
  )
}
