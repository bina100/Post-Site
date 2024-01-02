import styled from "styled-components";

export const PopupBehaviorWrapper = styled.div<{
  $width?: string;
  $height?: string;
}>`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.$width || "50%"};
  height: ${(props) => props.$height || "auto"};
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  z-index: 1001;
  align-self: center;
  margin: auto;
  animation: fadeIn 500ms ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
