import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

function About() {
    // #cdea68
    return (
        <div className='w-full py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl p-20 '>
            <h1 className=' font-["Neue_Montreal"] text-[4vw] leading-[3.5vw]  text-black font-light '>Ochi is a strategic partner for fast-growing tech
                businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full border-t-[1px] border-[#000] mt-20 pt-10 flex gap-5'>
                <div className='w-1/2 '>
                    <h1 className='text-black text-7xl font-["Neue_Montreal"] text-bolder'>Our approach:</h1>
                    <button className='uppercase flex gap-10 items-center bg-zinc-900 mt-10 font-["Neue_Montreal"] text-white rounded-full px-10 py-6 text-3xl text-wrap'> Read More
                    <div className='w-2 h-2  flex rounded-full bg-zinc-100'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUp />
                        </span>
                    </div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] gap-5  rounded-3xl ' >
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" srcset="" className='rounded-3xl bg-cover bg-center' />
 
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default About