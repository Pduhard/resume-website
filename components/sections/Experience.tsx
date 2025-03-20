"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EXPERIENCE } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and continuous learning.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {EXPERIENCE.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  expandedId === item.id ? 'ring-2 ring-primary/20' : ''
                }`}
                onClick={() => toggleExpand(item.id)}
              >
                <CardHeader className="flex flex-row items-center space-y-0 p-4">
                  <div className="flex-1 flex items-center gap-3">
                    {item.type === 'work' ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {item.role}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.company} • {item.period}
                      </p>
                    </div>
                  </div>
                  {expandedId === item.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </CardHeader>
                {expandedId === item.id && (
                  <CardContent className="p-4 pt-0">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}