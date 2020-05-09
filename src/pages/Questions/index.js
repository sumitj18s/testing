import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { loadQuestions } from "../../redux/questions";
import { loadQuestionDetails } from "../../redux/question-details";
import Layout from "../../components/Layout";

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
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick(url) {
    history.push("/detail");
    dispatch(loadQuestionDetails(url));
  }

  return (
    <Question onClick={() => handleClick(props.url)}>{props.children}</Question>
  );
}

function QuestionsList() {
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questions.response);

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <Layout>
      {questionsList &&
        questionsList.map((q) => {
          return (
            <QuestionBox key={q.url} url={q.url}>
              {q.question}
            </QuestionBox>
          );
        })}
    </Layout>
  );
}

export default QuestionsList;
