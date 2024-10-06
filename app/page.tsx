"use client";
import React from "react";
//my components
import LandingPage from "./components/landingPage";
import Skills from "./components/Skills";
import Education from "./components/education";
import Projects from "./components/projects";
import Footer from "./components/footer";
export default function Home() {
  return(
    <>
      <div className="space-y-6">
      <LandingPage/>
      <Skills/>
      <Education/>
      <Projects/>
      <Footer/>
      </div>
    </>
  )
}
