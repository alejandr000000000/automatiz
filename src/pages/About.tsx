import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';
import Future from '../components/about/Future';

const About = () => {
  return (
    <div className="pt-5  ">
      <AboutHero />
      <Timeline />
      <Team />
      <Future />
    </div>
  );
};

export default About;