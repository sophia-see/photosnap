"use client"

import React from 'react'
import Logo from './Logo'
import Image from 'next/image'
import useDeviceSize from '@/hooks/use-device-size'
import Divider from './Divider'
import Button from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  {
    name: "Stories",
    path: "/stories"
  },
  {
    name: "Features",
    path: "/features"
  },
  {
    name: "Pricing",
    path: "/pricing"
  },
]

function NavLinks ({className}: {className?: string}) {
  return (
    <ul className={`hidden md:flex flex-row gap-[37px] justify-center items-center ${className || ""}`}>
      {LINKS.map(link => (
        <Link href={link.path} className='py-[10px] lg:py-0'>
          <li className='uppercase font-bold text-[12px] tracking-[2px] hover:opacity-30 transition delay-50'>
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default function Header() {
  const pathname = usePathname();
  const { isMobile } = useDeviceSize();
  const [isOpen, setIsOpen] = React.useState(false);
  const headerMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname])

  React.useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  
    return () => {
      document.body.style.overflow = ""; // Reset on unmount
    };
  }, [isOpen, isMobile]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerMenuRef.current && !headerMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative h-fit' ref={headerMenuRef}>
      <div className='z-10 w-full px-6 py-[28px] md:px-10 lg:px-[120px] flex justify-between items-center text-black'>
        <Logo />
        <Image
          src={`/assets/shared/mobile/${isOpen ? "close" : "menu"}.svg`}
          width={20}
          height={20}
          className='w-auto h-auto md:hidden'
          sizes='100vw'
          alt={`${isOpen ? "close" : "menu"} icon`}
          priority
          onClick={() => {
            setIsOpen(curr => !curr)
          }}
        />
        <NavLinks />
        <Button className='hidden md:block'>Get an invite</Button>
      </div>
      {isOpen && (
          <div className='md:hidden absolute bottom-0 left-0 right-0 translate-y-full z-10 h-screen bg-[rgba(0,0,0,.5)]'>
            <div className='p-[32px] w-full bg-white opacity-100 flex flex-col items-center text-center justify-center gap-5'>
              <ul className='w-full flex flex-col items-center text-center justify-center'>
                <Link className='w-full h-full' href={"/stories"}>
                  <li className='w-full py-[10px]'>
                      Stories
                  </li>
                </Link>
                <Link className='w-full h-full' href={"/features"}>
                  <li className='w-full py-[10px]'>
                      Features
                  </li>
                </Link>
                <Link className='w-full h-full' href={"/pricing"}>
                  <li className='w-full py-[10px]'>
                      Pricing
                  </li>
                </Link>
                <Divider className='bg-black mt-[10px] mb-[20px]'/> 
                <Button className='w-full'>Get an invite</Button>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}
