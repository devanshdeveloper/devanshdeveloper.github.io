import React from "react";

function InputField({ name, label, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-white text-xl">
        {label}
      </label>
      <input
        className="w-full md:w-2/3 border-2 border-dark-100 focus:border-brand-default outline-none rounded-md px-2 py-1 transition-all duration-200 mt-1"
        {...props}
        {...{ name }}
      />
    </div>
  );
}
export function SelectInput({ name, label, options, ...props }) {

  return (
    <div>
      <label htmlFor={name} className="text-white text-xl">
        {label}
      </label>
      <select
        className="w-full border-2 border-dark-100 focus:border-brand-default outline-none rounded-md px-2 py-1 transition-all duration-200 mt-1"
        {...props}
        {...{ name }}
      >
        {options.map((option , i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ name, label, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-white text-xl">
        {label}
      </label>
      <textarea
        className="w-full md:w-2/3 border-2 border-dark-100 focus:border-brand-default outline-none rounded-md px-2 py-1 transition-all duration-200 mt-1"
        {...props}
        {...{ name }}
      />
    </div>
  );
}

export default InputField;
