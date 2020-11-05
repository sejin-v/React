import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const Project = styled.div`
  border: 2px solid green;
  height: 250px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ProjectBlock = styled.div`
  position: fixed;
  border: 2px solid green;
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
        <button onClick={onClickHandler}>모달버튼</button>
        <Modal visble={modal} mesg={'로그인'} onClick={onClickHandler}>
          {/* 모달안에 사용할 component 입력 
            Modal에서 children으로 받을수 있다 
          */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, nisi?
          Inventore a minima facere iste, ea necessitatibus voluptates magni
          sequi unde! Maxime blanditiis at, incidunt exercitationem dignissimos
          eius quidem ratione!
        </Modal>
      </Project>
    </ProjectBlock>
  );
};

export default Login;
