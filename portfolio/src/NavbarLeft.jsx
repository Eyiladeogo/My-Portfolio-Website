import React, { useEffect, useState } from "react";

function TypingEffect({ texts, typingSpeed, deletingSpeed, delay }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (subIndex === texts[currentTextIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(texts[currentTextIndex].substring(0, subIndex));
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <span>
      {displayedText}
      <span style={{ borderRight: `0.1em solid ${blink ? "black" : "transparent"}` }}></span>
    </span>
  );
}

export default function NavbarLeft() {
  const texts = ["EYILADEOGO", "ADEDAYO"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  return (
    
      <TypingEffect texts={texts} typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} delay={delay} />
    
  );
}
