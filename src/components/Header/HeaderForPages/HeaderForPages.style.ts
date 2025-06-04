import styled from "styled-components";

export const StyleHeaderForPages = styled.div`
  .header {
    display: flex;
    justify-content: space-around;
    height: 53px;
    align-items: center;
    background-color: rgb(30, 41, 27);
  }

  li {
    display: flex;
    transition: filter 0.3s ease-in-out;
    :hover {
      color: #eee;
      text-shadow: 0 0 10px rgb(43, 255, 0, 0.5), 0 0 20px rgb(43, 255, 0, 0.5),
        0 0 30px rgb(43, 255, 0, 0.5), 0 0 40px rgb(43, 255, 0, 0.8);
    }

    a {
      display: flex;
      margin-top: 5px;
      text-decoration: none;
      color: white;
      background-color: rgb(30, 41, 27);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
