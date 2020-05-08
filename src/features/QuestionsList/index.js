import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";

import { fetchAPI, fetchSecondAPI } from "../../redux/placeholder";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";

const Question = styled.div`
  font-size: 1.5rem;
  display: flex;
  padding: 2rem;
  font-weight: bold;
  width: 50%;
  padding: 1.5rem;
  border: 1px green solid;
  margin: 2rem;
  cursor: pointer;
`;

function QuestionBox(props) {
  return (
    <Question
      onClick={() => {
        console.log("aaa--bbb");
      }}
    >
      {props.children}
    </Question>
  );
}

function QuestionsList() {
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <>
      <Header />
      <Layout>
        {questionsList.length > 0 &&
          questionsList.map((q) => {
            return <QuestionBox>{q.question}</QuestionBox>;
          })}
      </Layout>
    </>
  );
}

export default QuestionsList;
