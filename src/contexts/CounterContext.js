import React, { createContext, useReducer, useContext } from "react";

/** 
 * cerateContextにデフォルトの値を指定しなくて良い
 * 指定しない事で、Contextが初期化されていない事がわかる
 * defaultの値が必要になることはほとんどないので指定しない
 * typescriptを使っている場合は`type Value = {count: number} | undefined`のように指定する
*/
const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const counterInitialState = {
  count: 0
};

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'COUNT_UP':
      return {
        ...state,
        count: state.count + 1
      };
    case 'COUNT_DOWN':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      throw new Error('Unhandled action type: ', action.type);
  }
}

// stateのContextとdispatchのContextを分ける事で、stateを使用していないComponentで再レンダリングを避ける事ができる
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

export const useCounterState = () => {
  const state = useContext(CounterStateContext);
  if(state === undefined) {
    throw new Error('useCounterState must be used within a CounterProvider')
  }
  return state;
}

export const useCounterDispatch = () => {
  const dispatch = useContext(CounterDispatchContext);
  if(dispatch === undefined) {
    throw new Error('useCounterState must be used within a CounterProvider')
  }
  return dispatch;
}

export const useCounter = () => {
  return [useCounterState(), useCounterDispatch()];
}
