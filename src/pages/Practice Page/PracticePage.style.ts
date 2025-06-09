import styled from "styled-components";

export const StylePracticePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

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
    /* Button styles start */

    button {
      width: 60%;
      min-width: 150px;
      padding: 0.75rem;
      border-radius: 8px;
      background-color: #fff;
      color: #333;
      font-size: 1rem;
      border: none;
      font-weight: 600;
      font-family: "Inter", sans-serif;
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

  /* Pagination styles start */

  .custom-progress-slider .splide__pagination__page {
    width: 20px;
    border-radius: 99px;
  }

  .custom-progress-slider .splide__pagination__page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 99px;
    width: 0;
    background-color: #00bcd4;
    animation-fill-mode: forwards;
  }

  .custom-progress-slider .splide__pagination__page.is-active::before {
    animation: progressBar 5s linear forwards;
  }

  @keyframes progressBar {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  /* Pagination styles end */
`;
