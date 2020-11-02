import React from 'react';

const Page = ({ set, children }) => {
  const onClick = () => {
    set(false);
  };
  return (
    <div>
      {children}
      <button onClick={onClick}>닫기</button>
    </div>
  );
};

export default Page;
