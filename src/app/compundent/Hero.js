import React from 'react'

export const Hero = ({Text1='hello' ,Text2='wait to start the webiste'}) => {
  return (
    <section className='mt-20'>
     <div className="flex flex-col  text-center font-semibold gap-2">
    <h1 className="text-3xl" style={{textShadow: '1px 2px 3px rgb(54, 0, 0,.2)'}}>{Text1}</h1>
    <h2 className="text-white/80">{Text2}</h2>
  </div>

    </section>
   
  )
}
