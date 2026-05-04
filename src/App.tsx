import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './lib/ThemeContext';
import Layout from './components/layout/Layout';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Shop = React.lazy(() => import('./pages/Shop'));
const UploadPrescription = React.lazy(() => import('./pages/UploadPrescription'));
const Contact = React.lazy(() => import('./pages/Contact'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[var(--bg-color)]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-primary)] border-t-transparent"></div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="shop" element={<Shop />} />
              <Route path="upload" element={<UploadPrescription />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
