import React from 'react';
import { Send, Shield, Lock, FileSearch, BarChart3 } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-[#0a1929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Communication Protocol
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure channels for discussing potential collaborations, security
            challenges, or strategic security initiatives requiring expert
            analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-gray-800 rounded-md mr-3">
                <Send className="h-5 w-5 text-purple-400" />
              </span>
              Secure Communication Channel
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Identification
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Secure Contact Point
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Engagement Type
                </label>
                <select id="subject" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
                  <option value="">Select engagement type</option>
                  <option value="security-assessment">
                    Security Assessment
                  </option>
                  <option value="incident-response">Incident Response</option>
                  <option value="security-architecture">
                    Security Architecture
                  </option>
                  <option value="strategic-consulting">
                    Strategic Consulting
                  </option>
                  <option value="other">Other Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mission Details
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Describe your security challenge or project requirements"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-md transition-colors flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Initiate Secure Communication
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Collaboration Parameters
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                    <h4 className="font-bold text-white">
                      Security Challenges
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm pl-7">
                    Complex security issues requiring technical expertise
                    combined with strategic perspective. Particularly interested
                    in zero-trust implementation, threat detection optimization,
                    and security architecture design.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <FileSearch className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-bold text-white">
                      Technical Requirements
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm pl-7">
                    Projects involving advanced security technologies, complex
                    threat landscapes, or requiring deep technical analysis with
                    strategic recommendations.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-5 w-5 text-green-400 mr-2" />
                    <h4 className="font-bold text-white">
                      Strategic Alignment
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm pl-7">
                    Organizations seeking to align security initiatives with
                    business objectives, requiring roadmap development or
                    security maturity advancement.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                Professional Networks
              </h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-blue-900/30 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white">LinkedIn</span>
                      <p className="text-xs text-gray-400">
                        Professional Profile
                      </p>
                    </div>
                  </div>
                  <span className="text-purple-400">Connect</span>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-gray-900/30 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white">GitHub</span>
                      <p className="text-xs text-gray-400">
                        Security Projects & Tools
                      </p>
                    </div>
                  </div>
                  <span className="text-purple-400">View</span>
                </a>
                <a href="#" className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-purple-900/30 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white">Twitter</span>
                      <p className="text-xs text-gray-400">Security Insights</p>
                    </div>
                  </div>
                  <span className="text-purple-400">Follow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}