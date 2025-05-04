import React, { useState, useEffect } from "react";

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
   const [displayText, setDisplayText] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      if (delay > 0) {
         const delayTimeout = setTimeout(() => {
            startTyping();
         }, delay);

         return () => clearTimeout(delayTimeout);
      } else {
         startTyping();
      }
   }, []);

   const startTyping = () => {
      if (currentIndex < text.length) {
         const timeout = setTimeout(() => {
            setDisplayText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
         }, speed);

         return () => clearTimeout(timeout);
      } else if (onComplete) {
         onComplete();
      }
   };

   useEffect(() => {
      startTyping();
   }, [currentIndex]);

   return <span className={className}>{displayText}</span>;
};
