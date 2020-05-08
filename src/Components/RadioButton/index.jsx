import React from "react";
import styled from "styled-components";
import theme from "../../theme";

function RadioButton(props) {
  return (
    <label>
      <input
        type="radio"
        value={props.url}
        onChange={props.handleOptionChange}
        checked={props.checked}
      />
      {props.text}
    </label>
  );
}

export default RadioButton;
