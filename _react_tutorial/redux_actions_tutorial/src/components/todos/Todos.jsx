import React from 'react';
import styled from 'styled-components';
const TodoBlock = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  background-color: #fff;
  width: 600px;
  height: 800px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.15);
  overflow: hidden;
`;

const TodoHeaderBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: #83dace;
`;
const TodoList = styled.div``;
const TodosFooter = styled.div``;
const Todos = () => {
  return (
    <TodoBlock>
      <TodoHeaderBlock>오늘 할 일</TodoHeaderBlock>
      <TodoList>
        <li>공부하기</li>
        <li>일하기</li>
        <li>게임하기</li>
      </TodoList>
      <TodosFooter></TodosFooter>
    </TodoBlock>
  );
};

export default Todos;
