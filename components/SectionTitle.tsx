import React from 'react'

interface SectionTitleProps {
  text: string;
  className?: string;
}

export default function SectionTitle({text, className}: SectionTitleProps) {
  return (
    <div 
      className={`
        uppercase 
        font-bold 
        text-[32px] md:text-[40px]
        leading-[40px] md:leading-[48px]
        tracking-[3.33px] md:tracking-[4.17px]
        ${className || ""}
      `}
    >
      {text}
    </div>
  )
}
