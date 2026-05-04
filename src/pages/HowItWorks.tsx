import React from 'react';
import { motion } from 'motion/react';
import { Search, UploadCloud, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search or Request',
      desc: 'Browse our catalog for your desired medications or send us a request if you can\'t find it.'
    },
    {
      icon: UploadCloud,
      title: 'Upload Prescription',
      desc: 'For prescription-only medications, securely upload a clear photo or PDF of your doctor\'s note.'
    },
    {
      icon: ShieldCheck,
      title: 'Confirm Order & Pay',
      desc: 'Our designated pharmacists review your order for safety. Once confirmed, checkout securely.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Your genuine medications are packaged securely and dispatched for nationwide doorstep delivery.'
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 text-[var(--text-muted)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-color)]">How EASYPHARM Works</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Getting your essential medications shouldn't be stressful. We've streamlined the entire process.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />
        
        <div className="flex flex-col gap-12 md:gap-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                 <div className={`md:w-1/2 flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                   <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl w-full max-w-sm border border-[var(--border-color)]">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isEven ? 'bg-[var(--color-secondary)] dark:bg-[var(--color-primary-dark)]/50 text-[var(--color-primary)]' : 'bg-[var(--color-accent-subtle)] dark:bg-[var(--color-accent-dark)]/50 text-[var(--color-accent)]'}`}>
                        <step.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
                   </div>
                 </div>

                 <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[var(--bg-color)] text-white items-center justify-center font-bold text-xl z-10 shadow-lg ${isEven ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-accent)]'}`}>
                   {index + 1}
                 </div>
                 
                 <div className="md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
        <div className="flex justify-center gap-4">
          <Link to="/shop"><Button size="lg">Order Medication</Button></Link>
        </div>
      </motion.div>
    </div>
  );
}
