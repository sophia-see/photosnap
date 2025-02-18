import React from 'react'

interface AccentLineProps {
  className?: string;
}

export default function AccentLine({className}: AccentLineProps) {
  return (
    <div 
      className={`
        absolute top-0 
        h-[6px] w-[128px]
        bg-gradient-to-tr from-pink via-yellow to-violet
        ${className || ""}
      `}
    >
    </div>
  )
}
