import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

const FAQS = [
  {
    q: "Are your medications genuine?",
    a: "Absolutely. We partner exclusively with fully licensed, verified pharmacies across the nation. Every product sourced through EASYPHARM is guaranteed authentic and trackable."
  },
  {
    q: "Do I need a prescription to order?",
    a: "It depends on the medication. Over-the-counter (OTC) supplements and pain relievers do not require a prescription. However, antibiotics, strong painkillers, and specialized treatments strictly require a valid doctor's prescription, which you can easily upload on our site."
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times vary depending on your location. Within major cities, we aim for same-day or next-day delivery. For other regions, it typically takes 2-3 business days. You will receive a tracking link once your order is dispatched."
  },
  {
    q: "Can I order for someone else?",
    a: "Yes, you can. During checkout, simply enter the recipient's delivery details. If the medication requires a prescription, please ensure you upload the prescription bearing the patient's name."
  },
  {
    q: "What locations do you cover?",
    a: "We currently provide nationwide delivery across Nigeria. For remote areas, please allow a slightly longer delivery window."
  },
  {
    q: "Is it safe to share my medical information?",
    a: "Yes. Your privacy is our top priority. All prescriptions and medical chats are end-to-end encrypted and handled strictly by our licensed pharmacists in compliance with health data protection laws."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[70vh]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-[var(--text-muted)] text-lg">Find answers to common questions about our services.</p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="border border-[var(--border-color)] dark:bg-slate-800 shadow-none hover:shadow-none bg-white">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-primary)]' : 'text-gray-400'}`} size={24} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-[var(--text-muted)] leading-relaxed text-base border-t border-[var(--border-color)] mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
