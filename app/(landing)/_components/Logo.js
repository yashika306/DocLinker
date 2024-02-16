import { Poppins } from 'next/font/google'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2 pl-2 pt-5' >
      <Image
        src="/CNMS.jpg"
        height="40"
        width="40"
        alt="Logo-light"
        className="dark:hidden"
      />
      <Image
        src="/Dark-hero1.png"
        height="40"
        width="40"
        alt="Logo-dark"
        className="hidden dark:block"
      />
    <span><p className={cn("font-semibold", font.className)}>CloudNote Pro</p></span>
    </div>
  )
}

export default Logo
