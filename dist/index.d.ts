import React from 'react';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    className?: string;
}
declare const TypewriterEffect: React.FC<TypewriterEffectProps>;

export { TypewriterEffect };
export type { TypewriterEffectProps };
