'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data';
import Image from 'next/image';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function Testimonial() {
    const { ref } = useSectionInView("Testimonial", 0.5);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const variants = {
        enter: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
            },
        },
        exit: {
            opacity: 0,
            x: -100,
        },
    };

    function next() {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    function prev() {
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }

    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='testimonial' ref={ref}>
            <SectionHeading>
                Testimonials
            </SectionHeading>
            <div className='relative py-4 px-8 bg-white rounded-xl dark:bg-white/5'>
                <button onClick={prev} className='absolute left-5 top-[50%] -translate-y-[50%] cursor-pointer z-10 bg-white text-gray-950 p-4 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60 transition-all'>
                    <FaArrowAltCircleLeft className='text-xl' />
                </button>
                <button onClick={next} className='absolute right-5 top-[50%] -translate-y-[50%] cursor-pointer z-10 bg-white text-gray-950 p-4 flex items-center justify-center gap-2 rounded-full border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60 transition-all'>
                    <FaArrowAltCircleRight className='text-xl' />
                </button>
                <ul className='grid auto-cols-[100%] auto-flow-col text-l text-gray-800 overflow-hidden'>
                    <AnimatePresence initial={false} custom={index}>
                        <motion.li
                            key={index}
                            custom={index}
                            variants={variants}
                            initial='exit'
                            animate='enter'
                            exit='exit'
                            className='px-8 py-3 flex-1'
                        >
                            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                <figure className="max-w-screen-md mx-auto">
                                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                    </svg>
                                    <blockquote>
                                        <p className="font-semibold text-gray-900 dark:text-white/70">{testimonials[index].testimonial}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <Image className="w-8 h-8 rounded-full" src={testimonials[index].image} alt={testimonials[index].name} quality={95} />
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-gray-900 dark:text-white/60">{testimonials[index].name}</div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-white/60">{testimonials[index].designation}, {testimonials[index].company}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </motion.li>
                    </AnimatePresence>
                </ul>
            </div>
        </section>
    );
}
