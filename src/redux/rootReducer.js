import { combineReducers } from "redux";
import { questionDetailsReducer } from "./question-details";
import { questionsReducer } from "./questions";

const rootReducer = combineReducers({
  questions: questionsReducer,
  questionDetails: questionDetailsReducer,
});

export default rootReducer;
