import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1024px;
  margin: 0 auto; */
  background-color: rgba(144, 202, 249, 0.5);
  padding: 5px 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const LiItem = styled.li`
  font-size: 20px;
  margin: 0 20px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  float: left;
  -webkit-transition: 0.5s ease;
  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
      0 -4px 15px rgba(255, 255, 255, 0.5);
  }
`;
export const AItem = styled.a`
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: black;
`;
export const NavbarContainerUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;
