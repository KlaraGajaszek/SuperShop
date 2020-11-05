import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  bgcolor: string;
  radius: string;
  margin: string;
  width: string;
}>`
  border-radius: ${(props) => props.radius};
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: ${(props) => props.bgcolor};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  cursor: pointer;
  height: 30px;
  color: #ffff;
`;
