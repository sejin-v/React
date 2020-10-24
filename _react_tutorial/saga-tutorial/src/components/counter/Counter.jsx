import React from 'react';

const Counter = ({ count, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
};

export default Counter;
