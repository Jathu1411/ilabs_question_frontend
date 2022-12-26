import { combineReducers } from "redux";
import { questionReducer, selectedQuestionReducer } from "./questionReducer";

export const reducers = combineReducers({
  allQuestions: questionReducer,
  question: selectedQuestionReducer,
});
