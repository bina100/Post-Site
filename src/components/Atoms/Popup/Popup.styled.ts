import styled from "styled-components";

export const PopupWrapper = styled.div<{
  $backgroundHeader?: string;
  $colorTextHeader?: string;
  $backgroungCloseButton?: string;
}>`
  .popup-header {
    height: 50px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    color: ${(props) => props.$colorTextHeader ?? "#ECF2F9"};
    background-color: ${(props) => props.$backgroundHeader ?? "#666"};
  }

  .popup-title {
    font-size: 19px;
    align-items: center;
  }

  .popup-title-header {
    padding: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .popup-button-close {
    left: 25px;
    width: 16px;
    height: 15px;
    cursor: pointer;
    position: absolute;
  }

  .background-close-button {
    left: 10px;
    width: 15px;
    height: 15px;
    padding: 15px;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    border: 2.5px solid #fff;
    background-color: ${(props) => props.$backgroungCloseButton};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-header img {
    height: 15px;
    position: absolute;
  }

  .popup-content {
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    height: calc(100% - 100px);
    min-height: 400px;
  }

  .popup-footer {
    height: 60px;
    display: flex;
    padding: 14px 14px;
    align-items: center;
    background-color: white;
    justify-content: flex-end;
    align-content: space-around;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0px 0px 13px 0px rgba(34, 50, 91, 0.15);
    border-top: 1px solid var(--grayscale-grayscale-light-4, #e6e6e6);
  }

  .cancel-button,
  .submit-button {
    margin: 0px 4px;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &:hover {
      border: none;
    }
  }
`;
