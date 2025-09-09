import React from 'react'
import second from '../assets/png/second.png'
import has from '../assets/png/has.png'
const Power = () => {
    const powerOf = [
        {
            id:1,
            img:has,
            title: 'Exclusive Membership',
            description:'When Multiple Community Members Detect The Same Signal, It Gets Amplified And Prioritized In Your Feed For Maximum Confidence.',
        },
        {
            id:2,
            img:has,
            title: 'Governance Rights',
            description:'When Multiple Community Members Detect The Same Signal, It Gets  Amplified And Prioritized In Your Feed For Maximum Confidence.',
        },
        {
            id:3,
            img:has,
            title: 'Deflationary Burn',
            description:'When Multiple Community Members Detect The Same Signal, It Gets  Amplified And Prioritized In Your Feed For Maximum Confidence.',
        },
    ]
  return (
    <div className='max-w-[1308px] mx-auto mt-[206px]'>
      <h1 className='power'>The Power of $KIT</h1>
      <p className='power1 mt-[24px]'>$KIT powers the DegenKit ecosystem with exclusive access, governance rights, <br /> and a deflationary mechanism that increases value over time.</p>
        <div className='thePower flex justify-between mt-[48px]'>
        <div><img src={second} alt="" className='mt-[63px] ml-[54px] mb-[54px]' /></div>
        <div className="flex-1 flex flex-col justify-between ml-[72px]  rounded-[20px] 
  border-2 border-[#98B3D3] 
  bg-[radial-gradient(291.31%_101.81%_at_13.48%_1.68%,rgba(61,82,138,0.18)_0%,rgba(5,8,15,0.15)_100%)] 
  backdrop-blur-[17px] mt-[40px] mr-[40px]  ">
            {
                powerOf.map((item)=>(
                    <div key={item.id} className='px-[30px] py-[24px] border-b-[1.5px] border-[#98B3D3]'>
                        <div className='flex gap-[24px]'>
                        <img src={item.img} alt="" />
                        <h1 className='power2'>{item.title}</h1>
                        </div>
                        <p className='power3 mt-[16px] '>{item.description}</p>
                    </div>
                ))
            }
            <div className='hello flex justify-between px-[30px] py-[24px] border-b-[1.5px] border-[#98B3D3] mx-[47px]'>
                 <div >
                <h1 className='power3 ml-[44px]'>Verified Degens</h1>
                <p className='power4 ml-[30px] mt-[10px]'>2,500+</p>
            </div>
            <div>
                <h1 className='power3 ml-[44px]'>Signals Monthly</h1>
                <p className='power4 ml-[30px] mt-[10px]'> 50,000+</p>
            </div>
            </div>
            <div className='realtive'>
                <div className='box mt-[10px]'></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Power
