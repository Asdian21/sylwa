import styled from "styled-components";

export const StyleLectureCard = styled.div`
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
`;
