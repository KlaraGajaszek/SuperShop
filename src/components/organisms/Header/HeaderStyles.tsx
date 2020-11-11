import styled from 'styled-components';

export const HeaderBlock = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 18, 30);
  position: fixed;
  padding: 0 25px;
  overflow-y: hidden;
`;

/*Navigation*/

export const LiItem = styled.li`
  font-size: 20px;
  margin: 0 20px;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  -webkit-transition: 0.5s ease;
  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  }
`;
export const AItem = styled.a`
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: #ffff;
`;

export const NavbarContainerUl = styled.ul`
  list-style-type: none;
  margin-right: 40px;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.a`
  background-color: red;
  font-size: 25px;
  cursor: pointer;
`;
