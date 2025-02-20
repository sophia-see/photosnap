import React from 'react'

interface AccentLineProps {
  className?: string;
}

export default function AccentLine({className}: AccentLineProps) {
  return (
    <div 
      className={`
        h-[6px] w-[128px]
        bg-gradient-to-tr from-pink via-yellow to-violet
        ${className || ""}
      `}
    >
    </div>
  )
}
