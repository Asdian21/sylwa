import styled from "styled-components";

export const StyleMainPage = styled.div`
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
        margin-top: 224px;
        margin-left: 80px;
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
`;
