import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  width: 100%;
  padding: 15px 15px;
  border-radius: 8px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
`;
