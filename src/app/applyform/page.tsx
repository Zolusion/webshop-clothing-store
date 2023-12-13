import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Footer = dynamic(() => import('@/components/Footer'));
const JoinTeamForm = dynamic(() => import('@/components/JoinTeamForm'));
const Navbar = dynamic(() => import('@/components/Navbar'));

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