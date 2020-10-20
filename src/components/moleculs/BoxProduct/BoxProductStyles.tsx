import styled from 'styled-components';

export const Product = styled.button`
  display: grid;
  border: none;
  cursor: pointer;
  grid-template-columns: 40% 60%;
  margin: 15px 0;
  padding: 15px 15px;
  border-radius: 8px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
`;

export const Tags = styled.div`
  flex-direction: row;
  padding: 5px 45px;
  display: flex;
  background-color: #ffff;
`;

export const ImgBox = styled.div`
  display: block;
  grid-column: 1;
`;

export const DescriptionBox = styled.div`
  grid-column: 2;
`;
