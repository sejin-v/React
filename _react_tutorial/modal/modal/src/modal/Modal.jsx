import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const ModalOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  border: 3px solid green;
  height: 200px;
  width: 250px;
  background-color: white;
  > .hh {
    margin-bottom: 10px;
  }
  > .b {
    border: none;
    background: green;
  }
`;

const Modal = ({ visble, mesg, onClick }) => {
  return (
    visble && (
      <ModalOutter>
        <input className="hh"></input>
        <input className="hh"></input>
        <button class="b" onClick={onClick}>
          닫기
        </button>
      </ModalOutter>
    )
  );
};

export default Modal;
