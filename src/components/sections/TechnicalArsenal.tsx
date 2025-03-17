import React from 'react';
import { Shield, FileSearch, BarChart3 } from 'lucide-react';
export function TechnicalArsenal() {
  const categories = [{
    id: 'defense',
    title: 'Defense & Protection',
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    description: 'Hardening systems against threats through proactive security measures',
    skills: [{
      name: 'Network Security',
      level: 60
    }, {
      name: 'Firewall Configuration',
      level: 35
    }, {
      name: 'System Hardening',
      level: 50
    }, {
      name: 'Endpoint Protection',
      level: 20
    }, {
      name: 'Security Architecture',
      level: 10
    }]
  }, {
    id: 'analysis',
    title: 'Analysis & Intelligence',
    icon: <FileSearch className="h-6 w-6 text-purple-400" />,
    description: 'Identifying threats and vulnerabilities through meticulous investigation',
    skills: [{
      name: 'Threat Intelligence',
      level: 60
    }, {
      name: 'Digital Forensics',
      level: 80
    }, {
      name: 'Malware Analysis',
      level: 40
    }, {
      name: 'Log Analysis',
      level: 20
    }, {
      name: 'Penetration Testing',
      level: 45
    }]
  }, {
    id: 'strategy',
    title: 'Strategy & Governance',
    icon: <BarChart3 className="h-6 w-6 text-green-400" />,
    description: 'Developing comprehensive security frameworks and policies',
    skills: [{
      name: 'Risk Management',
      level: 30
    }, {
      name: 'Security Compliance',
      level: 50
    }, {
      name: 'Incident Response',
      level: 45
    }, {
      name: 'Security Awareness',
      level: 70
    }, {
      name: 'Disaster Recovery',
      level: 10
    }]
  }];
  const certifications = [{
    name: 'TCSE 1 - SecureTrack+',
    status: 'Certified',
    year: '2024'
  }, {
    name: 'TCSE 2 - SecureChange+',
    status: 'Certified',
    year: '2025'
  }, {
    name: 'TCSE 3 - Administration',
    status: 'Certified',
    year: '2025'
  }, {
    name: 'TCSE 4 - Troubleshooting',
    status: 'Certified',
    year: '2025'
  }, {
    name: 'MOOC GDPR',
    status: 'Certified',
    year: '2025'
  }, {
    name: 'BTL1',
    status: 'In Progress',
    year: '2025'
  }, {
    name: 'CompTIA Security+',
    status: 'In Progress',
    year: '2025'
  }, {
    name: 'MOOC GDPR',
    status: 'Certified',
    year: '2025'
  }, {
    name: 'CySA+',
    status: 'In Progress',
    year: '2025'
  }, {
    name: 'CC',
    status: 'In Progress',
    year: '2025'
  }, {
    name: 'CISM',
    status: 'In Progress',
    year: '2025'
  }, {
    name: 'CISA',
    status: 'In Progress',
    year: '2025'
  }];
  const tools = ['BTLO', 'THM', 'Wireshark', 'Metasploit', 'Burp Suite', 'Splunk', 'Kali Linux'];
  return <section id="arsenal" className="py-20 bg-[#071525]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive collection of cybersecurity skills, certifications,
            and tools strategically developed to identify, analyze, and mitigate
            security threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map(category => <div key={category.id} className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.skills.map(skill => <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-purple-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className={`h-2 rounded-full ${category.id === 'defense' ? 'bg-cyan-500' : category.id === 'analysis' ? 'bg-purple-500' : 'bg-green-500'}`} style={{
                  width: `${skill.level}%`
                }}></div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Certifications */}
          <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-gray-800 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Certifications & Credentials
            </h3>
            <div className="space-y-4">
              {certifications.map(cert => <div key={cert.name} className="flex items-center justify-between p-3 border border-gray-800 rounded-md hover:bg-gray-800/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.year}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.status === 'Certified' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                    {cert.status}
                  </span>
                </div>)}
            </div>
          </div>
          {/* Personal Lab */}
          <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-gray-800 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Personal Security Laboratory
            </h3>
            <p className="text-gray-400 mb-6">
              A dedicated environment for testing security tools, analyzing
              malware, and simulating attack scenarios in isolated conditions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tools.map(tool => <div key={tool} className="bg-gray-800/50 px-3 py-2 rounded-md text-center">
                  <span className="font-mono text-sm text-gray-300">
                    {tool}
                  </span>
                </div>)}
            </div>
          </div>
        </div>
        {/* Security Methodology Diagram */}
        <div className="bg-[#0c1a2b] border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Security Analysis Methodology
          </h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative py-10">
                {/* Connecting line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2"></div>
                {/* Methodology steps */}
                {[{
                title: 'Risk Assessment',
                description: 'Evaluating potential impact and likelihood of security threats',
                color: 'border-purple-500'
              }, {
                title: 'Implementation & Hardening',
                description: 'Deploying security measures with continuous improvement',
                color: 'border-yellow-500'
              }, {
                title: 'Monitoring',
                description: 'Continuous surveillance',
                color: 'border-red-500'
              }].map((step, index) => <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 md:pr-0 md:text-right md:mr-1/2 md:pr-12' : 'pl-8 md:pl-0 md:text-left md:ml-1/2 md:pl-12'}`}>
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:left-full' : 'left-0 md:left-0'} mt-1.5 md:mt-2.5 w-6 h-6 rounded-full border-4 ${step.color} bg-[#0c1a2b] transform md:translate-x-[-50%]`}></div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                      <h4 className="font-bold text-white text-lg">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 mt-2 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}