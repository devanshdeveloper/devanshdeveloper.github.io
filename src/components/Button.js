import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-brand-default px-4 py-2 mt-2 hover:bg-brand-dark focus:outline-none transition-all duration-200 hover:-translate-y-1 transform uppercase tracking-wide"
    >
      {children}
    </button>
  );
}

export default Button;
