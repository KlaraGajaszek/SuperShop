import styled from 'styled-components';

export const Button = styled.button<{ margin: string }>`
  background-color: transparent;
  border: none;
  outline: none;
  margin: ${(props) => props.margin};
  padding: 0;
`;

export const Icon = styled.i<{
  height: string;
  width: string;
  color: string;
}>`
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
`;
