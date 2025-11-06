import React from 'react';

interface ImageDisplayProps {
  title: string;
  imageUrl: string | null;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ title, imageUrl }) => {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold text-gray-300 mb-2 uppercase tracking-wider">{title}</h3>}
      <div className="w-full aspect-square bg-black/50 rounded-lg flex items-center justify-center border-2 border-gray-600 overflow-hidden shadow-inner shadow-black/50">
        {imageUrl ? (
          <img src={imageUrl} alt={title || 'display image'} className="w-full h-full object-contain" />
        ) : (
          <div className="text-center text-gray-500 p-4">
             <svg className="mx-auto h-12 w-12 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8a4 4 0 01-4 4H28m0-18v8a4 4 0 01-4 4H12m0-18h12a4 4 0 014 4v4m0 0l-4-4m4 4l4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="mt-2 text-sm">No creature selected</p>
          </div>
        )}
      </div>
    </div>
  );
};