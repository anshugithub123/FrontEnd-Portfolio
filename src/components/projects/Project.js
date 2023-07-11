import React from 'react';
import Title from "../layouts/Title";
import ProjectCard from './ProjectCard';
import {projectTwo, projectFour, projectFive, projectSeven, projectSix, projectNine} from "../../assest/images/index"
const Project = () => {
  return (
    <section
    id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'>
        
        <div className='flex justify-center items-center text-center'>
        <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects" />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectCard
            title="AMAZON CLONE"
            des="In this project i used react js language for functionally work and 
            tailwind css is used for the design. I took help of youtube 
            video and some website."
            src={projectFour} />

            <ProjectCard
            title="TIK-TOK CLONE"
            des="I make tik-tok clone using also backend and api's to create this project.
            and react.js is used for frontend."
            src={projectFive} />

            <ProjectCard
            title="Car Rental Website"
            des="I make Car rental website for my clinet this project is based on the booking the car online
            In this project i used react js for frontend and for backend i create api's of google sheet 
            on the client demand."
            src={projectSix} />

            <ProjectCard
            title="VS CODE EDITOR CLONE"
            des="In this project i develop vs code clone which is working good. and i took help
            of youtube videos and website."
            src={projectSeven} 
            />

            <ProjectCard
             title="INSTAGRAM CLONE"
             des="Devlope instagram clone. in this project i used react js 
             for frontend and backend i used REDUX."
             src={projectNine} />

            <ProjectCard
            title="E-COMMERCE WEBSITE"
            des="In this website basically i make online cart login portal many more for shopping.
            using react.js and Redux for backend."
            src={projectTwo} />

        </div>
    </section>
  )
}

export default Project;