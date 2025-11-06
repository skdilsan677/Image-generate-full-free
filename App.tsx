import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ImageDisplay } from './components/ImageDisplay';
import { PromptControls } from './components/PromptControls';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { editImage } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';

const App: React.FC = () => {
  const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setOriginalImageFile(file);
    setOriginalImageUrl(URL.createObjectURL(file));
    setGeneratedImageUrl(null);
    setError(null);
  };

  const handleGenerate = useCallback(async () => {
    if (!originalImageFile || !prompt) {
      setError('Please provide a base image and a modification prompt.');
      return;
    }

    setIsLoading(true);
    setGeneratedImageUrl(null);
    setError(null);

    try {
      const { base64Data, mimeType } = await fileToBase64(originalImageFile);
      const resultBase64 = await editImage(base64Data, mimeType, prompt);
      setGeneratedImageUrl(`data:${mimeType};base64,${resultBase64}`);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [originalImageFile, prompt]);

  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Controls & Original Image */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-widest">1. Select Base Creature</h2>
            <ImageUploader onImageUpload={handleImageUpload} />
            <ImageDisplay title="Base Creature" imageUrl={originalImageUrl} />
            <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-widest">2. Enter Modification</h2>
            <PromptControls
              prompt={prompt}
              onPromptChange={setPrompt}
              onGenerate={handleGenerate}
              isLoading={isLoading}
              disabled={!originalImageFile}
            />
          </div>

          {/* Right Column: Generated Image */}
          <div className="flex flex-col space-y-6">
             <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-widest">3. Synthesized Result</h2>
             <div className="w-full aspect-square bg-black/50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600 relative overflow-hidden shadow-inner shadow-black/50">
                {isLoading && <Loader />}
                {error && !isLoading && <ErrorMessage message={error} />}
                {generatedImageUrl && !isLoading && !error && (
                    <ImageDisplay title="" imageUrl={generatedImageUrl} />
                )}
                {!generatedImageUrl && !isLoading && !error && (
                    <div className="text-center text-gray-400">
                        <p className="text-lg">Your new creature will appear here.</p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;