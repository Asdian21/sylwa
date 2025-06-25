import styled from "styled-components";

export const StyleVideoPage = styled.div`
  .gridCards {
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 16px;
    justify-content: center;
    align-items: flex-start;
  }

  .videoPagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .searchDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
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
`;
