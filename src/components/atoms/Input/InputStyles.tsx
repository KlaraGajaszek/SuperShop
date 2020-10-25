import styled from 'styled-components';

export const FormikInput = styled.input<{ radius: string; margin: string }>`
  border-radius: ${(props) => props.radius};
  border-color: #888888;
  border: none;
  outline: none;
  height: 28px;
  padding-left: 6px;
  background-color: #dcdcdc;
  margin: ${(props) => props.margin};
`;
