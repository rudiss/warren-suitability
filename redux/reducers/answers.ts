const INITIAL_STATE = {
  userAnswers: {},
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return {
        userAnswers: {
          ...state.userAnswers,
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
