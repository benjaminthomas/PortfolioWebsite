"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import Image from 'next/image';

export default function Testimonial() {
    const { ref } = useSectionInView("Testimonial", 0.5);
    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='testimonial' ref={ref}>
            <SectionHeading>
                Testimonials
            </SectionHeading>
            <ul className='flex flex-col justify-center gap-4 text-l text-gray-800'>
                {
                    testimonials.map((item, index) => (
                        <motion.li
                            className='bg-white rounded-xl px-5 py-3 dark:bg-white/5'
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.05 * index
                            }}
                            viewport={{
                                once: true
                            }}
                            custom={index}
                            key={index}>
                                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                    <figure className="max-w-screen-md mx-auto">
                                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                        </svg> 
                                        <blockquote>
                                            <p className="font-semibold text-gray-900 dark:text-white/70">{item.testimonial}</p>
                                        </blockquote>
                                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                            <Image className="w-8 h-8 rounded-full" src={item.image} alt={item.name} quality={95} />
                                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                                <div className="pr-3 font-medium text-gray-900 dark:text-white/60">{item.name}</div>
                                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-white/60">{item.designation}, {item.company}</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
