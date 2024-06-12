import React, { useEffect, useState } from "react";

function TypingEffect({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, index, text, speed]);

  return <span>{displayedText}</span>;
}

export default function NavbarLeft() {
  const texts = ["EYILADEOGO", "ADEDAYO"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const changeText = () => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setDisplayedText("");
        setIndex(0);
        setIsTyping(true);
      }, 2000); // Change text every 2 seconds
    };

    if (isTyping) {
      const timeoutId = setTimeout(changeText, texts[currentTextIndex].length * 100 + 2000); // Typing speed * text length + delay
      return () => clearTimeout(timeoutId);
    }
  }, [isTyping, currentTextIndex]);

  return (
    <div className="navbar-left">
      {isTyping && <TypingEffect text={texts[currentTextIndex]} speed={100} />}
    </div>
  );
}
