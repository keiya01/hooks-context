import React from 'react';
import '../stylesheet.css';
import { CounterProvider } from '../contexts/CounterContext';
import { Counter } from './Counter';
import { CountButton } from './CountButton';

export const App = () => {
  return (
    <CounterProvider>
      <div>
        <Counter />
        <CountButton />
      </div>
    </CounterProvider>
  );
};
