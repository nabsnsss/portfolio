import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { ChevronUpIcon } from 'lucide-react';
export function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-[#0a1929] text-gray-200 font-sans">
      <Header />
      <main className="relative">{children}</main>
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 p-3 rounded-full bg-purple-700 text-white shadow-lg transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <ChevronUpIcon size={24} />
      </button>
      <footer className="py-6 px-4 bg-[#060f1a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>
            © {new Date().getFullYear()} Nabila - Cybersecurity & Strategic
            Analyst
          </p>
          <p className="mt-2 text-gray-400 font-mono text-xs">
            <span className="text-purple-500">$</span> secure_perimeter
            --status=active
          </p>
        </div>
      </footer>
    </div>;
}