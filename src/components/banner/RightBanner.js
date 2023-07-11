import React from 'react';
import { bannerImg } from '../../assest/images/index';

const RightBanner = () => {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
        <img className='w-[400px] h-[500px] z-10'
        src={bannerImg} 
        alt='bannerImg' />

        <div className='absolute bottom-0 w-[400px] h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex
        justify-center items-center'></div>
      </div>
  )
}

export default RightBanner;