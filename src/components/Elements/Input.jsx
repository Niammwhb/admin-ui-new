import React from "react";

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-03",
    label, // ⬅️ TANGKAP
    Label, // ⬅️ TANGKAP (biar aman)
    ...rest
  } = props;

  return (
    <input
      id={id}
      className={`py-3 pl-4 text-sm rounded-md w-full border text-gray-01 
        ${border} focus:border-black focus:outline-none focus:ring-0 
        ${backgroundColor || ""}
      `}
      {...rest}
    />
  );
}

export default Input;
