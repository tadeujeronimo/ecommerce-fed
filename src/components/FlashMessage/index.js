import React, { useState, useEffect } from "react";

const FlashMessage = ({ children, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  return (
    <div className="p-4 mb-5 text-green-800 bg-green-100 rounded-md shadow">
      {children}
    </div>
  );
};

export default FlashMessage;
