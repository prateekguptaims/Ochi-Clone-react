import { motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap'
import React, { useState } from 'react'

function Featured() {
   const cards= [useAnimation(),useAnimation()]
const handleover=(index)=>{
cards[index].start({y:"0"})
}
const handleoverend=(index)=>{
cards[index].start({y:"100%"})
}

    const [isHovering, setHovering] = useState(false)
    console.log(isHovering)
    return (
        <div className='w-full bg-zinc-800 py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight '>Featured Projects</h1>


            </div>
            <div className='px-20 p-20'>
                <div className="cards w-full flex gap-20 mt-10">
                    <div className='headings absolute bg-red-500'>

                    </div>
                    <motion.div onHoverStart={()=>handleover(0)} onHoverEnd={()=>handleoverend(0)} className="cardcontainer w-1/2 h-[75vh] relative  rounded-lg "  >

                        <div className="card w-full h-full rounded-lg overflow-hidden">
                            <h1 className='absolute text-[#cdea68] z-[9] left-full
                      text-9xl mb-10 leading-none tracking-tight font-["Founders_Grotesk_X-Condensed"] 
                      font-semibold  top-1/2 -translate-x-1/2 overflow-hidden flex'>
                                {
                                    "Zone".split("").map((e, index) => <motion.span className='inline-block ' initial={{y:"100%"}} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}>{e}</motion.span>)
                                }
                            </h1>
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                alt="" className='w-full h-full bg-cover' />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handleover(1)} onHoverEnd={()=>handleoverend(1)} className="cardcontainer w-1/2 h-[75vh] rounded-lg relative" >
                        <div className="card w-full h-full overflow-hidden rounded-xl">
                            <h1 className='absolute text-[#cdea68] z-[9] right-full
                      text-9xl mb-10 leading-none tracking-tight font-["Founders_Grotesk_X-Condensed"] 
                      font-semibold  top-1/2 translate-x-1/2 flex overflow-hidden'>
                                {
                                    "Vise".split("").map((e, index) => <motion.span className='inline-block ' initial={{y:"100%"}} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}>{e}</motion.span>)
                                }
                            </h1>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                alt="" className='w-full h-full bg-cover' />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Featured 