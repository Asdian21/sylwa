import styled from "styled-components";

export const StyleLecturePage = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: calc(32.5vw + 192.632px);
    height: calc(21.1vw + 86.842px);
    border-radius: 20px;
  }
  .subject {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 80vh;
    gap: calc(2.6vw + 2.105px);
    margin-top: calc(3.5vw - 0.526px);
    margin-left: calc(6.1vw - 8.421px);
    margin-right: calc(6.1vw - 8.421px);
    margin-bottom: 10px;
  }

  .Info {
    display: flex;
    flex-direction: column;
    gap: calc(1.3vw + 1.053px);
    width: calc(21.9vw + 224.211px);
    h1 {
      font-size: calc(2.8vw + 7.579px);
      font-weight: bold;
      color: #333333;
      font-family: "Inter", sans-serif;
    }
    h2 {
      width: 100%;
      font-size: calc(1.1vw + 8.842px);
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

  .splide__pagination.splide__pagination--ltr {
    bottom: 0;
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
