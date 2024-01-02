import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button<{
  $outlined: boolean;
  $width?: string;
  $iconSrc?: string;
  $backgroundColor?: string;
  $disable: boolean;
  $color: string;
}>`
  display: flex;
  height: auto;
  width: ${(props) => props.$width || "auto"};
  padding: 8px 12px;
  justify-content: ${(props) => (props.$iconSrc ? "flex-start" : "center")};
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: ${(props) => props.$backgroundColor};
  color: ${(props) => (props.$disable ? "gray" : props.$backgroundColor)};
  margin: 4px;

  ${({ $disable }) =>
    $disable &&
    css`
      pointer-events: none;
      background: gray;
    `}

  ${({ $outlined, $backgroundColor, $disable, $color }) =>
    $outlined
      ? css`
          border: 1px solid ${$disable ? "gray" : $backgroundColor};
          background: #fff;
        `
      : css`
          color: ${$color || "var(--grayscale-grayscale-white, #fff)"};
        `}

  border-radius: 8px;
  font-family: Open Sans;

  img {
    height: 24px;
  }

  .text {
    text-align: center;
  }

  &:hover {
    background: ${(props) => props.$backgroundColor};
    background-image: ${(props) =>
      props.$outlined
        ? "linear-gradient(rgb(225 225 225/80%) 0 0)"
        : "linear-gradient(rgb(0 0 0/20%) 0 0)"};
  }

  &:active {
    background: ${(props) => props.$backgroundColor};
    background-image: ${(props) =>
      props.$outlined
        ? " linear-gradient(rgb(225 225 225/50%) 0 0)"
        : "linear-gradient(rgb(0 0 0/40%) 0 0)"};
  }

  border: ${(props) => (props.$outlined ? "auto" : "none")};
`;
