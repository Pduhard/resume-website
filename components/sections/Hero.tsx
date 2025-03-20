"use client";

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Trophy, Code, Terminal } from 'lucide-react';
import Image from 'next/image';

const socialIcons = {
  Github,
  Linkedin,
  Trophy,
  Code,
  Terminal,
};

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 ring-4 ring-primary/20"
        >
          <Image
            src="/paco.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
            fill
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mb-8"
        >
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = socialIcons[link.icon as keyof typeof socialIcons];
            return (
              <motion.a
                aria-label={link.platform}
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-primary/10 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                title={link.platform}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Web3 Developer
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Passionate full-stack developer with a focus on Web3 and cutting-edge technologies, delivering innovative solutions with an agile mindset.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a 
            href="#projects"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity min-w-[160px]"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity min-w-[160px]"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
