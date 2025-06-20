import styled from "styled-components";

export const StyleLectures = styled.div`
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
  }

  @media (width < 768px) {
    .gridCards {
      gap: 0;
    }
  }
`;
