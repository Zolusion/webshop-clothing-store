import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import JoinTeamForm from '../../components/JoinTeamForm';

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