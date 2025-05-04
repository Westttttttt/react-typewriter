import React, { useState, useEffect } from 'react';

var TypewriterEffect = function (_a) {
    var text = _a.text, _b = _a.speed, speed = _b === void 0 ? 100 : _b, _c = _a.delay, delay = _c === void 0 ? 0 : _c, onComplete = _a.onComplete, className = _a.className;
    var _d = useState(""), displayText = _d[0], setDisplayText = _d[1];
    var _e = useState(0), currentIndex = _e[0], setCurrentIndex = _e[1];
    useEffect(function () {
        if (delay > 0) {
            var delayTimeout_1 = setTimeout(function () {
                startTyping();
            }, delay);
            return function () { return clearTimeout(delayTimeout_1); };
        }
        else {
            startTyping();
        }
    }, []);
    var startTyping = function () {
        if (currentIndex < text.length) {
            var timeout_1 = setTimeout(function () {
                setDisplayText(function (prev) { return prev + text[currentIndex]; });
                setCurrentIndex(function (prev) { return prev + 1; });
            }, speed);
            return function () { return clearTimeout(timeout_1); };
        }
        else if (onComplete) {
            onComplete();
        }
    };
    useEffect(function () {
        startTyping();
    }, [currentIndex]);
    return React.createElement("span", { className: className }, displayText);
};

export { TypewriterEffect };
