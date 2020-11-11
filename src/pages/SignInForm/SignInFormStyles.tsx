import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 18, 30, 0.4);
  border-radius: 0 5px 5px 0;
  height: calc(100vh-100px);
`;

export const LabelWrapper = styled.div`
  width: 60%;
`;

export const Title = styled.div`
  color: #ffff;
  margin-top: 15px;
  font-size: 30px;
  text-decoration: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
