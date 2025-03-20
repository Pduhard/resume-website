"use client";

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}