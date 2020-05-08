import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";

import { fetchAPI, fetchSecondAPI } from "../../redux/placeholder";
import Layout from "../../Components/Layout";

function QuestionDetailsList() {
  return <Layout>Hello Brother</Layout>;
}

export default QuestionDetailsList;
