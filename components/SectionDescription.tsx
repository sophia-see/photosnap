import React from 'react'

interface SectionDescriptionProps {
  text: string;
  className?: string;
}

export default function SectionDescription({text, className}: SectionDescriptionProps) {
  return (
    <div className={`text-[15px] leading-[25px] opacity-60 ${className || ""}`}>
      {text}
    </div>
  )
}
