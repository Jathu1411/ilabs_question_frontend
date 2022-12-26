import { ActionTypes } from "../constants/action-types";

export const setQuestions = (questions) => {
  return {
    type: ActionTypes.SET_QUESTIONS,
    payload: questions,
  };
};

export const selectedQuestion = (question) => {
  return {
    type: ActionTypes.SELECTED_QUESTION,
    payload: question,
  };
};

export const deleteQuestion = (id) => {
  return {
    type: ActionTypes.DELETE_QUESTION,
    payload: id,
  };
};

export const addQuestion = (question) => {
  return {
    type: ActionTypes.ADD_QUESTION,
    payload: question,
  };
};
