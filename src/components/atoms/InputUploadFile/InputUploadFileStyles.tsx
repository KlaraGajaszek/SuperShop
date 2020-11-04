import styled from 'styled-components';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';

export const InputUploadWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
  width: 80px;
  height: 80px;
  font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
  color: #7f7f7f;
  margin-top: 3px;
  background: #dcdcdc;
  cursor: pointer;
  padding: 5px;
`;
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
`;
export const FileTitle = styled.h1`
  color: #f92a70;
  font-size: 12px;
`;
export const FieleText = styled.h1`
  color: #f92a70;
  font-size: 40px;
  margin-top: 5px;
`;
export const FileIcon = styled(BsFileEarmarkArrowUp)`
  height: 40px;
  width: 40px;
`;
export const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
`;
