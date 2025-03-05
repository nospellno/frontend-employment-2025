import React from 'react';

const Group1Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1>Group 1 레이아웃입니다.</h1>
      {children}
    </section>
  );
};

export default Group1Layout;
