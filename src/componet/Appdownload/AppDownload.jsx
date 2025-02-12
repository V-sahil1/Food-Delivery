import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    // app-download
    <div className='m-auto
    mt-[100px]   text-center ' id='app-download'>
        <p className='font-[650] text-[clamp(30px,3vw,40px)]'>For Better Experience Download <br /> Tomato App </p>
        {/* app-download-platform */}
        <div className='flex justify-center gap-[max(2vw,20px)] mt-[40px]'> 
            <img src={assets.play_store} alt="" className='w-[19%] w-max-[180px] cursor-pointer hover:scale-105 transition' />
            <img src={assets.app_store} alt=""  className='w-[19%]  w-max-[180px] cursor-pointer hover:scale-105 transition'/>
        </div>
    </div>
  )
}

export default AppDownload