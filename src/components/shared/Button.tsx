import React from 'react';

const Button = ({ children, handleClick }: { children: React.ReactNode; handleClick?: () => void }) => {
  return (
    <button
      className="rounded-md border border-zinc-200 bg-primary-foreground px-3 py-2 shadow-md hover:bg-secondary hover:shadow-inner hover:shadow-black dark:border-zinc-800 dark:bg-primary dark:hover:bg-secondary-foreground"
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
