import styled from "styled-components";

export const NotificationWrapper = styled.div<{
  $backgroundColor?: string;
  $colorText?: string;
}>`
  .notification-message {
    display: flex;
    position: absolute;
    top: 68px;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.$colorText ?? "#fff"};
    background-color: ${(props) => props.$backgroundColor ?? "#666"};

    p {
      text-align: center;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
