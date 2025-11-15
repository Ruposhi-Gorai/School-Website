import React from 'react'
import HeroSection from './HeroPage'
import WhyChooseUs from './WhyChooseUs'
// import SchoolInfo from "/SchoolInfo";
import ContentRenderer from './SchoolInfo/ContentRenderer';
import SchoolInfo from './SchoolInfo';
import AiAgentUI from './AiAgent';

export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <WhyChooseUs/>
    <AiAgentUI/>
    <SchoolInfo/>
    </>
  )
}
