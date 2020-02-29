import React from 'react';
import { useCounter } from '../contexts/CounterContext';

export const Counter = () => {
  const [state] = useCounter();
  
  return (
    <h1>{state.count}</h1>
  );
};
