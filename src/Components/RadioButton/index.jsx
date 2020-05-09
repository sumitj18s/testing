import React from "react";
import styled from "styled-components";

const Title = styled.span`
  margin-left: 1rem;
`;
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
      <Title>{props.text}</Title>
    </label>
  );
}

export default RadioButton;
