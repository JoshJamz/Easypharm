import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartPulse, Award, Users } from 'lucide-react';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About EASYPHARM</h1>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          We are on a mission to make healthcare accessible, affordable, and stress-free. 
          By bridging the gap between licensed pharmacies and patients, we ensure everyone gets 
          the authentic medications they need.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pharmacists working" className="rounded-[2rem] shadow-xl w-full h-[400px] object-cover" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            EASYPHARM was founded on a simple premise: nobody should have to worry about counterfeit drugs or the stress of finding medications. 
            We saw the challenges patients faced and decided to build a platform that prioritizes trust, safety, and convenience above all else.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Today, we partner with a nationwide network of verified, licensed pharmacies to ensure that when you order through EASYPHARM, 
            you're getting exactly what the doctor prescribed.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
         {[
           { icon: ShieldCheck, title: "Safety First", desc: "100% genuine medications" },
           { icon: HeartPulse, title: "Care Driven", desc: "Prioritizing your well-being" },
           { icon: Award, title: "Licensed", desc: "Only verified pharmacies" },
           { icon: Users, title: "Community", desc: "Support at every step" }
         ].map((val, i) => (
           <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-slate-800/50 rounded-3xl">
             <div className="mb-4 p-4 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
               <val.icon size={28} />
             </div>
             <h3 className="font-bold text-lg mb-2">{val.title}</h3>
             <p className="text-sm text-[var(--text-muted)]">{val.desc}</p>
           </motion.div>
         ))}
      </div>
    </div>
  );
}
