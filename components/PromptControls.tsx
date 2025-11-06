import React from 'react';

interface PromptControlsProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export const PromptControls: React.FC<PromptControlsProps> = ({
  prompt,
  onPromptChange,
  onGenerate,
  isLoading,
  disabled
}) => {
  return (
    <div className="flex flex-col space-y-4">
       <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="e.g., Make it a fire-type, add futuristic armor..."
        className="w-full p-3 bg-black/50 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors placeholder-gray-500 h-24 resize-none shadow-inner"
        disabled={disabled || isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading || disabled || !prompt}
        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-gray-900 transform hover:scale-105 shadow-lg shadow-orange-600/20"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Crafting...
          </>
        ) : (
          'CRAFT!'
        )}
      </button>
    </div>
  );
};