'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </h1>
  );
}
