import React from "react";

function RadioButton(props) {
  return (
    <label htmlFor={props.text}>
      <input
        type="radio"
        value={props.url}
        onChange={props.handleOptionChange}
        checked={props.checked}
        id={props.text}
      />
      {props.text}
    </label>
  );
}

export default RadioButton;
