import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='block mb-2 text-xs'>
            &copy; {new Date().getFullYear()}{''} Benjamin. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website</span> built with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email and Resend
        </p>
    </footer>
  )
}
