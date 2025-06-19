import styled from "styled-components";

export const SideInfoBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;

  .text {
    font-size: calc(0.2vw + 15.259px);
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const ModalContent = styled.div`
  background: white;
  max-width: 700px;
  width: 90%;
  padding: 30px;
  border-radius: 12px;
  overflow-y: auto;
  max-height: 90vh;

  h2 {
    margin-top: 0;
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-top: 10px;
    text-indent: 25px;
  }
`;
