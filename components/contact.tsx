"use client";
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.2);
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <motion.section 
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                delay: 0.3,
                duration: 1
            }}
            viewport={{
                once: true
            }}
            id='contact' 
            ref={ref}
            className='mb-28 sm:mb-40 w-[min(100%,38rem)] text-center'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a href='mailTo:benji_thomas@live.com'>benji_thomas@live.com</a> or through this form</p>

            <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => {
                const {data, error} = await sendEmail(formData);

                if (error){
                    toast.error(error);
                    return;
                }

                toast.success("Email sent successfully");
                // Clear the input after success
                setSenderEmail('');
                setMessage('');
            }}>
                <input name='senderEmail' type="email" className='h-14 rounded-lg border-black px-4 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none' required maxLength={500} placeholder='Enter your email' value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)}/>
                <textarea name='message' className='h-52 my-3 rounded-lg border-black p-4 dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none' maxLength={5000} placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
