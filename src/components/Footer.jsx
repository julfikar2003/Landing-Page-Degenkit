import React from 'react'
import logo from '../assets/png/logo.png'
import socialLink1 from '../assets/png/socialLink1.png'
import socialLink2 from '../assets/png/socialLink2.png'
import socialLink3 from '../assets/png/socialLink3.png'
import socialLink4 from '../assets/png/socialLink4.png'
const Footer = () => {
    const socialLinks = [
        {
            id:1,
            img:socialLink1,
        },
        {
            id:2,
            img:socialLink2,
        },
        {
            id:3,
            img:socialLink3,
        },
        {
            id:4,
            img:socialLink4,
        },
    ]
  return (
    <div className='max-w-[1300px] mx-auto mt-[87px] flex justify-between mb-[116px]'>
      <div>
        <img src={logo} alt="" />
        <p className='spotMarket mt-[16px]'>Spot market trends before they break, <br /> position yourself early, and capitalize while <br /> others are still catching up.</p>
        <div className='flex gap-[14px] mt-[40px]'>
            {
                socialLinks.map((item)=>(
                    <img key={item.id} src={item.img} alt="" />
                ))
            }
        </div>
      </div>
      <div className='copyRight'>© 2025 Degenkit. All rights reserved.</div>
      <div className='flex gap-[47px]'>
        <div>
            <h1 className='info'>Info</h1>
            <p className='about mt-[16px]'>About</p>
            <p className='about mt-[12px]'>Platform</p>
            <p className='about mt-[54px]'>Privacy policy</p>
        </div>
        <div>
            <h1 className='info'>Community</h1>
            <p className='about mt-[16px]'>Blog</p>
            <p className='about mt-[12px]'>News & Media</p>
            <p className='about mt-[54px]'>Terms of Conditions</p>
        </div>
        <div>
            <h1 className='info'>Docs</h1>
            <p className='about mt-[16px]'>Careers</p>
            <p className='about mt-[12px]'>Brand Kit</p>
            <p className='about mt-[54px]'>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
