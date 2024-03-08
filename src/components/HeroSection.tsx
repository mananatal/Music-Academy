"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-10 md:py-0'>
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />

        <div className='flex flex-col items-center justify-center p-4 '>
           
            <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h2>
            <p  className="mt-4 font-normal text-base text-center md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            
          <div className='mt-4'>
                <Link href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                    >
                        Explore Courses
                    </Button>
                </Link>
          </div>
        </div>

    </div>
  )
}
