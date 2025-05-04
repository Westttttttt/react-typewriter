import React from "react";
export interface TypewriterEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    className?: string;
}
export declare const TypewriterEffect: React.FC<TypewriterEffectProps>;
