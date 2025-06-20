import styled from "styled-components";

export const StyleLectureCard = styled.div`
  display: flex;
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
  height: 200px;
  img {
    border-radius: 35px;
    object-fit: cover;
    background-repeat: no-repeat;
    min-width: 280px;
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
      /* display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden; */
      a {
        text-decoration: none;
        color: #222222;
      }
    }
    p {
      font: medium 16px "Inter";
      color: #666666;
    }
    button {
      width: 104px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #222222;
      border-radius: 8px;
      color: #ffffff;
      font: medium 14px "Inter";
    }
  }

  @media (width < 768px) {
    display: grid;
    grid-template-columns: auto;
    height: 500px;

    img {
      width: 80%;
      margin: 0 auto;
      height: 200px;
    }
  }
`;
