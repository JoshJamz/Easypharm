import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card, CardContent } from '@/src/components/ui/Card';

const MOCK_PRODUCTS = [
  { id: 1, name: "Paracetamol 500mg", type: "Pain Relief", price: "₦500", available: true },
  { id: 2, name: "Amoxicillin 500mg", type: "Antibiotics", price: "₦1,200", available: true, requiresRx: true },
  { id: 3, name: "Loratadine 10mg", type: "Allergy", price: "₦850", available: true },
  { id: 4, name: "Omeprazole 20mg", type: "Digestion", price: "₦1,500", available: false },
  { id: 5, name: "Vitamin C 1000mg", type: "Vitamins", price: "₦2,000", available: true },
  { id: 6, name: "Ibuprofen 400mg", type: "Pain Relief", price: "₦600", available: true },
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProd = MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Order Medications</h1>
          <p className="text-[var(--text-muted)]">Search and order genuine medications securely.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search medications..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
            />
          </div>
          <Button variant="outline" className="px-4 shrink-0"><Filter size={20} /></Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProd.map((prod, i) => (
          <motion.div key={prod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="h-full flex flex-col">
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 flex justify-center items-center h-48 border-b border-[var(--border-color)]">
                 <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-gray-300">
                    <ShoppingCart size={40} />
                 </div>
              </div>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">{prod.type}</span>
                  {prod.requiresRx && <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 px-2 py-1 rounded-full font-bold">Rx Required</span>}
                </div>
                <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">
                  Status: {prod.available ? <span className="text-emerald-600 dark:text-emerald-400 font-medium">In Stock</span> : <span className="text-red-500 font-medium">Out of Stock</span>}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xl font-bold">{prod.price}</span>
                  <Button size="sm" disabled={!prod.available}>Orde{prod.available ? 'r Now' : 'r Unavailable'}</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {filteredProd.length === 0 && (
          <div className="col-span-full py-20 text-center text-[var(--text-muted)]">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg">No medications found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
