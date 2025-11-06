import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-white tracking-widest">Crafting your new creature...</p>
    </div>
  );
};