import styled from "styled-components";

export const StyleGreenSmartLectures = styled.div`
  .gridCards {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  @media (width < 768px) {
    .gridCards {
      gap: 0;
    }
  }
`;
