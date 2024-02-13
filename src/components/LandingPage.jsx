import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
    
    return (
        <div className='w-full bg-zinc-900  h-screen pt-1' data-scroll data-scroll-speed="-0.3">
            <div className="textstructure mt-52 px-20" >
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <>
                            <div className="masker font-['Founders_Grotesk_X-Condensed'] overflow-hidden" >
                                <div className="w-fit flex items-center">
                                    {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[9vw] h-[5.3vw] bg-red-700 relative rounded-md mr-[1vw]' >

                                    </motion.div>)}

                                    <h1 className='uppercase text-[8vw] font-["Founders_Grotesk_X-Condensed"]
                 leading-[7vw] font-bold' key={index}>{item}</h1>
                                </div>
                            </div>
                        </>
                    )
                })}



            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["For Public and private companies", "From the first pitchto IPO"].map((item, i) => {
                    return (
                        <>
                            <p className='text-md font-light tracking-tight leading-none' key={i}>{item}</p>
                        </>
                    )
                })}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-md uppercase '>Start the project</div>
                    <div className='w-10 h-10 border-[1px] flex items-center justify-center rounded-full border-zinc-500'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage