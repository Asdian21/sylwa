import styled from "styled-components";

export const StyleVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(4.9vw + 265px);
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 35px;
    object-fit: cover;
    background-repeat: no-repeat;
    width: 100%;
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;

    h3 {
      font-weight: bold;
      font-size: calc(0.7vw + 13.876px);
      //
      line-height: 140%;
      a {
        text-decoration: none;
        color: #222222;
      }
    }
    p {
      font: medium 16px "Inter";
      color: #666666;
    }
  }

  @media (320px <= width <= 850px) {
    width: 320px;
  }
`;
