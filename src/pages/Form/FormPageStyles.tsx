import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const Tag = styled.div`
  width: 100%;
`;
export const TagButton = styled.div`
  width: 20%;
`;
export const InputError = styled.span`
  color: red;
`;
