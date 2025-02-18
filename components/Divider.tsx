import React from 'react'

export default function Divider({className}: {className?: string}) {
  return (
    <div
      className={`
        w-full h-[1px] bg-white opacity-25
        ${className || ""}
      `}
    >
      
    </div>
  )
}
