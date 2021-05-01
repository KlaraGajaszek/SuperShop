import styled from 'styled-components'
import { Close } from '@styled-icons/evaicons-solid'

export const ModalBox = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  background-color: #ffffff;
  margin: auto;
  border-radius: 5px;
`
export const Header = styled.div`
  margin-bottom: 45px;
`

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  margin: 10px;
  padding: 0 1px 0 0;
  :hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    color: black;
  }
`

export const CloseIcon = styled(Close)`
  width: 30px;
  height: 30px;
  color: #616060;
  :hover {
    color: black;
  }
`

export const ModalTitle = styled.p`
  color: #4c4c4c;
  font-weight: bold;
  font-size: 25px;
  padding-top: 5px;
  margin-left: 15px;
`

export const ModalFooter = styled.div`
  background-color: #f5f5f5;
  margin-left: -40px;
  border-radius: 0 0 5px 5px;
  padding: 2% 0% 2% 80%; ;
`
