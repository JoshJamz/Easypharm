import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[var(--text-muted)]">
          
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://i.ibb.co/6J09zLnT/Whats-App-Image-2026-04-18-at-21-53-34.jpg" alt="EASYPHARM Logo" className="h-12 w-auto rounded-lg object-contain" />
              <span className="font-bold text-xl tracking-tight text-[var(--color-primary)]">EASYPHARM</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Healthcare Made Easy. Access genuine medications from trusted pharmacies without stress, delivered right to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-color)] uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[var(--color-primary)] transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-[var(--color-primary)] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-color)] uppercase tracking-wider mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--color-primary)] transition-colors">Order Medications</Link></li>
              <li><Link to="/upload" className="hover:text-[var(--color-primary)] transition-colors">Upload Prescription</Link></li>
              <li><a href="https://wa.me/2347041167945" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">Pharmacist Consultation</a></li>
              <li><Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Home Delivery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-color)] uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+2347041167945" className="hover:text-[var(--text-color)] transition-colors">+234 704 116 7945</a>
                  <a href="tel:+2349133594446" className="hover:text-[var(--text-color)] transition-colors">+234 913 359 4446</a>
                  <a href="tel:+2348136312858" className="hover:text-[var(--text-color)] transition-colors">+234 813 631 2858</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <a href="mailto:easypharmcare@gmail.com" className="hover:text-[var(--text-color)] transition-colors">easypharmcare@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>Nationwide Delivery</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} EASYPHARM. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[var(--text-color)] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--text-color)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
