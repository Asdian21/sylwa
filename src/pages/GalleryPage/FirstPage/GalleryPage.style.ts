import styled from "styled-components";

export const StyleGalleryPage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;

  > img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    cursor: pointer;
    background-color: rgba(64, 99, 106, 0.5);
    border-radius: 8px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (width < 768px) {
    grid-template-columns: repeat(2, 1fr);
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

  .close-modal-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    font-size: 24px;
    color: white;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
    z-index: 1001;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const ModalImage = styled.img`
  height: 80vh;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 20px auto;

  button {
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 18px;
    font-weight: 500;
  }

  /* Button styles start */

  .glow-on-hover {
    width: 10px;
    min-width: 80px;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }

  .glow-on-hover {
    width: 10px;
    max-width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  /* Button styles end */
`;

export const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1010;
  user-select: none;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
