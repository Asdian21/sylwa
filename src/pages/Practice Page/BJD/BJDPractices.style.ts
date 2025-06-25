import styled from "styled-components";

export const StyleBJDPractice = styled.div`
  .gridCards {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  .searchDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
    h1 {
      display: flex;
      align-items: center;
    }
  }

  @media (width < 768px) {
    .gridCards {
      gap: 0;
    }
  }
`;
