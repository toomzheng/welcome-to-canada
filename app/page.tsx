'use client';

import { useState } from 'react';
import RotatingHeart from './components/RotatingHeart';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={() => setIsAnimating(true)}
    >
      <RotatingHeart isSliding={isAnimating} />
      <div 
        className={`absolute bottom-0 w-full text-center transform transition-transform duration-500 ${
          isAnimating ? '-translate-y-16' : 'translate-y-full'
        }`}
      >
        <h1 className="text-4xl font-serif mb-4 text-black">
          welcome to canada, sophia sanchez <span className="animate-pulse">&lt;3</span>
        </h1>
      </div>
    </main>
  );
}
