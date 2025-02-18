import React from 'react'

interface SectionTitleProps {
  text: string;
  className?: string;
}

export default function SectionTitle({text, className}: SectionTitleProps) {
  return (
    <div className={`uppercase font-bold text-[32px] leading-[40px] tracking-[3.33px] ${className || ""}`}>
      {text}
    </div>
  )
}
