import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { Card, CardContent } from '@/src/components/ui/Card';
import { ShieldCheck, Truck, Clock, Upload, Search, MessageCircle, Star } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none" 
             style={{
               backgroundImage: 'radial-gradient(circle at 70% 30%, var(--color-secondary) 0%, transparent 50%), radial-gradient(circle at 30% 70%, var(--color-accent-subtle) 0%, transparent 50%)'
             }} />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/30 dark:text-[var(--color-secondary)] w-fit text-sm font-medium">
              <ShieldCheck size={16} /> Trusted Healthcare Access
            </div>
            
            <h1 className="text-5xl lg:text-[64px] font-extrabold tracking-tighter leading-[0.95] text-[var(--text-color)]">
              Healthcare <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">Made Easy.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed">
              Access genuine medications from trusted, licensed pharmacies without stress. Nationwide delivery direct to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop" className="w-full sm:w-auto">
                <Button size="lg" className="w-full shadow-lg shadow-[var(--color-primary)]/20 animate-pulse-slow font-bold text-lg">
                  Order Medication Now
                </Button>
              </Link>
              <Link to="/upload" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full gap-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] dark:hover:bg-[var(--color-accent-dark)]/20">
                  <Upload size={20} /> Upload Prescription
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-[var(--border-color)] mt-4">
              <div className="flex items-center gap-2">
                <Truck className="text-[var(--color-primary)]" size={20} />
                <span className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[var(--color-primary)]" size={20} />
                <span className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">Licensed Pharmacies</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="relative rounded-[24px] bg-[var(--bg-alt-color)] border border-[var(--border-color)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden aspect-[4/3] flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Female Pharmacist" className="rounded-2xl object-cover w-full h-full shadow-lg" />
                 
                 {/* Floating UI element */}
                 <div className="absolute -bottom-6 -left-6 bg-[var(--bg-color)] p-6 rounded-3xl shadow-xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-primary)]">
                       <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Verified</p>
                      <p className="font-bold">No Counterfeit Drugs</p>
                    </div>
                 </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview / Problem -> Solution */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skip the Pharmacy Lines</h2>
            <p className="text-[var(--text-muted)] text-lg">We remove the stress and uncertainty from buying medications. Authentic products, guaranteed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Find Any Medication", desc: "Easily search our extensive catalog of authentic drugs from verified partners." },
              { icon: Upload, title: "Upload Prescription", desc: "Simply snap a photo of your doctor's prescription for quick, verified fulfillment." },
              { icon: MessageCircle, title: "Expert Consultation", desc: "Chat instantly with licensed pharmacists via WhatsApp for guidance." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-8 flex flex-col gap-6 items-start">
                    <div className="p-4 rounded-2xl bg-[var(--color-secondary)] dark:bg-[var(--color-primary-dark)]/40 text-[var(--color-primary)]">
                      <feature.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How EASYPHARM Works</h2>
              <p className="text-[var(--text-muted)] text-lg">Your health, delivered in 4 simple steps.</p>
            </div>
            <Link to="/how-it-works"><Button variant="outline">Learn More</Button></Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-gray-800 -z-10" />

            {[
              { step: 1, title: "Search", desc: "Find your medications" },
              { step: 2, title: "Upload", desc: "Provide your prescription" },
              { step: 3, title: "Confirm", desc: "Checkout securely" },
              { step: 4, title: "Receive", desc: "Delivery to your door" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 relative bg-[var(--bg-color)]">
                <div className={`w-14 h-14 rounded-full ${i % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-accent)]'} text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-[var(--bg-color)]`}>
                  {step.step}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-[24px] overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
           <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get your medications?</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
                Join thousands of trusting users. Order now and experience healthcare made easy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-white text-[var(--color-accent)] hover:bg-gray-100 font-bold border-none shadow-[0_10px_25px_-5px_rgba(255,255,255,0.3)]">
                    Order Medication Now
                  </Button>
                </Link>
                <a href="https://wa.me/2347041167945" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Chat with Pharmacist
                  </Button>
                </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
