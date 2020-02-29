import React, { useCallback } from 'react';
import { useCounterDispatch } from '../contexts/CounterContext';

export const CountButton = () => {
  const dispatch = useCounterDispatch();

  const countDown = useCallback(() => dispatch({ type: 'COUNT_DOWN' }));
  const countUp = useCallback(() => dispatch({ type: 'COUNT_UP' }));

  return (
    <>
      <button onClick={countUp} >count up</button>
      <button onClick={countDown} >count down</button>
    </>
  );
};
