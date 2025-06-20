import styled from "styled-components";

export const StyleLectureViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfbfbfba;
  height: 100vh;

  .slider {
    margin: auto;
  }

  .splide {
    width: 65vw;
    max-width: 1800px;
    aspect-ratio: 16 / 9;
    background: #f0f0f0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: visible;
    position: relative; /* Чтобы стрелки позиционировались относительно слайдера */
    margin: auto;
  }

  .splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .splide__arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .splide__arrow--prev {
    left: -60px;
    background-size: contain;
  }

  .splide__arrow--next {
    right: -60px;
    background-size: contain;
  }

  .pdf-container {
    margin: 20px auto;
    width: 100%;
    border: 3px solid yellowgreen;
    background: white;
    text-align: center;

    embed {
      border: none;
    }
  }

  /* Button styles start */

  .glow-on-hover {
    width: 60%;
    min-width: 200px;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    position: absolute;
    top: -10px;
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

  /* Exit button styles start */

  /* .exit-fullscreen-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 12px 18px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    z-index: 10000;
    transition: background 0.3s ease;
  }

  .exit-fullscreen-btn:hover {
    background: rgba(255, 0, 0, 0.8);
  } */

  /* Exit button styles end */
`;

export const FullscreenSliderWrapper = styled.div`
  &.fullscreen-slider {
    position: fixed;
    inset: 0;
    z-index: 5;
    background-color: black;

    .splide {
      width: 100%;
      margin: auto;
    }

    .splide__slide img {
      width: 100vw;
      height: 100vh;
      object-fit: contain;
    }

    .exit-fullscreen-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      padding: 12px 18px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      z-index: 6;
      transition: background 0.3s ease;
    }

    .exit-fullscreen-btn:hover {
      background: rgba(255, 0, 0, 0.8);
    }

    .none {
      display: none;
    }
  }
`;
