import React, { useEffect, useState } from 'react';
 // RemixIcon from react-icons

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled below 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-[#f4f3f7] text-black font-bold w-[7vh] h-[7vh] rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
      >
       <i className="ri-arrow-up-line"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
