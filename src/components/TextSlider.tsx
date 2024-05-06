import  { useState, useEffect } from "react";

function TextSlider() {
  const textItems = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "This is the second text",
    "This is the third text",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 6000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [textItems.length]);

  return (
    <div className="slider-container flex justify-center items-left w-[40vw] text-[3.5vw] font-semibold">
      <div className="w-full max-w-3xl px-4">
        <div className="relative h-48">
          {textItems.map((text, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-700 ease-in-out ${
                currentTextIndex === index ? "opacity-100" : ""
              }`}
            >
              <p className="text-[3vw]  leading-[7.3vh] font-bold text-left">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {textItems.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`w-2 h-2 rounded-full bg-white mx-2 ${
                currentTextIndex === dotIndex ? "bg-gray-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextSlider;
