import React from "react";

const Input = ({ label, Itype, Iname, Ivalue, IonChange }) => {
  return (
    <div style={{ border: "1px solid pink" }}>
      <label>{label}</label>
      <input
        type={Itype}
        name={Iname}
        value={Ivalue}
        onChange={IonChange}
        required
      />
    </div>
  );
};

export default Input;
