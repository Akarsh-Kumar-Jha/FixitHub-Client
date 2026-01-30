"use client";
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import React from 'react'

function Hero() {
  return (
    <div className='flex w-full flex-col justify-between py-10 items-center mt-5 h-[calc(100vh-120px)]'>

                <div className='w-full h-[30%] flex flex-col justify-center items-center p-3 gap-y-5'>
   <h2 className='text-6xl text-foreground font-semibold'>Manage <span className='text-primary'>issues</span> without the chaos</h2>
   <p className='text-lg text-center text-foreground/80'>FixitHub helps teams track issues, collaborate clearly, and move faster — without unnecessary complexity.</p>
        </div>

        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration:0.5, ease: 'easeInOut'}} className='flex relative w-full h-[70%] justify-center items-center bg-[url(https://res.cloudinary.com/dlnzbkyit/image/upload/v1769612013/ChatGPT_Image_Jan_28_2026_08_13_06_PM_xfuhpl.png)] bg-center bg-contain bg-no-repeat'>

</motion.div>

<Button>Get Started</Button>
    </div>
  )
}

export default Hero