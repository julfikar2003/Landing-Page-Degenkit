import React from 'react'
import Line1 from '../assets/png/line1.png'
import Line2 from '../assets/png/line2.png'
const Signal = () => {
  return (
    <div className='max-w-[1300px] mx-auto mt-[107px] flex justify-between'>
      <div><img src={Line1} alt="" className='mt-[68px]' /></div>
      <div className='father'>
        <p className='signal'>Signals Tracked Daily</p>
        <h1 className='signal1'>10,000+</h1>
      </div>
      <div className='father'>
        <p className='signal'>Detection accuracy</p>
        <h1 className='signal1'>95%</h1>
      </div>
      <div className='father'>
        <p className='signal'>Automated monitoring</p>
        <h1 className='signal1'>24/7</h1>
      </div>
      <div><img src={Line2} alt="" className='mt-[68px]'/></div>
    </div>
  )
}

export default Signal
