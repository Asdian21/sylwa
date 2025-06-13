import styled from "styled-components";

export const StylePracticeViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfbfbfba;

  .pdf-container {
    width: 100%;
    background: white;
    text-align: center;

    embed {
      border: none;
    }
  }
`;
