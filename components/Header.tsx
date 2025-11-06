import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black/30 backdrop-blur-sm shadow-lg shadow-black/50 sticky top-0 z-10 border-b border-orange-500/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Pal Sphere-like Icon */}
          <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-2xl font-bold text-white tracking-wider uppercase">
            Gemini <span className="text-orange-500">Pal-Crafter</span>
          </h1>
        </div>
        <p className="text-sm text-gray-400 hidden md:block">Powered by Gemini 2.5 Flash Image</p>
      </div>
    </header>
  );
};