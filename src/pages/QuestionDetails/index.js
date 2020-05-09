import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateVote } from "../../redux/question-details";
import Layout from "../../components/Layout";
import RadioButton from "../../components/RadioButton";
import styled from "styled-components";
import Button from "../../components/Button";

function QuestionDetailsList() {
  const questionDetails = useSelector(
    (state) => state.questionDetails.response
  );
  const [optionValue, setOptionValue] = useState();
  const dispach = useDispatch();
  const [message, setMessage] = useState("");

  const handleOptionChange = (e) => {
    setOptionValue(e.currentTarget.value);
  };

  const handleOnClick = () => {
    dispach(updateVote(optionValue));
    setMessage("Submitted your vote.");
    setOptionValue("");
  };

  const Wrapper = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    & > label {
      padding: 1rem 0;
    }

    & > button {
      margin: 2rem 0 4rem 0;
    }
  `;

  return (
    <Layout>
      {message && (
        <>
          <h3>{message}</h3>
        </>
      )}
      {!message && (
        <form>
          <Wrapper>
            <h3>{questionDetails && questionDetails.question}</h3>
            {questionDetails.choices &&
              questionDetails.choices.map((qd) => {
                return (
                  <RadioButton
                    text={qd.choice}
                    url={qd.url}
                    handleOptionChange={handleOptionChange}
                    checked={qd.url === optionValue}
                    key={qd.url}
                  />
                );
              })}
            <Button onClick={handleOnClick}>Vote</Button>
          </Wrapper>
        </form>
      )}
      <Link to="/">Goto Home</Link>
    </Layout>
  );
}

export default QuestionDetailsList;
