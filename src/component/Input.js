import React from "react";
import "../css/form.css";

const Input = ({ label, Itype, Iname, Ivalue, IonChange, Mvalue }) => {
  return (
    <div className="wf-input">
      <label>{label}</label>
      <input
        type={Itype}
        name={Iname}
        value={Ivalue}
        onChange={IonChange}
        // defaultValue={Mvalue}
        // key={Mvalue}
        required
      />
      {/* <input type="text" name="테스트" defaultValue={Mvalue} key={Mvalue} /> */}
    </div>
  );
};

export default Input;
