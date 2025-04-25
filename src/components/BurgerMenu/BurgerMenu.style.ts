import styled from "styled-components";

export const StyleBurgerMenu = styled.div`
  /* RESET/BASIC STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  :root {
    --white: #ffffff;
    --light-grey: #edf0f1;
    --violet: #655be1;
    --dark-violet: #5146e1;
    --black: #21232a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: auto 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: "Inter", sans-serif;
    text-align: center;
    padding: 0 20px;
    background: var(--light-grey);
    color: var(--white);
  }

  .notification {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background: var(--violet);
  }

  /* MAIN STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  .nav {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 65px auto 0;
  }

  .nav [type="checkbox"] {
    position: absolute;
    left: -9999px;
  }

  .nav [type="checkbox"] + label {
    position: relative;
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    background: transparent;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;
    color: #edf0f1;
  }

  .nav [type="checkbox"] + label:hover {
    background: var(--dark-violet);
  }

  .menu li {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.6 ease-in-out, opacity 0.6s ease;
    will-change: transform, opacity;
    pointer-events: none;
  }

  .menu li:nth-child(1) {
    transition-delay: 0.1s;
  }

  .menu li:nth-child(2) {
    transition-delay: 0.1s;
  }

  .menu li:nth-child(3) {
    transition-delay: 0.1s;
  }

  .menu li:nth-child(4) {
    transition-delay: 0.1;
  }

  .menu li:nth-child(5) {
    transition-delay: 0.1s;
  }

  .menu li a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--violet);
  }

  .menu li a {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(calc(-100% - 5px));
    width: 100%;
    font-size: 13px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    color: #edf0f1;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .nav input:checked + label {
    background: var(--black);
    transform: translateY(calc(-50% + 4px));
  }

  .nav input:checked ~ .menu li:nth-child(1) {
    width: 50px;
    height: 50px;
    background-color: #245432;
    border-radius: 30px;
    top: 80px;
    left: -60px;
    transition-delay: 0.8s;
    transition: 1s ease-in-out;
  }

  .nav input:checked ~ .menu li:nth-child(2) {
    width: 50px;
    height: 50px;
    background-color: #245432;
    border-radius: 30px;
    top: 260px;
    left: -110px;
    transition-delay: 0.2s;
    transition: 1s ease-in-out;
  }

  .nav input:checked ~ .menu li:nth-child(3) {
    width: 50px;
    height: 50px;
    background-color: #245432;
    border-radius: 30px;
    top: 155px;
    left: -150px;
    transition-delay: 0.3s;
    transition: 1s ease-in-out;
  }

  .nav input:checked ~ .menu li:nth-child(4) {
    width: 50px;
    height: 50px;
    background-color: #245432;
    border-radius: 30px;
    top: 155px;
    left: 30px;
    transition-delay: 0.4s;
    transition: 1s ease-in-out;
  }

  .nav input:checked ~ .menu li:nth-child(5) {
    width: 50px;
    height: 50px;
    background-color: #245432;
    border-radius: 30px;
    top: 260px;
    left: -10px;
    transition-delay: 0.4s;
    transition: 1s ease-in-out;
  }

  .nav input:checked ~ .menu li a span {
    opacity: 1;
    transition-delay: 0.9s;
  }
`;
