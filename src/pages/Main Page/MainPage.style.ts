import styled from "styled-components";

export const StyleMainPage = styled.div`
  .stickyHeader {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .join-wind {
    display: flex;
    height: 100vh;
    background-image: url(./test.JPG);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;

    .shadow {
      width: 100%;
      background: radial-gradient(
        62% 50% at 63.4% 31.900000000000002%,
        rgba(255, 255, 255, 0) 25%,
        rgba(0, 0, 0, 0.75) 100%
      );
      h1 {
        width: 345px;
        color: white;
        font-size: 79px;
        display: flex;
        margin-top: 120px;
        margin-left: 80px;
      }
      .creator {
        border: 1px solid white;
        width: 250px;
        color: white;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-left: auto;
        margin-top: 80px;
      }
    }
  }
  .lecture-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .practice-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .video-classes-wind {
    display: flex;
    height: 100vh;
    background-image: url(./knowledge_1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .metodichka-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_5.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .tests-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_2.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  @media (width <= 430px) {
    .join-wind .shadow h1 {
      width: 240px;
      font-size: 46px;
      margin: 200px auto;
    }
  }

  /* Scroll styles start */

  .custom-progress-slider .splide__pagination {
    display: flex;
    gap: 15px;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
  }

  .custom-progress-slider .splide__pagination__page {
    width: 60px;
    height: 4px;
    background-color: #ccc;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
  }

  .custom-progress-slider .splide__pagination__page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #00bcd4;
    transition: none;
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

  /* Scroll styles end */
`;
