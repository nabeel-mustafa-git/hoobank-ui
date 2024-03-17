import React from "react";

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient poppins text-[18px] text-primary outline-none rounded ${styles} hover:text-white`}>
      Get Started
    </button>
  );
};

export default Button;
