import React from 'react'
import third from '../assets/png/third.png'
const YouDont = () => {
  return (
    <div className='youDont max-w-[1300px] mx-auto mt-[117px]'>
      <h1 className='you mt-[70px]'>You don't follow alpha <br /> you detect behavior.</h1>
      <p className='join mt-[24px]'>Join the exclusive group of traders who see moves before they happen. Stop <br /> chasing pumps and start detecting intent.</p>
      <button className='Start mt-[32px] '>Start Tracking Now</button>
      <img src={third} alt="" />
    </div>
  )
}

export default YouDont
