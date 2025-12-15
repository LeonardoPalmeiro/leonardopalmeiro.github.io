'use client'
import React, { useState, useEffect } from 'react';

export default function UnderConstruction() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Animated Construction Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative bg-slate-800 rounded-full p-8 border-4 border-blue-500 shadow-2xl">
            <svg className="h-32 w-32 text-yellow-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>

        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
            Under Construction
            <span className="inline-block w-12 text-left">{dots}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-medium">
            We're building something awesome!
          </p>
        </div>

        {/* Funny Professional Message */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-xl max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            Our team of highly caffeinated developers is hard at work. 
            We promise we're not just playing ping-pong and arguing about tabs vs spaces.
            <span className="block mt-4 text-blue-400 font-semibold">
              (Okay, maybe a little bit of both.)
            </span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto space-y-3">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progress</span>
            <span>73%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full shadow-lg" style={{ width: '73%', transition: 'width 2s ease-in-out' }}></div>
          </div>
          <p className="text-xs text-gray-500 italic">
            *Progress bar may or may not be accurate
          </p>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400">42</div>
            <div className="text-sm text-gray-400">Cups of Coffee</div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400">∞</div>
            <div className="text-sm text-gray-400">Lines of Code</div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400">99%</div>
            <div className="text-sm text-gray-400">Bug Free*</div>
          </div>
        </div>

        {/* CTA 
        <div className="space-y-4 pt-8">
          <p className="text-gray-400">Want to be notified when we launch?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your.email@example.com"
              className="w-full sm:flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
        */}
        {/* Footer Note */}
        <p className="text-sm text-gray-500 pt-8">
          Expected launch: Soon™ | Follow us on social media for updates
        </p>
      </div>
    </div>
  );
}