import { ActionTypes } from "../constants/action-types";

const initialState = {
  questions: [],
};
export const questionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_QUESTIONS:
      return { ...state, questions: payload };
    case ActionTypes.DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== payload
        ),
      };
    case ActionTypes.ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, payload],
      };
    default:
      return state;
  }
};

export const selectedQuestionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_QUESTION:
      return { ...state, ...payload };
    default:
      return state;
  }
};
