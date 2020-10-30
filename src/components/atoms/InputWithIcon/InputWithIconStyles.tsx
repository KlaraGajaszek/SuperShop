import styled from 'styled-components';

export const InputDefault = styled.input<{ radius: string; margin: string }>`
  border-radius: ${(props) => props.radius};
  border-color: #888888;
  border: none;
  outline: none;
  height: 35px;
  width: 60%;
  padding-left: 6px;
  background-color: #dcdcdc;
  margin: ${(props) => props.margin};
`;
