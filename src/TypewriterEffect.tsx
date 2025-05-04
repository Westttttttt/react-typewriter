import React, { useEffect, useState } from 'react';

export interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  delay = 0,
  onComplete,
  className,
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    // Reset the text when component mounts or text changes
    setDisplayText('');
    
    // Start typing after the initial delay
    timeoutId = setTimeout(() => {
      let currentIndex = 0;
      
      const typeText = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex += 1;
          timeoutId = setTimeout(typeText, speed);
        } else {
          onComplete?.();
        }
      };
      
      typeText();
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, onComplete]);

  return <span className={className}>{displayText}</span>;
};

export default TypewriterEffect;