import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 10;
  }

  .arrow.left {
    left: -50px;
  }

  .arrow.right {
    right: -50px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: #000;
  resize: horizontal;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
`;

export const ResizeHandle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  cursor: ew-resize;
  background-color: rgba(255, 255, 255, 0.1);
`;
