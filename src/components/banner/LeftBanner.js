import React from 'react'
import { useTypewriter, Cursor} from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiHtml5, SiJavascript, SiCss3 } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["FrontEnd Developer.", "UI/UX Designer.", "Professional Coder."],
        loop: true,
        typeSpeed:20,
        deleteSpeed: 10,
        delaySpeed:2000,
      });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {" "}
            <span className='text-designColor capitalize'>Anshu Jha</span>
          </h1>
          <h2 className='text-4xl font-bold text-white'>
            a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle=" "
            cursorColor='#ff014f'
            />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
              I am front end developer. i used many language to develop the
              good UI/UX like javascript react css tailwind html many more.
            </p>
        </div>
        <div className='flex justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
          </h2>
          <div className='flex gap-2'>
            <span className='bannerIcon'>
              <FaFacebookF />
            </span>
            <span className='bannerIcon'>
              <FaInstagram />
            </span>
            <span className='bannerIcon'>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>
            BEST SKILL ON
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <SiReact />
            </span>
            <span className='bannerIcon'>
              <SiTailwindcss />
            </span>
            <span className='bannerIcon'>
              <SiJavascript />
            </span>
            <span className='bannerIcon'>
              <SiHtml5 />
            </span>
            <span className='bannerIcon'>
              <SiCss3 />
            </span>
          </div>
          </div>
        </div>
      </div>
  )
}

export default LeftBanner