import React from 'react';
import Hero from '@/Components/About/Hero';
import About from '@/Components/About/about';
import Founder from '@/Components/About/founder';
import Achievements from '@/Components/About/achivements';

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <About />
      <Founder />
      <Achievements />
      {/* Other About page sections will go here later */}
    </main>
  );
}
