import { ADD, SUB } from "./action";

const InitialValue = {
  count: 0,
};

const calculateReducer = (state = InitialValue, action: any) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUB:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default calculateReducer
