import styled from "styled-components";

export const NotificationBehaviorWrapper = styled.div`
  width: 100%;
  align-self: center;
  position: fixed;
  top: 0%;
  left: 0%;
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
