import styled from 'styled-components'

export const BoxWrapper = styled.div`
  display: flex;
`

export const Box = styled.div`
  margin: 100px auto auto;
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  border-radius: 8px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
`

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
`
