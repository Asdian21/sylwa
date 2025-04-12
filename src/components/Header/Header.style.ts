import styled from "styled-components";

export const StyleHeader = styled.div`
  /* border: 1px solid red; */
  .header {
    display: flex;
    justify-content: space-between;
    height: 53px;
    align-items: center;
    background-color: rgb(30, 41, 27);
  }

  @media (width <= 840px) {
    ul.nav {
      color: blue;
      flex-direction: column;
      position: absolute;
      top: 53px;
      left: 0;
      width: 100%;
      background-color: rgb(30, 41, 27);
      gap: 20px;
      padding: 20px 0;
      z-index: 10;
    }
  }
`;
