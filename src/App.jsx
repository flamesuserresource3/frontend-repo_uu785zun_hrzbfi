import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main id="home" className="relative">
        <Hero />
        <Features />
      </main>
      <BottomNavBar />
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} AI Marketing Suite. Built for creators, marketers, and small businesses.
        </div>
      </footer>
    </div>
  );
}

export default App;
