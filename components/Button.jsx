import React from "react";

const Button = ({className}) => {
  return (
    <button className={`w-fit px-5 py-2.5 font-semibold transition-colors cursor-pointer ${className || ''}`}>
      Start Project
    </button>
  );
};

export default Button;
