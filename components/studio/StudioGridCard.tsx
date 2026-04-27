"use client";

import { ArrowRight } from "lucide-react";
import { FadeInSection } from "../FadeInSection";
import React, { useRef } from "react";
import { useTransition } from "../transitions/TransitionContext";
import { motion } from "framer-motion";


interface StudioGridCardProps {
  num: string;
  title: string;
  desc: string;
  img?: string;
  children?: React.ReactNode;
  colSpan?: string;
  delay?: number;
  onClick?: () => void;
  href?: string;
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
    <motion.div 
      className={`${colSpan}`} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <motion.div 
        className="group relative w-full h-[400px] md:h-[450px] overflow-hidden bg-[#0a0b10] cursor-pointer rounded-sm"
        whileHover="hover"
      >
        {/* Background Layer with Framer Motion */}
        <motion.div className="absolute inset-0 w-full h-full">
          {img ? (
            <motion.img
              src={img}
              alt={title}
              variants={{
                hover: { scale: 1.08, filter: "grayscale(0%) brightness(0.8)", opacity: 0.9 }
              }}
              initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal"
            />
          ) : (
            <motion.div 
              variants={{ hover: { scale: 1.05, opacity: 1 } }}
              initial={{ opacity: 0.6 }}
              className="w-full h-full"
            >
              {children}
            </motion.div>
          )}
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
          variants={{ hover: { opacity: 0.6 } }}
          initial={{ opacity: 0.9 }}
        />

        {/* Card Content */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end text-[#fcfcfc]">
          <motion.div
            variants={{
              hover: { y: 0 }
            }}
            initial={{ y: 20 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.span 
                className="text-xs tracking-[0.3em] text-gray-400 font-mono"
                variants={{ hover: { color: "#4ade80" } }}
              >
                {num} //
              </motion.span>
              <motion.div 
                variants={{
                  hover: { opacity: 1, x: 0, scale: 1.2 }
                }}
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </div>

            <motion.h3 
              className="text-3xl md:text-4xl font-serif mb-6 tracking-tight leading-none"
              variants={{ hover: { x: 5 } }}
            >
              {title}
            </motion.h3>

            <motion.div 
              className="overflow-hidden"
              variants={{
                hover: { height: "auto", opacity: 1 },
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <p className="text-gray-300 font-light leading-relaxed text-base max-w-[90%] pb-2">
                {desc}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

