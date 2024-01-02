import styled from "styled-components";

export const HeaderWrapper = styled.div<{
  $background?: string;
  $height?: string;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 100%;
  margin: 0;
  perspective: 1000px;
  position: fixed;
  top: 0;
  .logo-container {
    display: flex;
    justify-content: flex-end;
    background-color: ${(props) => props.$background || "#444"};
    width: 100%;
    align-items: center;
    .logo-text {
      color: #fff;
      font-family: Assistant;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .logo {
      width: 47px;
      height: 52px;
      flex-shrink: 0;
      padding: 8px;
      margin: 8px;
    }
  }
`;
