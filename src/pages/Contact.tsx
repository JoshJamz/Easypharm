import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

export default function Contact() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-[var(--text-muted)] text-lg">We're here to help. Reach out to us via phone, email, or chat with a pharmacist directly on WhatsApp.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-8">
          
          <Card className="border-none shadow-sm dark:bg-slate-800">
            <CardContent className="p-8 flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-muted)] mb-2">Phone</p>
                  <div className="flex flex-col gap-1 text-lg font-medium">
                    <a href="tel:+2347041167945" className="hover:text-[var(--color-primary)]">+234 704 116 7945</a>
                    <a href="tel:+2349133594446" className="hover:text-[var(--color-primary)]">+234 913 359 4446</a>
                    <a href="tel:+2348136312858" className="hover:text-[var(--color-primary)]">+234 813 631 2858</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-muted)] mb-1">Email</p>
                  <a href="mailto:easypharmcare@gmail.com" className="text-lg font-medium hover:text-[var(--color-primary)]">easypharmcare@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium text-[var(--text-muted)] mb-1">Location</p>
                  <p className="text-lg font-medium">Nationwide Delivery HQ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <a href="https://wa.me/2347041167945" target="_blank" rel="noopener noreferrer">
            <Card className="bg-[#25D366] text-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-center justify-between">
                 <div>
                   <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
                   <p className="text-white/90">Instant replies from our pharmacists.</p>
                 </div>
                 <MessageCircle size={48} className="opacity-80" />
              </CardContent>
            </Card>
          </a>

        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
           <Card className="border-none shadow-lg dark:bg-slate-800">
             <CardContent className="p-8 md:p-10">
               <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
               <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-medium">Full Name</label>
                   <input required type="text" className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="John Doe" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-medium">Email Address</label>
                   <input required type="email" className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="john@example.com" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-medium">Message</label>
                   <textarea required rows={5} className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="How can we help you?" />
                 </div>
                 <Button size="lg" className="w-full mt-2">Send Message</Button>
               </form>
             </CardContent>
           </Card>
        </motion.div>
      </div>
    </div>
  );
}
