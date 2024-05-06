import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient texi-[18px] text-primary outline-none font-poppins font-medium rounded-[12px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
