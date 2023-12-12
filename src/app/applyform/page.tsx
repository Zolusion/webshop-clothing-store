import Footer from '@/components/Footer'
import JoinTeamForm from '@/components/JoinTeamForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from "next";

const title = "Join us";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const JoinTeam = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <JoinTeamForm />
        <Footer />
    </div>
  )
}

export default JoinTeam