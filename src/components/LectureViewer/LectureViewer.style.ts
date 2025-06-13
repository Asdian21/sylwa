import styled from "styled-components";

export const StyleLectureViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfbfbfba;
  height: 100vh;

  .splide {
    width: 60vw;
    max-width: 1280px;
    aspect-ratio: 16 / 9;
    background: #f0f0f0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: visible;
    position: relative; /* Чтобы стрелки позиционировались относительно слайдера */
    margin-top: 30px;
  }

  .splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Контейнер для стрелок */
  .splide__arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none; /* Чтобы стрелки не мешали клику по слайду */
  }

  .splide__arrow {
    position: absolute;
    background-color: rgba(165, 195, 109, 0.62);
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .splide__arrow:hover {
    background-color: rgba(198, 247, 50, 0.8);
  }

  .splide__arrow--prev {
    left: -60px;
    background-image: url("./left-arrow.png");
    background-size: contain;
  }

  .splide__arrow--next {
    right: -60px;
    background-image: url("./right-arrow.png");
    background-size: contain;
  }

  .splide__arrow--prev svg {
    display: none;
  }
  .splide__arrow--next svg {
    display: none;
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
    top: 30px;
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
`;
