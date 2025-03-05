'use client';

import React, { useEffect, useState } from 'react';
import Button from '@shared/Button';
import { useDarkModeStore } from '@/stores/darkModeStore';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const setDarkMode = useDarkModeStore((state) => state.setDarkMode);

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

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(JSON.parse(savedCount));
    }
  }, []);

  useEffect(() => {
    setDarkMode(count >= 5);
    localStorage.setItem('count', JSON.stringify(count));
  }, [count, setDarkMode]);

  return (
    <div className="flex w-fit items-center gap-10 rounded-lg bg-accent px-10 py-8 shadow-md dark:bg-accent-foreground">
      <Button handleClick={handleDecrement}>감소</Button>
      <p className="text-4xl font-bold">{count}</p>
      <Button handleClick={handleIncrement}>증가</Button>
    </div>
  );
};

export default Counter;
