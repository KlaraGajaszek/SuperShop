import styled from 'styled-components';

export const ModalBox = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 18, 30); /* Fallback color */
  background-color: rgba(0, 18, 30, 0.8); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  padding: 5px 5px 20px 5px; /* Location of the box */
  background-color: #062235;
  width: 380px;
  margin: auto;
  border-radius: 5px;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #f82a70;
  color: #ffff;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  margin: 0;
`;

export const ModalTitle = styled.p`
  color: #ffff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
