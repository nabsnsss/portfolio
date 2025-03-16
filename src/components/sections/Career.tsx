import React from 'react';
import { CheckCircle, Target, Award } from 'lucide-react';
export function Career() {
  const careerPath = [{
    year: '2019-2020',
    role: 'Security Analyst',
    company: 'CyberDefend Solutions',
    achievements: ['Conducted vulnerability assessments for enterprise clients', 'Developed automated scanning and reporting protocols', 'Reduced false positives by 35% through improved analysis techniques'],
    skills: ['Vulnerability Assessment', 'SIEM', 'Incident Response']
  }, {
    year: '2020-2021',
    role: 'Threat Intelligence Specialist',
    company: 'SecureMatrix Inc.',
    achievements: ['Led threat hunting operations across financial sector clients', 'Developed IOC identification methodology for APT detection', 'Created threat intelligence sharing program with partner organizations'],
    skills: ['Threat Intelligence', 'APT Detection', 'OSINT']
  }, {
    year: '2021-2022',
    role: 'Security Architect',
    company: 'GlobalDefense Technologies',
    achievements: ['Designed zero-trust architecture for critical infrastructure clients', 'Implemented cloud security controls for multi-cloud environments', 'Reduced attack surface by 60% through security architecture redesign'],
    skills: ['Security Architecture', 'Zero Trust', 'Cloud Security']
  }, {
    year: '2022-Present',
    role: 'Cybersecurity & Strategic Analyst',
    company: 'Strategic Security Partners',
    achievements: ['Provide strategic security direction for enterprise organizations', 'Develop comprehensive security roadmaps aligned with business objectives', 'Lead red team exercises to evaluate security posture of critical systems'],
    skills: ['Strategic Planning', 'Risk Management', 'Security Leadership']
  }];
  const strategicGoals = [{
    year: '2024',
    goals: ['Obtain CISSP-ISSAP specialty certification', 'Develop expertise in AI/ML-based security analytics', 'Lead cross-functional security architecture projects']
  }, {
    year: '2025',
    goals: ['Transition to senior security leadership role', 'Develop specialization in critical infrastructure protection', 'Publish research on emerging threat detection methodologies']
  }, {
    year: '2026-2027',
    goals: ['Achieve CISO or equivalent strategic security leadership position', 'Establish mentorship program for cybersecurity professionals', 'Contribute to industry security standards development']
  }];
  return <section id="career" className="py-20 bg-[#071525]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Operational Trajectory
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A strategic progression through increasingly complex security
            challenges, building expertise across defensive, analytical, and
            strategic domains.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="p-2 bg-gray-800 rounded-md mr-3">
                <Award className="h-5 w-5 text-purple-400" />
              </span>
              Professional Advancement
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700"></div>
              {/* Career items */}
              <div className="space-y-12">
                {careerPath.map((item, index) => <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#0c1a2b] border-4 border-purple-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {item.role}
                          </h4>
                          <p className="text-purple-400">{item.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-mono text-gray-300">
                          {item.year}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => <li key={i} className="flex">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill, i) => <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="p-2 bg-gray-800 rounded-md mr-3">
                <Target className="h-5 w-5 text-cyan-400" />
              </span>
              Strategic Roadmap
            </h3>
            <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-lg text-white mb-4">
                Security Maturity Vision
              </h4>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-400">
                      Current Position
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      CISO
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full" style={{
                    width: '65%'
                  }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Security Analyst</span>
                    <span>Security Architect</span>
                    <span>Security Director</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-white mb-2">
                  Core Competency Focus
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      85%
                    </div>
                    <div className="text-xs text-gray-400">Technical</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400">75%</div>
                    <div className="text-xs text-gray-400">Strategic</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">65%</div>
                    <div className="text-xs text-gray-400">Leadership</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-lg text-white mb-6">
                Strategic Objectives
              </h4>
              {strategicGoals.map((period, index) => <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-purple-400">
                        {period.year}
                      </span>
                    </div>
                    <div className="h-0.5 flex-grow bg-gray-700"></div>
                  </div>
                  <ul className="space-y-3 pl-16">
                    {period.goals.map((goal, i) => <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                        <span className="text-gray-300 text-sm">{goal}</span>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Security Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-800 rounded-lg hover:bg-gray-800/20 transition-colors">
              <h4 className="font-bold text-white mb-3">Defense in Depth</h4>
              <p className="text-gray-400 text-sm">
                Security requires multiple layers of protection spanning
                technical controls, human awareness, and procedural safeguards
                to create comprehensive defense.
              </p>
            </div>
            <div className="p-4 border border-gray-800 rounded-lg hover:bg-gray-800/20 transition-colors">
              <h4 className="font-bold text-white mb-3">Proactive Vigilance</h4>
              <p className="text-gray-400 text-sm">
                The most effective security posture anticipates threats before
                they materialize, requiring continuous monitoring, threat
                intelligence, and adaptive controls.
              </p>
            </div>
            <div className="p-4 border border-gray-800 rounded-lg hover:bg-gray-800/20 transition-colors">
              <h4 className="font-bold text-white mb-3">Strategic Alignment</h4>
              <p className="text-gray-400 text-sm">
                Security must enable business objectives while managing risk
                appropriately, balancing protection with operational efficiency
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}