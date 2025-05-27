import styled from "styled-components";

export const StyleVideoCard = styled.div`
  display: flex;
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
  img {
    border-radius: 35px;
    object-fit: cover;
    background-repeat: no-repeat;
    width: 30%;
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
    line-height: 20px;

    h3 {
      font: bold 20px "Inter";
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
`;
