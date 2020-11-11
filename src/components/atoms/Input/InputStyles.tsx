import styled from 'styled-components';

export const FormikInput = styled.input<{ radius: string; margin: string }>`
  border-radius: ${(props) => props.radius};
  border-color: #888888;
  border: none;
  outline: none;
  height: 35px;
  padding-left: 6px;
  background-color: #dcdcdc;
  margin: ${(props) => props.margin};
  width: 100%;
`;

export const InputError = styled.span`
  color: red;
  margin-bottom: 5px;
`;

export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;
