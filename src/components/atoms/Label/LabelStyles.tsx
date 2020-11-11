import styled from 'styled-components';

export const LabelTitle = styled.span<{
  color: string;
}>`
  color: ${(props) => props.color};
  font-weight: 600;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const LabelIcon = styled.label`
  color: #f92a70;
  margin: 0px 5px 0 0;
`;
