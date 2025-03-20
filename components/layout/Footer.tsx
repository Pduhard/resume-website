"use client";

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Trophy, Code, Terminal } from 'lucide-react';

const socialIcons = {
  Github,
  Linkedin,
  Trophy,
  Code,
  Terminal,
};

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}