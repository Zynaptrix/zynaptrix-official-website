"use client";

import { useState } from 'react';

const processData = [
  {
    title: "Mapping the ecosystem.",
    desc: "We begin by conducting a deep-dive analysis of your current infrastructure, identifying bottlenecks, and mapping the ideal data flow. This phase relies heavily on stakeholder interviews and technical audits to ensure all variables are accounted for before writing a single line of code.",
    deliverable: "Architecture Blueprint",
    time: "2-4 Weeks"
  },
  {
    title: "Engineering the intelligence.",
    desc: "Our data science and backend teams collaborate to construct the logic engines. Whether it's training custom ML models or building microservices, we focus on modularity and speed. We prioritize clean, test-driven code that can scale horizontally.",
    deliverable: "Core Algorithms & API",
    time: "6-12 Weeks"
  },
  {
    title: "Launching the infrastructure.",
    desc: "Integration of the frontend interfaces with the backend nervous system. We utilize containerized orchestration for deployment, ensuring zero-downtime rollouts and immediate stress-testing in live or staging environments.",
    deliverable: "Beta Ecosystem Launch",
    time: "2-3 Weeks"
  },
  {
    title: "Continuous R&D.",
    desc: "Post-launch, our Lab team monitors system telemetry. We don't just maintain; we optimize. We apply reinforcement learning to deployed models and continuously refactor codebases as new technological paradigms emerge.",
    deliverable: "Optimization Reports",
    time: "Ongoing"
  }
];

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">The Zynatrix Method</p>
        <h2 className="text-4xl md:text-5xl font-bold text-ink">Engineering the Intelligence</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Our proven four-stage protocol for translating complex requirements into robust digital realities.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 flex flex-col space-y-2 border-l-2 border-gray-200">
          {processData.map((item, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-left px-6 py-4 text-lg font-bold transition-all hover:bg-gray-50 focus:outline-none ${activeTab === i ? 'border-l-2 border-emerald-500 -ml-[2px] text-emerald-500' : 'text-gray-400 hover:text-black'}`}
            >
              {`0${i + 1}. ${item.title.split('.')[0]}`}
            </button>
          ))}
        </div>
        
        <div className="w-full md:w-2/3 bg-white p-12 border border-gray-200 rounded-lg min-h-[350px] flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-ink">{processData[activeTab].title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">{processData[activeTab].desc}</p>
          
          <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            <div>
              <p className="text-xs font-bold uppercase text-gray-400">Key Deliverable</p>
              <p className="font-mono text-sm mt-1 text-ink">{processData[activeTab].deliverable}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-400">Timeline</p>
              <p className="font-mono text-sm mt-1 text-ink">{processData[activeTab].time}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
