import dynamic from "next/dynamic";
import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OurAchievements from "@/components/OurAchievements";
import Footer from "@/components/Footer";

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
