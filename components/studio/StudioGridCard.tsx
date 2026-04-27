"use client";

import { ArrowRight } from "lucide-react";
import { FadeInSection } from "../FadeInSection";
import React from "react";

interface StudioGridCardProps {
  num: string;
  title: string;
  desc: string;
  img?: string;
  children?: React.ReactNode;
  colSpan?: string;
  delay?: number;
}

export function StudioGridCard({
  num,
  title,
  desc,
  img,
  children,
  colSpan = "lg:col-span-1",
  delay = 0,
}: StudioGridCardProps) {
  return (
    <div className={`${colSpan}`}>
      <FadeInSection delay={delay}>
        <div className="group relative w-full h-[400px] md:h-[450px] overflow-hidden bg-[#0a0b10] cursor-pointer rounded-sm">
          {/* Background Layer */}
          {img ? (
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full opacity-60 grayscale mix-blend-luminosity transition-all duration-700 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100">
              {children}
            </div>
          )}

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

          {/* Card Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-[#fcfcfc]">
            <div className="transform transition-all duration-500 translate-y-12 group-hover:translate-y-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.2em] text-gray-400 font-mono transition-colors duration-500 group-hover:text-[#4ade80]">
                  {num} //
                </span>
                <ArrowRight
                  size={20}
                  className="opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">{title}</h3>

              <div className="overflow-hidden">
                <p className="text-gray-300 font-light leading-relaxed text-sm opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
