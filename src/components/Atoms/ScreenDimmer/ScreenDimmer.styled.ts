import styled from "styled-components";

export const ScreenDimmerWrapper = styled.div<{
  $top?: string;
  $width?: string;
}>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;
