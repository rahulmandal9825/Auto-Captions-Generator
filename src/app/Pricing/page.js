import React from 'react'
import { Hero } from '../compundent/Hero'

const Pricing = () => {
  return (
    <div>
     <Hero Text1={"Check out our Pricing"} Text2={"Our pricing is very simple"} />
     <div className='flex w-full justify-center mt-10 '>
        <div className="bg-white text-black  w-[300px] text-center p-5 rounded-lg shadow-lg">
        <h3 className=' font-bold text-2xl'>Free</h3>
        <h3 className=' font-semibold text-black/70'>Free for Now</h3>
     </div>
     </div>
     
    </div>
  )
}

export default Pricing
