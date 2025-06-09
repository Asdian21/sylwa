import styled from "styled-components";

export const StyleLectureViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfbfbfba;

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

  .text__container .docx p {
    text-indent: 2em;
    margin: 0.5em 0;
  }
`;
