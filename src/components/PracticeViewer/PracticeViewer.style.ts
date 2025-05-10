import styled from "styled-components";

export const StylePracticeViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfbfbfba;

  .text__container {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 20px;
    width: calc(100% - 400px);
    border: 3px solid yellowgreen;
    background: transparent;
    text-align: justify;

    img {
      width: 70%;
      display: flex;
      margin: 10px auto;
    }

    p {
      font-family: "Lovelo", sans-serif;
    }
  }
`;
