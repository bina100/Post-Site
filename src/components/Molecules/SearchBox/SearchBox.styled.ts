import styled, { css } from "styled-components";

export const SearchBoxWrapper = styled.div<{ searchvalue: string }>`
  height: 68px;
  display: flex;
  padding: 0px 8px;
  align-items: center;
  background: initial;

  .button-style:focus {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  .input-wrapper {
    width: 100%;
    height: 45px;
    padding: 1.5%;
    display: flex;
    position: relative;
    /* margin-right: 1.5%; */
    border-radius: 27px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
  }

  .button-style {
    width: 75px;
    height: auto;
    justify-content: center;
  }

  .x-icon {
    width: 20px;
    margin-left: 10px;
    height: 20px;
  }

  .search-icon {
    width: 20px;
    right: 10px;
    margin-right: 10px;
    z-index: 2;
    height: 18px;
    display: flex;
    position: relative;
    justify-content: center;
  }

  .clean-button {
    z-index: 2;
    height: 18px;
    display: flex;
    position: relative;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }

  ${(props) =>
    css`
      .search-icon {
        right: ${props.searchvalue !== "" ? "4.5px" : "4.5px"};
      }

      .clean-button {
        opacity: ${props.searchvalue !== "" ? 1 : 0};
        display: ${props.searchvalue !== "" ? "flex" : "none"};
      }

      /* .input-wrapper {
        width: ${props.searchvalue !== "" ? "calc(100% - 50px)" : "95%"};
      } */
      .button-style {
        display: ${props.searchvalue !== "" ? "flex" : "none"};
      }
      .custom-inptu {
        padding-right: ${props.searchvalue !== "" ? "10px" : "35px"};
      }
    `}

  .custom-input:focus {
    outline: none;
  }

  .custom-input {
    z-index: 1;
    height: auto;
    color: #999999;
    direction: rtl;
    text-align: right;
    font-size: 17.5px;
    position: relative;
    padding-right: 15px;
    border-radius: 16px;
  }

  .custom-input::-webkit-input-placeholder {
    position: absolute;
  }

  .circle {
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: rgba(27, 34, 58, 1);
  }

  .x {
    width: 3rem;
    height: 3rem;
  }

  .x::before,
  .x::after {
    width: 2px;
    content: "";
    height: 2rem;
    position: absolute;
    background-color: black;
  }

  .x::before {
    transform: rotate(45deg);
  }

  .x::after {
    transform: rotate(-45deg);
  }
`;
