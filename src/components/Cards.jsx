import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  bg-zinc-700 flex items-center px-32 justify-center gap-5  '>
        <div className="cardcontainer h-[50vh] w-1/2 ">
            <div className='relative card w-full h-full bg-[#004d43] rounded-lg flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32'  alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#cdea68] text-[#cdea68] font-semibold'>&copy; 2019-2022</button>
            </div>
            
        </div> 
        <div className="cardcontainer h-[50vh] w-1/2 flex gap-5  ">
            <div className='relative card w-full h-full bg-[#212121] rounded-lg flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"  alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-white text-white uppercase font-semibold'>Rating 5.0 on clutch</button>
            </div>
            <div className='relative card w-full h-full bg-[#212121] rounded-lg  flex items-center justify-center'>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-white text-white uppercase font-semibold'>Business Bootcamp Alumni</button>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
            
        </div>
        
    </div>
  )
}

export default Cards