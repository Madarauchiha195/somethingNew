"use client";  
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { AuroraBackground } from '../components/ui/aurora-background';

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <AuroraBackground>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Logo */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            CreativeHub
          </h1>

          {/* Coming Soon Text */}
          <p className="text-2xl text-white/90 mb-12 text-center">
            Coming Soon
          </p>

          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
              text-white hover:bg-white/20 transition-all duration-300 
              shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)]"
          >
            Back to Home
          </button>
        </div>
      </AuroraBackground>
    </div>
      
      
  );
}

