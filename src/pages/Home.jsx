import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import {
  GiRobotLeg,
  GiArtificialIntelligence,
  GiLockSpy,
  GiCctvCamera,
  GiProcessor,
  GiRadarSweep,
  GiDeliveryDrone
} from 'react-icons/gi';

const Home = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="w-full"
      id="home"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-rajdhani text-accent-amber tracking-[0.2em] uppercase text-sm font-semibold">
            ASTRA CLUB · BMSIT&M BENGALURU
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-text-primary tracking-tactical mb-2 leading-none"
        >
          ARMED SQUAD FOR
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-accent-orange mb-4 tracking-tighter"
        >
          TACTICAL READINESS
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-10">
          <span className="text-xl md:text-2xl font-orbitron text-accent-amber tracking-widest">Tomorrow's defence, being engineered today</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => {
              const el = document.getElementById('register');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Register now
          </button>
          <button
            onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Explore Domains
          </button>
        </motion.div>
      </section>

      {/* Deployment Paths Section */}
      <section className="py-24 bg-bg-base relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-rajdhani text-accent-orange/60 tracking-[0.4em] uppercase text-xs mb-4 block font-black">Join_The_Mission</span>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-text-primary tracking-tighter italic uppercase">
              CHOOSE YOUR <span className="text-accent-orange">PATH</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Participant Path */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-bg-surface border border-accent-orange/30 p-10 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GiRobotLeg className="text-8xl" />
              </div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary mb-4 uppercase italic">Innovator</h3>
              <p className="text-text-muted font-inter mb-8 leading-relaxed">
                Build practical defence technology projects with peers across disciplines and turn technical curiosity into capability.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('register');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 text-accent-orange font-orbitron font-bold uppercase tracking-widest group-hover:space-x-4 transition-all"
              >
                <span>Explore our work</span>
                <HiArrowRight />
              </button>
            </motion.div>

            {/* Visitor Path */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-bg-elevated border border-custom-border p-10 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GiDeliveryDrone className="text-8xl" />
              </div>
              <h3 className="text-2xl font-orbitron font-black text-text-primary mb-4 uppercase italic">Observer</h3>
              <p className="text-text-muted font-inter mb-8 leading-relaxed">
                Join a student community developing awareness, skills, and responsible solutions for the defence and strategic technology ecosystem.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('register');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 text-text-primary font-orbitron font-bold uppercase tracking-widest group-hover:text-accent-orange group-hover:space-x-4 transition-all"
              >
                <span>Join ASTRA</span>
                <HiArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </motion.div>

  );
};

export default Home;
