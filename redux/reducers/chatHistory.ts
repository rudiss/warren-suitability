const INITIAL_STATE = {
  messages: [],
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_CHAT':
      return {
        messages: [...state.messages, action.payload.messages],
      };
    default:
      return {
        ...state,
      };
  }
};

export default answerReducer;
