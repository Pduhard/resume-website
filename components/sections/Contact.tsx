"use client";

import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Trophy, Code, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const socialIcons = {
  Github,
  Linkedin,
  Trophy,
  Code,
  Terminal,
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-muted/50">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for collaborations,
            feel free to reach out anytime!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-sm bg-background border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:paco.duhard@gmail.com"
                          className="text-lg text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                        >
                          paco.duhardjourdan3@gmail.com
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {SOCIAL_LINKS.map((link) => {
                        const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                        return (
                          <motion.a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                            whileHover={{ y: -2 }}
                            title={link.platform}
                          >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {link.platform}
                            </span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}