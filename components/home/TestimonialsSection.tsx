"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  { quote: "Zynatrix didn't just build an app; they engineered an entirely new way for our data to communicate. The architectural elegance is unmatched.", author: "Sarah Jenkins", role: "CTO, Aether Financial" },
  { quote: "Their approach to AI integration is refreshingly pragmatic. They cut through the hype and delivered a logic engine that actually improved our margins by 18%.", author: "Marcus Vance", role: "VP Engineering, Nexus Logistics" },
  { quote: "A rare studio that understands both deep technical constraints and premium frontend aesthetics. They delivered a product that looks beautiful and runs flawlessly.", author: "Elena Rostova", role: "Founder, OmniHealth Data" }
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-12">Trusted By</p>
      
      <div className="min-h-[250px] flex flex-col justify-center transition-opacity duration-500">
        <p className="text-2xl md:text-4xl font-light italic leading-tight text-gray-800">
          "{testimonials[activeTestimonial].quote}"
        </p>
        <div className="mt-8">
          <p className="font-bold text-lg text-ink">{testimonials[activeTestimonial].author}</p>
          <p className="text-sm text-gray-500 font-mono mt-1">{testimonials[activeTestimonial].role}</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, i) => (
          <button 
            key={i}
            onClick={() => setActiveTestimonial(i)}
            className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === i ? 'bg-emerald-500 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
