import dynamic from "next/dynamic";
import React from "react";
import type { Metadata } from "next";

const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const OurAchievements = dynamic(() => import("@/components/OurAchievements"));

const title = "Achievements";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const achievements = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <OurAchievements />
      <Footer />
    </div>
  );
};

export default achievements;
