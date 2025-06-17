import styled from "styled-components";

export const StyleFirstPage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;

  /* Применяется ТОЛЬКО к обычным картинкам внутри сетки */
  > img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    cursor: pointer;
    background: rgb(68, 63, 63);
    border-radius: 8px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  height: 80vh;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;
