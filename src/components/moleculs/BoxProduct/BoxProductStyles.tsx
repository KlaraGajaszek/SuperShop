import styled from 'styled-components';

export const Card = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  padding: 15px 15px;
  border-radius: 8px;
  background-color: #fff;
  height: 250px;
  width: 70vw;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const Tags = styled.div`
  flex-direction: row;
  padding: 5px 0px;
  display: flex;
  bottom: 0;
`;

export const ImageData = styled.div`
  width: 40%;
  height: 100%;
`;

export const DescriptionBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: space-around;
  margin: 0 0 0 10px;
`;
