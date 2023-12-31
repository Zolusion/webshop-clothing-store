import DressesComponent from "components/DressesComponent";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import type { Metadata } from "next";

const title = "Dresses";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

import React from 'react'

const dresses = () => {
  return (
    <div className="bg-white">
        <Navbar/>
        <DressesComponent />
        <Footer />
    </div>
  )
}

export default dresses