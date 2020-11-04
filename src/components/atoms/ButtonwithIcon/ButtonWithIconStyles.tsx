import styled from 'styled-components';

export const ButtonWithIconStyles = styled.button<{
  radius: string;
  margin: string;
  height: string;
  width: string;
}>`
  border-radius: ${(props) => props.radius};
  float: none !important;
  border: none;
  outline: none;
  margin: ${(props) => props.margin};
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: #ffff;
  background-color: transparent;
  color: red;
`;
