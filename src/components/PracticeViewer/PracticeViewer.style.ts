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
    background: white;
    text-align: justify;

    /* Стили для docx-preview */
    .docx {
      width: 100%;
      font-family: Arial, sans-serif;
      line-height: 1.5;
    }

    .docx p {
      text-indent: 2em; /* Красная строка */
      margin: 0.5em 0;
    }

    .docx img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 10px auto;
    }

    .docx table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
    }

    .docx table td,
    .docx table th {
      border: 1px solid #333;
      padding: 0.5em;
      text-align: left;
    }
  }
`;
