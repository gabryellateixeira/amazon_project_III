'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { ColorButton } from '@/components/ui/Color-Button/Color-Button'
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <section className='relative grid h-screen w-screen place-items-center'>
        <Image src={'/img/img1.webp'} alt='amazon' fill className=' object-cover' priority />
        <div className='relative z-10 flex flex-col items-center gap-10'>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.51, 0.23, 0.28, 0.9] }}
            className='text-6xl font-bold text-white'
          >
            Amazon Rainforest
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 2, ease: [0.51, 0.23, 0.28, 0.9] }}
          >
            <ColorButton bgColors={['#59a1e3', '#50f29e', '#c7f250']}>Explore</ColorButton>
          </motion.div>
        </div>
      </section>
      <section className='h-screen w-screen bg-red-500'></section>
    </>
  )
}
