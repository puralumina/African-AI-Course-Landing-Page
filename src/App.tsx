import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import ModulesPreview from './components/ModulesPreview';
import SocialProof from './components/SocialProof';
import Results from './components/Results';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Introduction />
      <ValueProposition />
      <Features />
      <ModulesPreview />
      <SocialProof />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;