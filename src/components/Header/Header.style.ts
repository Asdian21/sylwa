import styled from "styled-components";

export const StyleHeader = styled.div`
  /* border: 1px solid red; */
  .header {
    display: flex;
    justify-content: space-between;
    height: 53px;
    align-items: center;
    background-color: rgb(30, 41, 27);
    ul {
      display: flex;
      list-style: none;
      gap: 68px;

      li {
        transition: filter 0.3s ease-in-out;
        :hover {
          color: #eee;
          text-shadow: 0 0 10px rgb(43, 255, 0, 0.5),
            0 0 20px rgb(43, 255, 0, 0.5), 0 0 30px rgb(43, 255, 0, 0.5),
            0 0 40px rgb(43, 255, 0, 0.8);
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
    }
    .search input {
      background-color: black;
      border: 0;
      font-size: 16px;
      color: whitesmoke;
      padding: 15px;
      height: 40px;
      width: 40px;
      transition: ease 0.8 ease;
      border-radius: 25px;
    }
  }
`;
