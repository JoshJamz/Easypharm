import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, File, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card, CardContent } from '@/src/components/ui/Card';

export default function UploadPrescription() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      // Simulate submission
      setTimeout(() => setSubmitted(true), 1000);
    }
  };

  if (submitted) {
    return (
      <div className="py-20 px-4 max-w-lg mx-auto text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold">Prescription Received!</h2>
          <p className="text-[var(--text-muted)]">Our pharmacists are reviewing your prescription. We will contact you shortly to confirm your order.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">Upload Another</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Upload Your Prescription</h1>
        <p className="text-[var(--text-muted)]">Securely upload a photo or PDF of your doctor's prescription for quick fulfillment.</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div 
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${dragActive ? 'border-[var(--color-primary)] bg-[var(--color-secondary)]/50' : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
            >
              <input type="file" id="file-upload" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleChange} accept="image/*,.pdf" />
              
              {!file ? (
                <div className="flex flex-col items-center pointer-events-none">
                  <UploadCloud size={48} className="text-[var(--color-primary)] mb-4" />
                  <p className="text-lg font-medium mb-1">Drag and drop your file here</p>
                  <p className="text-sm text-[var(--text-muted)]">or click to browse from your device</p>
                  <p className="text-xs text-[var(--text-muted)] mt-4">Supported: JPG, PNG, PDF (Max 10MB)</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4 text-[var(--color-primary)] pointer-events-none">
                  <File size={32} />
                  <span className="font-medium text-lg">{file.name}</span>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Full Name</label>
                <input required type="text" className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Enter your full name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input required type="tel" className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="0800 000 0000" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Additional Notes (Optional)</label>
              <textarea rows={3} className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-transparent focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Any specific instructions for the pharmacist?" />
            </div>

            <Button type="submit" size="lg" className="w-full mt-4" disabled={!file}>
              Submit Prescription
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
