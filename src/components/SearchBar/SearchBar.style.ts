import styled from "styled-components";

export const StyleSearchBar = styled.div`
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: rgb(36, 175, 73);
    padding-right: 40px;
    color: #222222;
  }
  .input-search::placeholder {
    color: #222222;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: rgba(225, 245, 79, 0.9);
    background-color: transparent;
    pointer-events: painted;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 0, 0, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
