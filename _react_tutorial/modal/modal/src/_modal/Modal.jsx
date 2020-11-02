import React, { useEffect, useRef, useState } from 'react';
import Page from './Page';
import styled from 'styled-components';
import Login from './Login';
const ModalOutter = styled.div`
  position: fixed;
  border: 1px solid green;
  height: 250px;
  width: 300px;
`;

const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 250px;
  border: 1px solid green;
`;
const ModalBlock = styled.div`
  border: 1px solid green;
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = ({ children, mesg }) => {
  const [isOpen, setIsOpne] = useState(false);

  const outside = useRef();

  // const handleClick = (e) => {
  //   if (outside.current.contains(e.target)) {
  //     console.log(e.target);
  //     return;
  //   }
  //   setIsOpne(false);
  // };

  const onClick = () => {
    setIsOpne(!isOpen);
  };

  // useEffect(() => {
  //   const getClick = document.addEventListener('click', handleClick);
  //   return () => {
  //     getClick();
  //   };
  // }, []);
  // const clickHandler = () => {
  //   if (isOpen === true) {
  //     setIsOpne(!isOpen);
  //   }
  // };
  return (
    <ModalBlock>
      <ModalInner>
        <button class="b" onClick={onClick}>
          {mesg}
        </button>
        {isOpen ? (
          <ModalOutter>
            <Page set={setIsOpne} children={children} />
          </ModalOutter>
        ) : null}
      </ModalInner>
    </ModalBlock>
  );
};

export default Modal;
