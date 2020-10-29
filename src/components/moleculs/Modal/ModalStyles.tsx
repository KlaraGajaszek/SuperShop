import styled from 'styled-components';

export const ModalBox = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  padding-top: 10px;
  min-width: 50%;
  background-color: #ffff;
  width: 40%;
  margin: auto;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: black;
  color: #ffff;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  margin: 0 10px 0 0;
`;

export const ModalTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
