import React from 'react'
import type { Metadata } from "next";
import Login from '@/components/Login';

const title = "Login";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const login = () => {
  return (
    <div className='bg-white'>
        <Login />
    </div>
  )
}

export default login