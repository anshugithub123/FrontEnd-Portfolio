import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA (Bachelor's in Computer Application)"
            subTitle="University of IGNOU (2018 - 2021)"
            result="6.4 CGPA/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the technical felid."
          />
          <ResumeCard
            title="Intermediate(Bsc)"
            subTitle="LSM Collage Darbhanga, Bihar (2016 - 2018)"
            result="60%"
            des="Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="CMP Secondary School (2015 - 2016)"
            result="8.4 CGPA/10"
            des="Secondary education or post-primary education covers two phases on the Basic and Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="RNK Pvt.Ltd (Current Working from 2022 Oct)"
            result="MUMBAI"
            des="RNK care deeply about their employee and the people who make company up.Company enviroment is very familiar."
          />

          <ResumeCard
            title="Data Analytics"
            subTitle="BP Wealth Pvt.Ltd - (2021 - 2022)"
            result="MUMBAI"
            des="The company have big amount of data. It's should be organized form that's my work."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;