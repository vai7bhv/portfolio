import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import '../assets/profile.jpg'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hey , The Name is Vaibhav Patel',
      'Guy-who-loves-Coffee.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 1700,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img src='../assets/profile.jpg' />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7AB0A' />
      </h1>
    </div>
  )
}

export default Hero
