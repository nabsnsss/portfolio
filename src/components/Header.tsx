import React, { useEffect, useState } from 'react';
import { Menu, X, ShieldAlert, Lock, FileDigit, LineChart, Send } from 'lucide-react';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    id: 'home',
    label: 'ENTRY',
    icon: <ShieldAlert size={18} />
  }, {
    id: 'arsenal',
    label: 'ARSENAL',
    icon: <Lock size={18} />
  }, {
    id: 'projects',
    label: 'OPERATIONS',
    icon: <FileDigit size={18} />
  }, {
    id: 'career',
    label: 'TRAJECTORY',
    icon: <LineChart size={18} />
  }, {
    id: 'contact',
    label: 'PROTOCOL',
    icon: <Send size={18} />
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#060f1a]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-purple-700 flex items-center justify-center mr-2">
                <ShieldAlert className="h-5 w-5 text-white" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-white">
                NABILA BENAYADA
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-sm flex items-center space-x-2 rounded transition-colors ${activeSection === item.id ? 'bg-purple-700/20 text-purple-400 border-l-2 border-purple-500' : 'text-gray-300 hover:bg-gray-800/50'}`}>
                {item.icon}
                <span>{item.label}</span>
              </button>)}
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-[#060f1a] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full px-3 py-2 flex items-center space-x-3 rounded ${activeSection === item.id ? 'bg-purple-700/20 text-purple-400 border-l-2 border-purple-500' : 'text-gray-300'}`}>
                {item.icon}
                <span>{item.label}</span>
              </button>)}
          </div>
        </div>}
    </header>;
}