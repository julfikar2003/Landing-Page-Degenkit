import React from 'react'
import alpha from '../assets/png/alpha.png'
import logo1 from '../assets/png/logo1.png'
import first from '../assets/png/first.png'
const Spot = () => {
  return (
    <div className='container max-w-[1300px] mx-auto mt-[54px] flex justify-between'>
     <div className='m-[80px]'>
         {/* <div className='flex gap-[10px] rounded-[13px] border border-[rgba(177,205,255,0.10)] bg-[linear-gradient(308deg,rgba(11,22,36,0.20)_21.52%,rgba(42,69,138,0.20)_81.08%)] shadow-[inset_0_0_6.2px_rgba(62,77,116,0.40)] backdrop-blur-[9.8px] px-[20px] py-[10px]'>
        <img src={alpha} alt="" />
        <p className='alpha'>Alpha Detection Platform</p>
        </div> */}
        <img src={logo1} alt="" />
        <h1 className='spot mt-[35px]'>Spot the Move  Before the <br />Market Reacts</h1>
        <p className='spot1 mt-[35px]'>Spot market trends before they break, position yourself early, <br />and capitalize while others are still catching up.</p>
        <div className='flex gap-[16px] mt-[35px]'>
        <button className='getStarted'>Get Started</button>
        <button className='learnMore'>Learn more</button>
        </div>
     </div>

    <div>
        <img src={first}   alt="" className='mr-[92px]'  />
    </div>
</div>
  )
}

export default Spot
