import styled from "styled-components";

export const StyleAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 30px;
  padding: 10px;
  background-color: rgba(218, 218, 218, 0.25);
  color: #222;

  .leftSide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .userPhoto .userImg {
      width: calc(23.5vw + 209.63px);
      display: flex;
      margin: 0 auto;
    }
    .userFIO {
      font-size: 32px;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
    }
    .userJob {
      font-size: 24px;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
    }
    .userSocials {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .userEmail {
      font-size: 24px;
      font-weight: 400;
      line-height: 140%;
    }
    .userNumber {
      font-size: 24px;
      font-weight: 400;
      line-height: 140%;
    }
  }
  .rightSide {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .aboutUser {
      display: flex;
      border: 1px solid black;
      border-radius: 8px;
      backdrop-filter: blur(10px); // создаёт эффект размытия заднего фона
      -webkit-backdrop-filter: blur(10px); // для Safari

      .text {
        margin: 50px 20px;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      }
    }
    .firstRow {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-bottom: 10px;
    }
    .secondRow {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
  }

  /* Button styles start */

  .glow-on-hover {
    width: 60%;
    min-width: 250px;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    position: absolute;
  }

  .glow-on-hover {
    width: 70%;
    max-width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  /* Button styles end */

  @media (width <= 850px) {
    grid-template-columns: 1fr;
  }
`;
