import styled from 'styled-components';

export const ErrorBoxWrapper = styled.div<{ bgcolor: string; radius: string }>`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.radius};
  border: none;
  outline: none;
  background-color: ${(props) => props.bgcolor};
  text-align: center;
  text-justify: center;
  margin-top: 50px;
`;
