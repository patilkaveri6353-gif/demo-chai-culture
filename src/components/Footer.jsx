import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
     <div className='text-[#6B4F3F] flex gap-4 mt-6'>
            <TiSocialInstagram size={30} />
            <TiSocialTwitter size={30} />
            <SlSocialLinkedin size={25} />
      </div>    
    <footer className="text-sm text-[#6B4F3F]">
      © 2026 Chai Culture · All rights reserved
    </footer>
    </div>
  )
}

export default Footer
