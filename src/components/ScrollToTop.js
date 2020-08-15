import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../App.css';

const ScrollTopArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 183) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 183) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 48, display: showScroll ? 'block' : 'none' }} />
  );
}

export default ScrollTopArrow;