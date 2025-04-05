import styled from "styled-components";

export const StyleMainPage = styled.div`
  .join-wind {
    display: flex;
    height: 100vh;
    background-image: url(./knowledge_1.png);
    background-size: cover;
    background-repeat: no-repeat;

    .shadow {
      width: 100%;
      background: radial-gradient(
        62% 50% at 63.4% 31.900000000000002%,
        rgba(255, 255, 255, 0) 25%,
        rgba(0, 0, 0, 0.75) 100%
      );
      h1 {
        width: 480px;
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
  }
  .practice-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .video-classes-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_4.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .metodichka-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_5.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tests-wind {
    display: flex;
    height: 100vh;
    background-image: url(./image_2.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
