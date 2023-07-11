import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>

      <Title title='Features' des="What I do" />
      <div className='grid grid-cols-3 gap-20'>

        <Card 
        title="Software Stratagy"
        des="Accelerate digital delivery and solve complex software problems with 
        expert advisory, consulting and support services from e-Core."
        icon={<FaBars />}
        />

        <Card
        title="App Development"
        des="Mobile application development is the process of making software for 
        smartphones, tablets and digital assistants, most commonly for the 
        Android and iOS operating systems." 
        icon={<FaMobile />}
        />

        <Card 
        title="Website Development"
        des="Website is basically used to grow your business.Your website is 
        usually the cornerstone of an online marketing plan, providing a 
        presence for your business."
        icon={<AiFillAppstore />}
        />

        <Card
        title="UI/UX Design"
        des="Developing a product that people love often requires both 
        good UI and good UX. For example, you could have a banking 
        app that looks great and has intuitive navigation (UI)."
        icon={<SiAntdesign/>}
         />

        <Card
        title="Web Hosting"
        des="Web hosting is important to react the public. if we host 
        the our website then public can visit our website or app.
        Web hoisting have diffrent type like VHP" 
        icon={<FaGlobe />}
        />

        <Card
        title="SEO"
        des="Search engine optimization (SEO) is the practice of getting 
        targeted traffic to a website from a search engine’s organic rankings."
        
        icon={<SiProgress />}
        />

      </div>
    </section>
  )
}

export default Features;