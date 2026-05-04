import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/src/components/ui/Card';
import { ShoppingBag, RefreshCw, Truck, Stethoscope, Pill } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: ShoppingBag,
      title: "Medication Sourcing",
      desc: "Difficult to find medications? We source from our extensive network of verified partners."
    },
    {
      icon: RefreshCw,
      title: "Prescription Refills",
      desc: "Automate your chronic medication refills. Never run out of your essential drugs."
    },
    {
      icon: Truck,
      title: "Home Delivery",
      desc: "Fast, reliable, and discreet delivery to your doorstep, nationwide."
    },
    {
      icon: Stethoscope,
      title: "Medical Equipment",
      desc: "Order authentic medical devices and home healthcare equipment."
    },
    {
      icon: Pill,
      title: "Pharmacist Consultation",
      desc: "Speak with a licensed professional to answer questions about dosage, side effects, and interactions."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Comprehensive healthcare solutions designed around your convenience and safety.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full border-none shadow-sm hover:shadow-lg dark:bg-slate-800">
              <CardContent className="p-8 flex flex-col gap-4">
                <div className={`p-4 w-16 h-16 rounded-2xl flex items-center justify-center ${i % 2 === 0 ? 'bg-[var(--color-secondary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-primary)] dark:text-[var(--color-secondary)]' : 'bg-[var(--color-accent-subtle)] dark:bg-[var(--color-accent-dark)]/50 text-[var(--color-accent)] dark:text-[var(--color-accent-subtle)]'}`}>
                  <svc.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mt-2">{svc.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">{svc.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
