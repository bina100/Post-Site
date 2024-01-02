import styled from "styled-components";

export const TextcellWrapper = styled.div<{
  $rows: number;
  $closeIcon: boolean;
}>`
  display: flex;
  align-items: flex-start;
  color: #4d4d4d;
  font-size: 16px;
  height: auto;
  flex-direction: column;

  label {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 12px;
  }
  .label-icon {
    margin-left: 8px;
  }
  .text-div {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .text-cell {
    direction: ltr;
    text-align: right;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    font-weight: 400;
    font-size: 14px;
    padding: 12px;
    line-height: 22px;
    resize: none;
    color: #37474f;
    padding-left: ${(props) =>
      props.$rows > 1 && props.$closeIcon ? "30px" : "12px"};

    &:focus {
      outline-color: #254deb;
    }

    ::placeholder {
      color: #999999;
    }
  }
  .text-cell::-webkit-scrollbar {
    width: 8px;
  }

  .text-cell::-webkit-scrollbar-thumb {
    background-color: #b3b3b3;
    border-radius: 32px;
  }

  .text-cell::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    margin: 5px 0px;
    border-radius: 32px;
  }

  .x-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: ${(props) => (props.$rows > 1 ? "16px" : "42%")};
    left: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
