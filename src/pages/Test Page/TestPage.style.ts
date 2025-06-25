import styled from "styled-components";

export const StyleTestPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
  flex-wrap: wrap;

  .questions {
    flex: 1;
    min-width: 300px;
  }

  .questionsInner {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1 {
      font-size: 1.8rem;
    }

    .overallResult {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .resultsGraph {
    flex: 1;
    min-width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;

    .questions,
    .resultsGraph {
      width: 100%;
    }

    .questionsInner h1 {
      font-size: 1.4rem;
    }

    .overallResult {
      font-size: 1rem;
    }
  }
`;

export const StyleHeaderForPages = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;

  .header {
    display: flex;
    justify-content: space-around;
    height: 53px;
    align-items: center;
    background-color: rgb(30, 41, 27);
  }
`;
