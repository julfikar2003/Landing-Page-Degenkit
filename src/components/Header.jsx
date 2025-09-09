import React from 'react'
import logo from '../assets/png/logo.png'
const Header = () => {
  return (
    <div className='max-w-[1300px] mx-auto mt-[50px]'>
     <div className='parent '>
         <div><img src={logo} alt="" /></div>
      <div>
        <nav className='navber'>
        <ul className='flex gap-[48px]'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about" className='opacity-60'>About</a></li>
            <li><a href="#how" className='opacity-60'>How It Works</a></li>
            <li><a href="blog" className='opacity-60'>Blog</a></li>
            <li><a href="#teams" className='opacity-60'>Teams</a></li>
        </ul>
      </nav>
      </div>
      <div><button className='btn'>Get Started</button></div>
     </div>
    </div>
  )
}

export default Header
