import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="absolute inset-0 bg-red-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 rounded-lg text-center">
        <svg className="w-12 h-12 text-red-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-red-200 font-semibold uppercase">Synthesis Failed</p>
        <p className="text-red-300 text-sm mt-1">{message}</p>
    </div>
  );
};