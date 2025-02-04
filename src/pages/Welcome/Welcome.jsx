import React, { useState, useEffect } from "react";
import { FaEnvelope, FaGlobe } from "react-icons/fa";
import animationBg from "../../assets/wave.webp";

const Welcome = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Welcome to Hansaria Food Private Limited Research Team"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div
      className="h-full flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${animationBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-300 to-green-500 opacity-90"></div>
      <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          <span>{text}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6">
          Maize, Oil Seeds, Grain Price Market Outlook
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          &quot;Market Story January &quot;
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-green-700">
            <FaEnvelope />
            <a
              href="mailto:info@hansariafoods.com"
              className="underline hover:text-yellow-600"
            >
              info@hansariafood.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-green-700">
            <FaGlobe />
            <a
              href="https://www.hansariafood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-600"
            >
              www.hansariafood.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;