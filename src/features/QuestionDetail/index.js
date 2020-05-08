import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { fetchVoteAPI } from "../../redux/placeholder";
import Layout from "../../Components/Layout";
import RadioButton from "../../Components/RadioButton";

function QuestionDetailsList() {
  const questionDetail = useSelector((state) => state.detail);
  const [optionValue, setOptionValue] = useState();
  const dispach = useDispatch();
  const [message, setMessage] = useState("");
  // const questionDetail = {
  //   choices: [
  //     { choice: "A", url: "1" },
  //     { choice: "B", url: "2" },
  //     { choice: "C", url: "3" },
  //     { choice: "D", url: "4" },
  //   ],
  // };
  const handleOptionChange = (e) => {
    console.log(e.currentTarget.value);
    setOptionValue(e.currentTarget.value);
  };

  const handleOnClick = () => {
    dispach(fetchVoteAPI(optionValue));
    setMessage("Submitted your vote.");
    setOptionValue("");
  };

  return (
    <Layout>
      <form>
        <>
          {questionDetail &&
            questionDetail.choices.map((qd) => {
              return (
                <RadioButton
                  text={qd.choice}
                  url={qd.url}
                  handleOptionChange={handleOptionChange}
                  checked={qd.url === optionValue}
                />
              );
            })}
          <input type="button" value="Vote" onClick={handleOnClick} />
        </>
      </form>
      {message && (
        <>
          <label>{message}</label>
          <a href="/">Home</a>
        </>
      )}
    </Layout>
  );
}

export default QuestionDetailsList;
