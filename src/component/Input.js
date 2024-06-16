import React from "react";

const Input = ({ label, Itype, Iname, Ivalue, IonChange, Mvalue }) => {
  return (
    <div style={{ border: "1px solid pink" }}>
      <label>{label}</label>
      <input
        type={Itype}
        name={Iname}
        value={Ivalue}
        onChange={IonChange}
        defaultValue={Mvalue}
        // key={Mvalue}
        required
      />
      {/* <input type="text" name="테스트" defaultValue={Mvalue} key={Mvalue} /> */}
    </div>
  );
};

export default Input;
