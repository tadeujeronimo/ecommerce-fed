import React from "react";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 flex items-center justify-center h-8 border-t-2 text-text bg-background-alt">
      <p className="text-sm/[10px] text-gray-500">
        © 2024 {process.env.REACT_APP_NAME} E-commerce
      </p>
    </footer>
  );
};

export default Footer;
