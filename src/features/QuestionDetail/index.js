import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVoteAPI } from "../../redux/placeholder";
import Layout from "../../Components/Layout";
import RadioButton from "../../Components/RadioButton";

function QuestionDetailsList() {
  const questionDetail = useSelector((state) => state.detail);
  const [optionValue, setOptionValue] = useState();
  const dispach = useDispatch();
  const [message, setMessage] = useState("");

  const handleOptionChange = (e) => {
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
                  key={qd.url}
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
