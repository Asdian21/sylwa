import styled from "styled-components";

export const StyleLecturePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: rgb(127, 158, 121);
  height: 100vh;

  img {
    width: 660px;
    border-radius: 20px;
  }
  .energetika {
    display: flex;
    gap: 40px;
    align-items: center;
    margin: 0 80px;
  }
  .smart-technology {
    display: flex;
    flex-direction: row-reverse;
    gap: 40px;
    align-items: center;
    margin: 0 80px;
  }
  .life-save {
    display: flex;
    gap: 40px;
    align-items: center;
    margin: 0 80px 100px;
  }

  .Info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-size: 48px;
      font-weight: bold;
      color: #333333;
      font-family: "Inter", sans-serif;
    }
    h2 {
      width: 400px;
      font-size: 24;
      font-weight: medium;
      font-family: "Inter", sans-serif;
      color: #888888;
    }
    /* button {
      width: 108px;
      height: 40px;
      background-color: #222222;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      font-weight: bold;
      font-family: "Inter", sans-serif;
      font-size: 14px;
    } */
    /* From Uiverse.io by nikk7007 */
    button {
      width: 162px;
      border-radius: 40px;
      padding: 0.8em 1.2em;
      border: 2px solid #17c3b2;
      position: relative;
      overflow: hidden;
      background-color: transparent;
      text-align: center;
      text-transform: uppercase;
      font-size: 16px;
      transition: 0.3s;
      z-index: 1;
      font-family: inherit;
      color: #17c3b2;
    }

    button::before {
      content: "";
      width: 0;
      height: 300%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: #17c3b2;
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    button:hover::before {
      width: 105%;
    }

    button:hover {
      color: #ffffff;
    }
  }

  .header {
    display: flex;
    justify-content: space-around;
    height: 53px;
    align-items: center;
    background-color: rgb(30, 41, 27);
    ul {
      display: flex;
      list-style: none;
      gap: 90px;

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
  }
`;
