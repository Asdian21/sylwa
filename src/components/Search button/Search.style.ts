import styled from "styled-components";

export const StyleSearch = styled.div`
  .input {
    width: 40px;
    height: 40px;
    background-color: #333;
    border: none;
    color: #eee;
    font-size: 16px;
    padding: 10px;
    border-radius: 20px;
    transition: width 1s ease;
    outline: none;
  }

  .input.expanded {
    width: 100px;
  }
`;
