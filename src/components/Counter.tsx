'use client';

import React, { useState } from 'react';
import Button from '@shared/Button';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex w-fit items-center gap-10 rounded-lg bg-accent px-10 py-8 shadow-md">
      <Button handleClick={handleDecrement}>감소</Button>
      <p className="text-4xl font-bold">{count}</p>
      <Button handleClick={handleIncrement}>증가</Button>
    </div>
  );
};

export default Counter;
