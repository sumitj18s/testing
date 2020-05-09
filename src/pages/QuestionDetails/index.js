import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateVote } from "../../redux/question-details";
import Layout from "../../components/Layout";
import RadioButton from "../../components/RadioButton";

function QuestionDetailsList() {
  const questionDetail = useSelector((state) => state.questionDetails.response);
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
  return (
    <Layout>
      {!message && (
        <form>
          <>
            {questionDetail.choices &&
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
      )}
      {message && (
        <>
          <div>{message}</div>
          <Link to="/">Goto Home</Link>
        </>
      )}
    </Layout>
  );
}

export default QuestionDetailsList;
