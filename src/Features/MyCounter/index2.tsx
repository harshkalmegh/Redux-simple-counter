import { connect } from "react-redux";
import { ADD, SUB } from "./action";
import Comp from "./Comp";
import Component from "./Component";

const dispatch = (dispatch: any) => {
  return {
    increment: () => {
      dispatch({ type: ADD });
    },
    decrement: () => {
      dispatch({ type: SUB });
    },
  };
};

const state = (state: any) => {
  return {
    counter: state.calculateReducer,
  };
};

export default connect(state, dispatch)(Comp);
