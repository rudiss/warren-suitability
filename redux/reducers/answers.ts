const INITIAL_STATE = {
  answers: {},
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return {
        answers: {
          ...state.answers,
          ...action.payload.answer,
        },
        id: action.payload.id,
      };
    default:
      return {
        ...state,
      };
  }
};

export default answerReducer;
