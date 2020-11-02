import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const Project = styled.div`
  border: 1px solid green;
  height: 250px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ProjectBlock = styled.div`
  position: fixed;

  border: 1px solid green;
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  const [modal, setModal] = useState(false);
  const onClickHandler = () => {
    setModal(!modal);
  };
  return (
    <ProjectBlock>
      <Project>
        <div>Login</div>
        <button onClick={onClickHandler}>로그인</button>
        <Modal visble={modal} mesg={'로그인'} onClick={onClickHandler}></Modal>
      </Project>
    </ProjectBlock>
  );
};

export default Login;
