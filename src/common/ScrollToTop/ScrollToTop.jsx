import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600"
        onClick={scrollToTop}
      >
        <ArrowUpCircle size={24} />
      </div>
    )
  );
};

export default ScrollToTop;
