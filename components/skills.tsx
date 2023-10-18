"use client"; 

import React from 'react'
import { motion } from 'framer-motion';

import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';


export default function Skills() {
    const { ref } = useSectionInView("Skills");
    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='skills' ref={ref}>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className='bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.05 * index
                            }}
                            viewport={{
                                once: true
                            }}
                            custom={index}
                            key={index}>{skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
