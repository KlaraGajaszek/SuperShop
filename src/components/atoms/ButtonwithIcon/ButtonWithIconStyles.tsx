import styled from 'styled-components';

export const ButtonWithIconStyles = styled.button<{
  bgcolor: string;
  radius: string;
  margin: string;
}>`
  border-radius: ${(props) => props.radius};
  float: none !important;
  border: none;
  outline: none;
  padding: 5px 15px;
  background-color: ${(props) => props.bgcolor};
  margin: ${(props) => props.margin};
  cursor: pointer;
  height: 37px;
  color: #ffff;
`;
