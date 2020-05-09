import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default RadioButton;
