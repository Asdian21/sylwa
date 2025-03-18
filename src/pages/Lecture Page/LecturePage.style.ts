import styled from "styled-components";

export const StyleLecturePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 100px;

  img {
    width: 660px;
    border-radius: 20px;
  }
  .energetika {
    display: flex;
    gap: 80px;
    align-items: center;
  }
  .smart-technology {
    display: flex;
    flex-direction: row-reverse;
    gap: 80px;
    align-items: center;
  }
  .life-save {
    display: flex;
    gap: 80px;
    align-items: center;
  }

  .Info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-size: 48px;
      font-weight: bold;
      color: #333333;
      font-family: "Inter", sans-serif;
    }
    h2 {
      width: 400px;
      font-size: 24;
      font-weight: medium;
      font-family: "Inter", sans-serif;
      color: #888888;
    }
    button {
      width: 108px;
      height: 40px;
      background-color: #222222;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      font-weight: bold;
      font-family: "Inter", sans-serif;
      font-size: 14px;
    }
  }
`;
