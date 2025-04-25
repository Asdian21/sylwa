import styled from "styled-components";

export const StyleCenterDiv = styled.div`
  @font-face {
    font-family: "Inter";
    src: url("./src/assets/fonts/Inter_18pt-Black.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 10vh auto;
  width: 90%;
  max-width: 390px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: 6vw;
    max-width: 90%;
    color: white;
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-size: 4.5vw;
    color: rgba(255, 255, 255, 0.86);
    font-weight: 500;
  }

  button {
    width: 60%;
    min-width: 150px;
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
    width: 70%;
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

  /* Дополнительная адаптация для совсем маленьких экранов */
  @media (max-width: 480px) {
    h1 {
      font-size: 7vw;
    }

    h2 {
      font-size: 5vw;
    }

    button {
      width: 80%;
      font-size: 0.9rem;
    }

    .glow-on-hover {
      height: 45px;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;
