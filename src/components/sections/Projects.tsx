import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
export function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const projects = [{
    id: 1,
    title: 'Enterprise Network Security Overhaul',
    category: 'defense',
    description: 'Complete redesign of network security architecture for a financial institution, implementing zero-trust principles.',
    problem: 'Outdated perimeter-based security with multiple vulnerabilities and compliance issues.',
    approach: 'Implemented segmentation, least-privilege access controls, and continuous monitoring.',
    challenges: 'Legacy systems integration and maintaining business operations during transition.',
    results: '85% reduction in security incidents, achieved regulatory compliance, reduced lateral movement risk.',
    tags: ['Zero Trust', 'Network Segmentation', 'Compliance']
  }, {
    id: 2,
    title: 'Advanced Persistent Threat Investigation',
    category: 'analysis',
    description: 'Forensic analysis and response to sophisticated APT targeting intellectual property.',
    problem: 'Undetected threat actor with extended dwell time extracting sensitive R&D data.',
    approach: 'Digital forensics, malware reverse engineering, and threat intelligence correlation.',
    challenges: 'Sophisticated evasion techniques and encrypted command & control channels.',
    results: 'Full threat actor identification, complete remediation, and enhanced detection capabilities.',
    tags: ['Threat Hunting', 'Digital Forensics', 'Incident Response']
  }, {
    id: 3,
    title: 'Security Operations Center Development',
    category: 'strategy',
    description: 'Design and implementation of a 24/7 SOC with integrated threat intelligence platform.',
    problem: 'Reactive security posture with siloed tools and limited visibility across infrastructure.',
    approach: 'Developed integrated security monitoring architecture with automated response capabilities.',
    challenges: 'Tool integration complexity and alert fatigue management.',
    results: 'Reduced mean time to detect from days to minutes, 60% increase in true positive alerts.',
    tags: ['SOC', 'SIEM', 'Automation']
  }, {
    id: 4,
    title: 'Cloud Security Framework Implementation',
    category: 'defense',
    description: 'Development of security controls and governance for multi-cloud environment.',
    problem: 'Rapid cloud adoption without consistent security controls or visibility.',
    approach: 'Created cloud security architecture with automated compliance scanning and remediation.',
    challenges: 'Diverse cloud service providers with varying security capabilities.',
    results: 'Standardized security controls across platforms, 95% compliance rate, automated remediation.',
    tags: ['Cloud Security', 'DevSecOps', 'Compliance']
  }];
  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);
  return <section id="projects" className="py-20 bg-[#0a1929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Operations & Missions
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Strategic security operations and technical missions demonstrating
            expertise in identifying, analyzing, and neutralizing complex
            cybersecurity threats.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#0c1a2b] rounded-lg border border-gray-800">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all' ? 'bg-purple-700 text-white' : 'text-gray-300 hover:text-white'}`}>
              All Operations
            </button>
            <button onClick={() => setActiveTab('defense')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'defense' ? 'bg-cyan-700 text-white' : 'text-gray-300 hover:text-white'}`}>
              <Shield className="inline-block mr-1 h-4 w-4" />
              Defense
            </button>
            <button onClick={() => setActiveTab('analysis')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'analysis' ? 'bg-purple-700 text-white' : 'text-gray-300 hover:text-white'}`}>
              <AlertTriangle className="inline-block mr-1 h-4 w-4" />
              Analysis
            </button>
            <button onClick={() => setActiveTab('strategy')} className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'strategy' ? 'bg-green-700 text-white' : 'text-gray-300 hover:text-white'}`}>
              <CheckCircle className="inline-block mr-1 h-4 w-4" />
              Strategy
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-[#0c1a2b] border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors">
              <div className={`p-1 ${project.category === 'defense' ? 'bg-cyan-700/20' : project.category === 'analysis' ? 'bg-purple-700/20' : 'bg-green-700/20'}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.category === 'defense' ? 'bg-cyan-900/30 text-cyan-400' : project.category === 'analysis' ? 'bg-purple-900/30 text-purple-400' : 'bg-green-900/30 text-green-400'}`}>
                    {project.category === 'defense' ? 'Defense' : project.category === 'analysis' ? 'Analysis' : 'Strategy'}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-red-400 mb-1">
                      THREAT IDENTIFIED
                    </h4>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-purple-400 mb-1">
                      TACTICAL APPROACH
                    </h4>
                    <p className="text-sm text-gray-400">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-yellow-400 mb-1">
                      OBSTACLES OVERCOME
                    </h4>
                    <p className="text-sm text-gray-400">
                      {project.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-green-400 mb-1">
                      MISSION OUTCOME
                    </h4>
                    <p className="text-sm text-gray-400">{project.results}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md font-mono">
                      {tag}
                    </span>)}
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    View Full Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Note: These are representative case studies. Specific details have
            been anonymized to protect client confidentiality.
          </p>
          <button className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-md transition-colors">
            Request Detailed Portfolio
          </button>
        </div>
      </div>
    </section>;
}