import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/Header'
import Hero from '../component/Hero'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0  '>
      <Head>
        <title>Vaibhav's Portfolio</title>
      </Head>
      <Header />

      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* about */}

      {/* Experience */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  )
}

export default Home
