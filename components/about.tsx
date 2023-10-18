"use client";

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  

  return (
    <motion.section 
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.2
        }}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'>
        <SectionHeading>
            About me
        </SectionHeading>
        <p className='mb-3'>I am a Frontend Developer with <span className='font-medium'>9+ years</span> of experience in designing and developing user interfaces for responsive and mobile-friendly websites and applications. I am proficient in <span className='font-medium'>HTML, CSS, JavaScript, frontend frameworks, design systems, and design tokens</span>. I am always looking for ways to improve my skills and stay up to date with the latest trends and technologies in the web development field.</p>
    </motion.section>
  )
}
