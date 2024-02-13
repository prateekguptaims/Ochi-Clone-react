import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
     
    return (
        <div className='bg-zinc-900' data-scroll data-scroll-section data-scroll-speed=".1" >

            <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
                <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden pr-10">
                    <motion.h1 animate={{x:"-100%"}}  initial={{x:0}}  transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 tracking-tight' >we are ochi .</motion.h1>
                    <motion.h1 animate={{x:"-100%"}} initial={{x:0}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 tracking-tight text-red-200' >we are ochi .</motion.h1>

                </div>
            </div>
        </div>
    )
}

export default Marque