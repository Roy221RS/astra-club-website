import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiUserGroup, HiLightBulb } from 'react-icons/hi';

const Register = () => {
  const pathways = [
    {
      icon: <HiUserGroup className="text-3xl text-accent-orange" />,
      title: 'Join the Community',
      desc: 'Connect with students who are curious about defence technology, strategic systems, and responsible innovation.',
    },
    {
      icon: <HiLightBulb className="text-3xl text-accent-orange" />,
      title: 'Build and Learn',
      desc: 'Take part in hands-on projects, technical sessions, workshops, and interdisciplinary initiatives led by ASTRA.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-32 relative"
      id="register"
    >
      <div className="text-center mb-16 relative z-10">
        <span className="font-rajdhani text-accent-orange/60 tracking-[0.4em] uppercase text-xs mb-4 block font-black">
          Start_With_ASTRA
        </span>
        <h1 className="text-4xl md:text-7xl font-orbitron font-black mb-4 tracking-tighter italic">
          JOIN <span className="text-accent-orange">ASTRA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-text-muted font-inter text-lg leading-relaxed">
          Be part of a student-led club building awareness, practical expertise, and meaningful connections across the defence technology ecosystem.
        </p>
        <div className="w-24 h-1 bg-accent-orange mx-auto mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10 mb-12">
        {pathways.map((pathway) => (
          <div key={pathway.title} className="bg-bg-surface border border-accent-orange/30 p-8 md:p-10">
            <div className="w-16 h-16 border border-accent-orange/30 flex items-center justify-center mb-8">
              {pathway.icon}
            </div>
            <h2 className="text-2xl font-orbitron text-text-primary mb-4 uppercase italic">{pathway.title}</h2>
            <p className="text-text-muted font-inter leading-relaxed">{pathway.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-bg-elevated border border-custom-border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        <div>
          <span className="label-badge text-accent-orange mb-3 block">Membership Enquiries</span>
          <h2 className="text-xl md:text-2xl font-orbitron text-text-primary mb-2">Ready to get involved?</h2>
          <p className="text-text-muted font-inter">Write to the ASTRA team to learn about joining the club.</p>
        </div>
        <a
          href="mailto:astra@bmsit.in"
          className="shrink-0 inline-flex items-center gap-3 px-6 py-4 bg-accent-orange text-bg-base font-orbitron font-black tracking-widest uppercase hover:bg-accent-amber transition-all"
        >
          <HiMail />
          Contact ASTRA
          <HiArrowRight />
        </a>
      </div>
    </motion.div>
  );
};

export default Register;
