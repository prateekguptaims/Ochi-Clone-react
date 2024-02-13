import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle - 180)
    })

  }, [])

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center relative 
      bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">

        <div className='absolute gap-10   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex'>
          <div className='w-[15vw] h-[15vw]  bg-white rounded-full flex items-center justify-center'>
            <div className='w-2/3 h-2/3 relative  items-center justify-center rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                <div className='w-10 h-10 rounded-full bg-zinc-100'>

                </div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw]  bg-white rounded-full flex items-center justify-center'>
            <div className='w-2/3 h-2/3 relative  items-center justify-center rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                <div className='w-10 h-10 rounded-full bg-zinc-100'>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Eyes