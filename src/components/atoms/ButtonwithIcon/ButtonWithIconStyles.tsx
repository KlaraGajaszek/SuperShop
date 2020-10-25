import styled from 'styled-components';

export const ButtonWithIconStyles = styled.button<{
  bgcolor: string;
  radius: string;
  margin: string;
}>`
  border-radius: ${(props) => props.radius};
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: ${(props) => props.bgcolor};
  margin: ${(props) => props.margin};
  cursor: pointer;
  height: 30px;
  color: #ffff;
`;
