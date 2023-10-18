"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin, BsMedium} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';

import profilePic from "@/public/profile/profile.jpeg";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick
    } = useActiveSectionContext();

    return (
        <section ref={ref} id='home' className='relative mb-28 max-w-[50rem] text-center sm:mb-0 mx-auto scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 0.2
                        }}
                    >
                        <Image src={profilePic} alt='Benjamin Headshot' width="192" height="192" quality="95" priority={true} className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.2,
                            duration: 0.7
                        }}
                        className='text-4xl absolute bottom-[0] right-[0]'
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1 
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            >
                <span className='font-bold'>I am Benjamin, </span>a
                <span className='font-bold'> frontend developer</span> with over <span className='font-bold'>9 years </span>of experience, specializing in
                <span className='font-bold'> responsive websites</span> and <span className='font-bold'>design systems.</span>
            </motion.h1>

            <motion.div 
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.2
                }}
                className='flex flex-wrap flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'>
                <Link href="#contact" 
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    onClick={()=>{
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
                </Link>
                <a
                    className='group bg-white text-gray-950 px-7 py-3 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110  active:scale-105 transition dark:bg-white/10 dark:text-white/60'
                    href="/cv.pdf" download
                >Download <HiDownload className='opacity-70 group-hover:translate-x-1 transition' /></a>

                <div className='flex items-center justify-center gap-2'>
                    <a href='https://www.linkedin.com/in/benjamin-b-20802a97/' target='_blank' className='bg-white text-gray-950 p-4 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
                        <BsLinkedin /> 
                    </a>
                    <a href='https://github.com/benjaminthomas' target='_blank' className='bg-white text-gray-950 p-4 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
                        <BsGithub /> 
                    </a>
                    <a href='https://medium.com/@b-benjithomas' target='_blank' className='bg-white text-gray-950 p-4 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
                        <BsMedium /> 
                    </a>
                </div>
            </motion.div>
            <div className="w-full justify-center items-center my-24 hidden sm:flex">
                <Link href="#about">
                    <motion.div 
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            delay: 0.3
                        }}
                        className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-900 flex justify-center items-start p-2 dark:border-white/20'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}

                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className='w-3 h-3 rounded-full bg-gray-900 mb-1 dark:bg-white/20'
                        />
                    </motion.div>
                </Link>
            </div>
        </section>
    )
}
