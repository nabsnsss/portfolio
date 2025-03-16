import React, { useEffect, useRef, createElement } from 'react';
import { ShieldCheck, Shield } from 'lucide-react';
export function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!terminalRef.current) return;
    const messages = [{
      text: '> Initializing security profile...',
      delay: 300
    }, {
      text: '> Running system diagnostics...',
      delay: 1000
    }, {
      text: '> Analyzing threat landscape...',
      delay: 1000
    }, {
      text: '> Profile authenticated: Nabila',
      delay: 1000
    }, {
      text: '> Security status: Active',
      delay: 800
    }, {
      text: '> Welcome to the secure perimeter.',
      delay: 800
    }];
    let totalDelay = 0;
    messages.forEach(message => {
      totalDelay += message.delay;
      setTimeout(() => {
        if (terminalRef.current) {
          const line = document.createElement('div');
          line.className = 'font-mono text-sm md:text-base';
          line.innerHTML = message.text;
          terminalRef.current.appendChild(line);
        }
      }, totalDelay);
    });
  }, []);
  return <section id="home" className="min-h-screen pt-20 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/30 text-purple-400 mb-6">
              <ShieldCheck className="mr-2 h-4 w-4" />
              <span>Cybersecurity & Strategic Analyst</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Securing Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                Infrastructure & Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Specializing in threat intelligence, risk management, and
              strategic security architecture to protect critical systems
              against evolving threats.
            </p>
            <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-4 mb-8 max-w-lg">
              <div className="flex items-center mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  terminal ~ security_protocol
                </span>
              </div>
              <div ref={terminalRef} className="text-green-400 space-y-1"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#arsenal" className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-md transition-colors flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                View Technical Arsenal
              </a>
              <a href="#contact" className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-600 font-medium rounded-md transition-colors">
                Establish Contact
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-[#0c1a2b] border-2 border-gray-800 rounded-lg overflow-hidden max-w-md">
                <div className="aspect-square md:aspect-[4/5] w-full max-w-md">
                  <div className="h-full w-full flex items-center justify-center bg-[#0c1a2b] relative overflow-hidden">
                    {/* Hexagon grid background */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="currentColor" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                      </svg>
                    </div>
                    <div className="text-center p-8 relative z-10">
                      <div className="mx-auto w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full bg-[#0c1a2b] flex items-center justify-center text-5xl font-bold text-white">
                          N
                        </div>
                      </div>
                      <h2 className="mt-6 text-2xl font-bold text-white">
                        Nabila
                      </h2>
                      <p className="text-purple-400 font-mono text-sm">
                        Security Operations Specialist
                      </p>
                      <div className="mt-6 space-y-2 font-mono text-sm">
                        <div className="flex items-center justify-center">
                          <span className="text-gray-400">Status:</span>
                          <span className="ml-2 text-green-400">Active</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-gray-400">Clearance:</span>
                          <span className="ml-2 text-purple-400">Level 5</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-gray-400">
                            Threat Detection:
                          </span>
                          <span className="ml-2 text-cyan-400">Enhanced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800">
          <blockquote className="text-xl md:text-2xl text-center font-light italic text-gray-300 max-w-3xl mx-auto">
            "Security is not just a technical challenge, but a strategic
            imperative. The strongest defense combines deep technical knowledge
            with forward-thinking strategy."
          </blockquote>
        </div>
      </div>
    </section>;
}